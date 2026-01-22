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
            <div className="row align-items-center bg-white p-4 p-md-5 rounded-4 shadow-lg border">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="bg-light rounded-3 p-5 d-flex justify-content-center align-items-center">
                        <img src={product.image} alt={product.name} className="img-fluid" style={{ maxHeight: '400px', objectFit: 'contain' }} />
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column gap-3">
                    <Link to="/" className="text-decoration-none text-muted mb-2 d-block">&larr; Back to Products</Link>
                    <h1 className="display-4 fw-bold text-dark">{product.name}</h1>
                    <p className="display-6 text-primary fw-bold">{product.price}</p>
                    <p className="lead text-secondary">{product.details}</p>
                    <div className="mt-3">
                        <button className="btn btn-primary btn-lg px-5 shadow-sm">Add to Cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
