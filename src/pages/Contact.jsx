import Layout from '../components/Layout';

export default function Contact() {
    return (
        <Layout>
            <div className="container" style={{ maxWidth: '600px' }}>
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3 text-dark">Contact Us</h1>
                    <p className="lead text-muted">Have a question? We'd love to hear from you.</p>
                </div>

                <form className="d-flex flex-column gap-3 shadow-sm p-4 rounded bg-white border">
                    <div className="mb-3">
                        <label className="form-label fw-bold">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Message</label>
                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="How can we help?"
                        ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary w-100">Send Message</button>
                </form>

                <div className="mt-5 text-center text-muted">
                    <p className="mb-1">Email: rpatel.techark@gmail.com</p>
                    <p className="mb-1">Phone: +91 9876543210</p>
                    <p>Address: Mota, Bardoli, surat Gujarat, India</p>
                </div>
            </div>
        </Layout>
    );
}
