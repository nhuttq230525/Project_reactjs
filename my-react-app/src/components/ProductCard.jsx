import { useNavigate } from "react-router-dom";

function ProductCard({id, image, name, price, category }) {

  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info" data-category={category}>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <button className="btn-buy"
        onClick={handleViewDetail}>Xem Chi Tiết</button>
      </div>
    </div>
  );
}

export default ProductCard;