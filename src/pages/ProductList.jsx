import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductList() {
    return (
        <Layout>
            <section className="text-center py-5 mb-4">
                <h1 className="display-4 fw-bold mb-3 text-dark">Featured Collection</h1>
                <p className="lead text-muted">Discover premium gadgets designed for modern life.</p>
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
