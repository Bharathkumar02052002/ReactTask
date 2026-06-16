const Product = ({ productName, productPrice, productCategory, productBrand }) => {
    return (
        <section>
            <h2>Task 3 - Product Details</h2>
            <p>Product Name: {productName}</p>
            <p>Product Price: {productPrice}</p>
            <p>Product Category: {productCategory}</p>
            <p>Product Brand: {productBrand}</p>
        </section>
    );
};

export default Product;
