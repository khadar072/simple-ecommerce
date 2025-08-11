import productModal from "../modal/product.modal.js";

export const addProduct = async (req, res) => {
    try {
        const { name, price } = req.body
        const image = req.file

        if (!name || !price || !image) {
            return res.send({ success: false, message: "data is missing" })
        }

        const product = new productModal({
            name,
            price,
            image :image.filename
        })
        await product.save()
        return res.send({ success: true, message: "successfully" })

    } catch (error) {
        console.log(error.message);

    }
}
export const getProduct = async (req, res) => {
    try {

        const product = await productModal.find();
        return res.send({ success: true, product })

    } catch (error) {
        console.log(error.message);

    }
}
export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModal.findById(id);
        if (!product) {
            return res.send({ success: true, message:"this product is not exist" })
        }
        return res.send({ success: true, product })

    } catch (error) {
        console.log(error.message);

    }
}

export const updateSingleProduct = async (req, res) => {
    try {
        const {name ,price} = req.body;
        const file = req.file;
        const { id } = req.params
        const product = await productModal.findById(id);
        if (!product) {
            return res.send({ success: true, message:"this product is not exist" })
        }

  // Build update data dynamically
    const updateData = {};

    if (name) updateData.name = name;
    if (price) updateData.price = price;
    if (file) updateData.image = file.filename;

    // If no fields sent to update
    if (Object.keys(updateData).length === 0) {
      return res.send({ success: false, message: "No data to update" });
    }

        const updatedData = await productModal.findByIdAndUpdate(id,updateData,{new :true})
        return res.send({ success: true, message:"updated successfullt",updatedData })

    } catch (error) {
        console.log(error.message);

    }
}

export const deleteSingleProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModal.findByIdAndDelete(id);
        if (!product) {
            return res.send({ success: true, message:"this product is not exist" })
        }        
        return res.send({ success: true, message:"product deleted successfully" })
    } catch (error) {
        console.log(error.message);

    }
}