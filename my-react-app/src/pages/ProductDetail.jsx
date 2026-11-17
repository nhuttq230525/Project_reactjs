import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../components/data/Products";

import "./ProductDetail.css";

function ProductDetail() {
    //lay id
    const { id } = useParams();
    // chuyen trang
    const navigate = useNavigate();
    // tim sp theo id 
    const product = products.find(
        item => item.id === Number(id)
    );
    // qli so luong
    const [quantity, setQuanlity] = useState(1);

    const increaseQuantity = () => {
        setQuanlity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuanlity(quantity - 1);
        }
    };
    // Kiểm tra sản phẩm
    if (!product) {
        return (
            <div>
                <Header />
                <h2>Không tìm thấy sản phẩm!</h2>
                <button onClick={() => navigate("/products")}>
                    Quay lại sản phẩm
                </button>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <Header />

            <div className="product-detail">

                <div className="detail-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="detail-info">

                    <p className="detail-category">
                        {Array.isArray(product.category) // câu điều kiện , Biến product.category có phải là một cái mảng (array) hay không?"//
                            ? product.category.join(" - ") // đúng , sai
                            : product.category}
                    </p>

                    <h1>{product.name}</h1>

                    <p className="detail-price">
                        {product.price}
                    </p>

                    <p className="detail-description">
                        Thức uống được VINTEA tuyển chọn nguyên liệu
                        chất lượng, mang đến hương vị thơm ngon
                        và trải nghiệm tuyệt vời.
                    </p>

                    <div className="quantity-control">

                        <button onClick={decreaseQuantity}>
                            -
                        </button>

                        <span>{quantity}</span>

                        <button onClick={increaseQuantity}>
                            +
                        </button>

                    </div>

                    <button className="btn-add-cart">
                        Thêm vào giỏ hàng
                    </button>

                    <button
                        className="btn-back"
                        onClick={() => navigate("/products")}
                    >
                        Tiếp tục mua sắm
                    </button>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default ProductDetail;
