import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import products from "../components/data/Products";
import '../App.css';


const featuredProducts = products.filter(
  product => product.featured);

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
          {featuredProducts.map(product => (
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