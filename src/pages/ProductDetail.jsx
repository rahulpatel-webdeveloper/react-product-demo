import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { products } from '../data/products';

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <Layout>
                <div className="text-center py-5">
                    <h2 className="mb-4">Product not found</h2>
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="row g-4">
                {/* Product Image */}
                <div className="col-lg-5">
                    <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex align-items-center justify-content-center border">
                        <img src={product.image} alt={product.name} className="img-fluid" style={{ maxHeight: '450px', objectFit: 'contain' }} />
                    </div>
                </div>

                {/* Product Info */}
                <div className="col-lg-4">
                    <div className="bg-white rounded-4 shadow-sm p-4 h-100 border">
                        <Link to="/" className="text-decoration-none text-muted mb-3 d-inline-block">&larr; Back to Products</Link>
                        <h1 className="h2 fw-bold text-dark mb-3">{product.name}</h1>
                        <hr className="my-4 text-muted opacity-25" />
                        <h5 className="fw-bold mb-3">About this item</h5>
                        <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>{product.details}</p>
                        <div className="mt-auto">
                            <span className="badge bg-light text-primary border px-3 py-2 rounded-pill">Free Delivery</span>
                            <span className="badge bg-light text-success border px-3 py-2 rounded-pill ms-2">In Stock</span>
                        </div>
                    </div>
                </div>

                {/* Buy Box */}
                <div className="col-lg-3">
                    <div className="bg-white rounded-4 shadow-sm p-4 border sticky-top" style={{ top: '20px' }}>
                        <div className="mb-4">
                            <span className="text-muted d-block small mb-1">Price:</span>
                            <h2 className="display-6 text-primary fw-bold mb-0">{product.price}</h2>
                        </div>

                        <div className="d-grid gap-3">
                            <button className="btn btn-primary btn-lg py-3 rounded-3 shadow-sm fw-bold">
                                <i className="bi bi-cart-plus me-2"></i> Add to Cart
                            </button>
                            <button className="btn btn-outline-dark btn-lg py-3 rounded-3 fw-bold">
                                Buy Now
                            </button>
                        </div>

                        <hr className="my-4 text-muted opacity-25" />

                        <div className="small text-muted">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Ships from</span>
                                <span className="text-dark fw-medium">LuxeStore</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Sold by</span>
                                <span className="text-dark fw-medium">Official Brand</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Return Policy</span>
                                <span className="text-dark fw-medium">30 Days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
