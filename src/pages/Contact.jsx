import Layout from '../components/Layout';

export default function Contact() {
    return (
        <Layout>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h1 className="page-title">Contact Us</h1>
                <p className="page-subtitle" style={{ marginBottom: '3rem' }}>
                    Have a question? We'd love to hear from you.
                </p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message</label>
                        <textarea
                            rows="5"
                            placeholder="How can we help?"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                fontSize: '1rem',
                                fontFamily: 'inherit'
                            }}
                        ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Send Message</button>
                </form>

                <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>Email: support@luxestore.demo</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Tech Avenue, Silicon Valley, CA</p>
                </div>
            </div>
        </Layout>
    );
}
