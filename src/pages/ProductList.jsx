import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import HeroBanner from '../components/HeroBanner';
import { products } from '../data/products';

export default function ProductList() {
    return (
        <Layout>
            <HeroBanner />

            <section className="text-center py-5 mb-4">
                <h2 className="display-5 fw-bold mb-3 text-dark">All Products</h2>
                <p className="lead text-muted">Browse our complete collection of premium gadgets.</p>
            </section>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {products.map(product => (
                    <div className="col" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}

