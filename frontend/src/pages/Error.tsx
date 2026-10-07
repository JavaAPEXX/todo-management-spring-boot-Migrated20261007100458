import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

export default function Error() {
  return (
    <div className="modern-page">
      <Header />
      <Navigation />
      <main className="modern-main">
        <div className="modern-container">
          <div className="modern-card">
            <div className="alert-box alert-box-error">
              <h2>Exception Occurred</h2>
              <p>An exception occurred! Please contact Support!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}