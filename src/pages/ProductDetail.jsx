import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { products } from '../data/products';

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <Layout>
                <div className="error-container">
                    <h2>Product not found</h2>
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="product-detail-container">
                <div className="detail-image-wrapper">
                    <img src={product.image} alt={product.name} className="detail-image" />
                </div>
                <div className="detail-content">
                    <Link to="/" className="back-link">&larr; Back to Products</Link>
                    <h1 className="detail-title">{product.name}</h1>
                    <p className="detail-price">{product.price}</p>
                    <p className="detail-description">{product.details}</p>
                    <button className="btn btn-primary btn-large">Add to Cart</button>
                </div>
            </div>
        </Layout>
    );
}
