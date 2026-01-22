import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Header />
            <main className="flex-grow-1 py-5">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
