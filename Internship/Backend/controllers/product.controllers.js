export const addProduct = (req, res) => {
    const { name, price, image } = req.body;

    const product = {
        name,
        price,
        image,
    };

    res.status(201).json({
        message: "Product added successfully",
        product,
    });
};


