const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
    productname:{type:String,require:true},
    productdis:{type:String,require:true},
    productcategory:{type:String,require:true},
    productprice:{type:String,require:true},
    Image:{type:String}
},{timestamps:true})
const productmodel=new mongoose.model("Product",ProductSchema)
module.exports=productmodel