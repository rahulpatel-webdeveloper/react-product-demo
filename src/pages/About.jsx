import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="display-4 fw-bold mb-4 text-dark">About LuxeStore</h1>
                <div className="lead text-secondary">
                    <p className="mb-4">
                        Welcome to LuxeStore, your premier destination for high-end modern gadgets.
                        We believe that technology should not only be functional but also beautiful.
                        Our curated collection features the latest in audio, photography, and smart wearables,
                        designed to elevate your daily life.
                    </p>
                    <p className="mb-4">
                        Founded in 2026, we act as a bridge between premium tech manufacturers and
                        discerning customers who value quality and aesthetics. Every product in our
                        store is hand-picked and tested by our expert team.
                    </p>
                    <p>
                        Thank you for choosing LuxeStore. We are committed to providing you with
                        exceptional products and outstanding customer service.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
