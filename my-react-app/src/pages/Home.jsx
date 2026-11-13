import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../App.css';

const products = [
  {
    id: 1,
    name: "Cà phê",
    price: "29.000 VNĐ",
    image: "/images/cafe.jpg",
    category: "cà phê"
  },
  {
    id: 2,
    name: "Trà sữa chân trâu",
    price: "35.000 VNĐ",
    image: "/images/tra-sua.jpg",
    category: "trà sữa"
  },
  {
    id: 3,
    name: "Nước dừa trân châu dừa",
    price: "39.000 VNĐ",
    image: "/images/coconut.jpg",
    category: "nước dừa"
  },
  {
    id: 4,
    name: "Sữa tươi kem cheese",
    price: "29.000 VNĐ",
    image: "/images/stuoi-cheese.jpg",
    category: "sữa tươi"
  },
  {
    id: 5,
    name: "Olong khoai môn tươi",
    price: "35.000 VNĐ",
    image: "/images/olong-kmt.jpg",
    category: "trà"
  },
  {
    id: 6,
    name: "Chè khúc bạch",
    price: "39.000 VNĐ",
    image: "/images/khuc-bach.jpg",
    category: "chè"
  },
  {
    id: 7,
    name: " Hồng trà tươi",
    price: "39.000 VNĐ",
    image: "/images/hongtratuoi.jpg",
    category: "trà"
  },
  {
    id: 8,
    name: "Trà lựu",
    price: "39.000 VNĐ",
    image: "/images/giainhiet.jpg",
    category: "trà"
  }
];

function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <main className="main-content">
        <div className="title-seller">
          <p className="section-subtitle">OUR SIGNATURE COLLECTION</p>
          <h2 id="featured-products" className="section-title">TOP BEST SELLER</h2>
          <p className="section-decs">The drink that  started it all, each one a masterpiece of flavor and texture </p>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;