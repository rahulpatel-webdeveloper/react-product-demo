import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="card-image-wrapper">
                <img src={product.image} alt={product.name} className="card-image" />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{product.name}</h3>
                    <span className="card-price">{product.price}</span>
                </div>
                <p className="card-description">{product.description}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Product
                </Link>
            </div>
        </div>
    );
}
