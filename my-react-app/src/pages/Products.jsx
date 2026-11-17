import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../components/data/Products";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import { useState } from "react";


const categoryStories = {
    "tất cả": {
        title: "TINH HOA THỨC UỐNG TỰ NHIÊN",
        origin: "Tuyển chọn từ các vùng nguyên liệu trứ danh Việt Nam",
        description:
            "Mỗi ly thức uống là sự kết hợp hài hòa giữa nguồn nông sản sạch bản địa và công thức pha chế thủ công, giữ trọn hương vị nguyên bản và tươi mới nhất."
    },
    "cà phê": {
        title: "CÀ PHÊ NGUYÊN CHẤT",
        origin: "Vùng cao nguyên Cầu Đất (Lâm Đồng) & Buôn Ma Thuột",
        description:
            "Hạt cà phê Robusta và Arabica được thu hái chín mọng trên độ cao 1.500m, rang mộc theo mẻ nhỏ để giữ trọn hậu vị đậm đà, hương thơm nồng nàn đặc trưng."
    },
    "trà sữa": {
        title: "TRÀ SỮA ĐẬM VỊ",
        origin: "Đồi chè Bảo Lộc & Thái Nguyên",
        description:
            "Sử dụng lá trà Oolong và Hồng trà ủ lạnh trong 12 giờ kết hợp cùng sữa tươi thanh trùng béo ngậy và trân châu nấu đường đen thủ công mỗi ngày."
    },
    "nước dừa": {
        title: "NƯỚC DỪA TƯƠI BẾN TRE",
        origin: "Thủ phủ dừa Xanh Bến Tre",
        description:
            "Những trái dừa xiêm xanh tươi ngọt thanh tự nhiên, kết hợp cùng cùi dừa non giòn sần sật mang lại cảm giác giải nhiệt sảng khoái tức thì."
    }
};

function Products() {

    //mặc định hiển thị tất cả
    const [selectedCategory, setSelectedCategory] = useState("tất cả");

    // chức năng tìm kiếm
    const [keywork, setKeyword] = useState("");

    // sap xep gia san pham
    const [sortOrder, setSortOrder] = useState("default")

    //danh sách các nút phân loại
    const categories = ["tất cả", "nước dừa", "trà sữa", "cà phê", "trà", "đồ ăn vặt"];

    //lọc danh sách sản phẩm và tìm kiếm
    const filteredProducts = products.filter(product => {
        //kiem tra danh muc san pham
        const matchCategory =
            selectedCategory === "tất cả" ||
            product.category.includes(selectedCategory);
        // kiem tra tu khoa san pham
        const matchKeyword =
            product.name.toLocaleLowerCase().trim().includes(keywork.trim().toLocaleLowerCase());
        // san pham thoa man 2 dkien
        return matchCategory && matchKeyword;
    });

    //logic sap xem gia tri san pham
    const sortedProducts = [...filteredProducts].sort((a, b) => {

        const priceA = Number(a.price.replace(/\D/g, ""));
        const priceB = Number(b.price.replace(/\D/g, ""));

        if (sortOrder === "asc") {
            return priceA - priceB;
        }

        if (sortOrder === "desc") {
            return priceB - priceA;
        }

        return 0;
    });

    // lấy thông tin xuất xứ
    const originInfo =
        categoryStories[selectedCategory] || categoryStories["tất cả"];


    return (
        <div className="container">
            <Header />
            <div className="products-page-wrapper">
                {/* phần hiển thị nguồn gốc vs xuất xứ */}
                <div className="category-origin">
                    <div className="category-story-box">
                        <span className="origin-badge">NGUỒN GỐC & XUẤT XỨ</span>
                        <h2 className="origin-title">{originInfo.title}</h2>
                        <p className="origin-location">
                            <strong>Vùng nguyên liệu:</strong> {originInfo.origin}
                        </p>
                        <p className="origin-desc">{originInfo.description}</p>
                    </div>

                    <div className="button-filter-box">
                        <h3>CHỌN DÒNG THỨC UỐNG</h3>
                        <p>Nhấn vào từng loại để khám phá câu chuyện nguyên liệu và thực đơn:</p>
                        <div className="buttons-category">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`cat-btn ${selectedCategory === cat ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat.toUpperCase()}
                                </button>

                            ))}
                        </div>
                    </div>
                </div>

                <div className="filtered-products-section">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Tìm kiếm nước uống ngon nhất ..."
                            value={keywork}
                            onChange={(event) => setKeyword(event.target.value)}
                        />
                    </div>
                    <div className="sort-box">
                        <label htmlFor="sort-price">Sắp xếp theo giá:</label>

                        <select
                            id="sort-price"
                            value={sortOrder}
                            onChange={(event) => setSortOrder(event.target.value)}
                        >
                            <option value="default">Mặc định</option>
                            <option value="asc">Giá thấp đến cao</option>
                            <option value="desc">Giá cao đến thấp</option>
                        </select>
                    </div>
                    <div className="product-grid">
                        {filteredProducts.length > 0 ? (
                            sortedProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                />
                            ))
                        ) : (
                            <p className="no-products">
                                Không tìm thấy sản phẩm phù hợp!
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Products;
