import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import PageBanner from '../components/PageBanner';

// fetch products from DummyJSON API instead of local data


export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [displayed, setDisplayed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('none');
    const [itemsToShow, setItemsToShow] = useState(12);

    // helper for sorting
    const sortProducts = (list, option) => {
        switch (option) {
            case 'price-asc':
                return [...list].sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
            case 'price-desc':
                return [...list].sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
            case 'rating':
                return [...list].sort((a, b) => b.rating - a.rating);
            default:
                return list;
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=50');
                const data = await res.json();
                const norm = data.products.map(p => ({
                    id: p.id,
                    image: p.thumbnail || p.images?.[0] || '',
                    name: p.title,
                    price: `$${p.price}`,
                    description: p.description,
                    details: p.description,
                    category: String(p.category).toLowerCase(),
                    rating: p.rating
                }));
                setProducts(norm);
                // set initial displayed
                setDisplayed(norm.slice(0, itemsToShow));
            } catch (err) {
                console.error('Error fetching products', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();

        // fetch categories
        const fetchCats = async () => {
            try {
                const r = await fetch('https://dummyjson.com/products/categories');
                const d = await r.json();
                const catList = Array.isArray(d) ? d : (d.data || []);
                setCategories(['all', ...catList.map(c => String(c).toLowerCase())]);
            } catch (e) {
                console.error('Error fetching categories', e);
            }
        };
        fetchCats();
    }, []);

    useEffect(() => {
        // apply filter+sort whenever products, selectedCategory, or sortOption change
        let filtered = products;
        if (selectedCategory && selectedCategory !== 'all') {
            filtered = products.filter(p => String(p.category).toLowerCase() === String(selectedCategory).toLowerCase());
        }
        filtered = sortProducts(filtered, sortOption);
        setDisplayed(filtered.slice(0, itemsToShow));
    }, [products, selectedCategory, sortOption, itemsToShow]);

    const loadMore = () => {
        setItemsToShow(prev => prev + 12);
    };

    if (loading) {
        return (
            <Layout>
                <div className="text-center py-5">Loading products...</div>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageBanner
              title="Discover Premium Gadgets"
              subtitle="RP STORE"
              description="Explore our curated collection of the latest technology and innovation. Find your perfect gadget today."
              backgroundImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=400&fit=crop&crop=center&q=80&ixlib=rb-4.0.3&auto=format"
              buttonText="Shop Now"
              buttonLink="/products"
            />
            <section className="mb-4 py-4">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="text-center text-md-start mb-3 mb-md-0">
                        <h2 className="display-5 fw-bold mb-1 text-dark">All Products</h2>
                        <p className="lead text-muted mb-0">Browse our complete collection of premium gadgets.</p>
                    </div>

                    {/* filters */}
                    <div className="d-flex gap-2 align-items-center">
                        <select className="form-select form-select-sm" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                            {categories.length > 0 ? (
                                categories.map(cat => {
                                    const label = String(cat).toLowerCase();
                                    const displayLabel = label === 'all' ? 'All Products' : label.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                                    return (
                                        <option key={label} value={label}>{displayLabel}</option>
                                    );
                                })
                            ) : (
                                <option value="all">All Products</option>
                            )}
                        </select>
                        <select className="form-select form-select-sm" value={sortOption} onChange={e => setSortOption(e.target.value)}>
                            <option value="none">Sort</option>
                            <option value="price-asc">Price ↑</option>
                            <option value="price-desc">Price ↓</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
            </section>
            <div className='container mb-5'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {displayed.map(product => (
                        <div className="col" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                {displayed.length < products.filter(p => selectedCategory==='all' ? true : String(p.category).toLowerCase() === String(selectedCategory).toLowerCase()).length && (
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-primary" onClick={loadMore}>View More</button>
                    </div>
                )}
            </div>
        </Layout>
    );
}


