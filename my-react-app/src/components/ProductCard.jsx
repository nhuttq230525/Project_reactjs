function ProductCard({ image, name, price, category }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info" data-category={category}>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <button className="btn-buy">Mua ngay</button>
      </div>
    </div>
  );
}

export default ProductCard;