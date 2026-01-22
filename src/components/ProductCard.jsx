import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div className="card h-100 shadow-sm border-0 transition-hover">
            <div className="card-img-top bg-light p-4 d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                <img src={product.image} alt={product.name} className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="h5 card-title mb-0 text-dark fw-bold">{product.name}</h3>
                    <span className="h5 text-primary fw-bold mb-0">{product.price}</span>
                </div>
                <p className="card-text text-muted small mb-3 flex-grow-1">{product.description}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary w-100 mt-2">
                    View Product
                </Link>
            </div>
        </div>
    );
}
