const ProductModel = require('../Models/ProductModel');
const multer = require('multer');
const path = require('path');

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploadsimg/'); // Directory for file uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage: storage });

// Insert a new product
exports.insert = [
    upload.single('image'), // Single file upload
    (req, res) => {
        const product = new ProductModel({
            productname: req.body.name,
            productdis: req.body.description,
            productcategory: req.body.category,
            productprice: req.body.price,
            Image: req.file.filename // Save the uploaded image filename
        });

        product.save()
            .then((product) => res.status(201).send(product))
            .catch((err) => res.status(500).send({ error: err.message }));
    }
];



// Get the list of products
exports.list = (req, res) => {
    ProductModel.find()
        .then((products) => res.status(200).send(products))
        .catch((err) => res.status(500).send({ error: err.message }));
};

// Delete a product by ID
exports.delete = (req, res) => {
    ProductModel.findByIdAndDelete(req.params.id)
        .then((product) => {
            if (!product) {
                return res.status(404).send({ message: "Product not found" });
            }
            res.status(200).send({ message: `${product.productname} deleted successfully` });
        })
        .catch((err) => res.status(500).send({ error: err.message }));
};


// Update a product by ID
exports.update = [
    upload.single('image'), // Handle image upload
    (req, res) => {
        const updateData = {
            productname: req.body.name,
            productdis: req.body.description,
            productcategory: req.body.category,
            productprice: req.body.price
        };

        // If a new image is uploaded, update the image field
        if (req.file) {
            updateData.Image = req.file.filename;
        }

        ProductModel.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true })
            .then((product) => {
                if (!product) {
                    return res.status(404).send({ message: "Product not found" });
                }
                res.status(200).send({ message: "Product updated successfully", updatedProduct: product });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send({ error: err.message });
            });
    }
];
