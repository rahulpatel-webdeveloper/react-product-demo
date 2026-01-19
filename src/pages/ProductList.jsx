import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductList() {
    return (
        <Layout>
            <section className="hero">
                <h1 className="page-title">Featured Collection</h1>
                <p className="page-subtitle">Discover premium gadgets designed for modern life.</p>
            </section>

            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Layout>
    );
}
