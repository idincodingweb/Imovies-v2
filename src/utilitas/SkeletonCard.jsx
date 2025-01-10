import React from 'react';

const MovieSkeletonLoader = () => {
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .skeleton {
      background: #2a2a2a;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        opacity: 0.6;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 0.6;
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }

    .navbar {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-buttons {
      display: flex;
      gap: 1rem;
    }

    .hero-section {
      height: 400px;
      position: relative;
      margin-bottom: 3rem;
    }

    .hero-content {
      position: absolute;
      bottom: 40px;
      left: 40px;
    }

    .button-group {
      display: flex;
      gap: 1rem;
    }

    .movie-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .movie-card {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .movie-poster {
      aspect-ratio: 2/3;
      width: 100%;
      border-radius: 4px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      padding: 3rem 0;
    }

    .footer-column {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .rounded {
      border-radius: 4px;
    }
  `;

  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>
      <style>{styles}</style>

      <nav className="navbar container">
        <div className="skeleton rounded" style={{ width: '120px', height: '32px' }}></div>
        <div className="nav-buttons">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton rounded" style={{ width: '80px', height: '24px' }}></div>
          ))}
        </div>
      </nav>

      <div className="skeleton hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="skeleton rounded" style={{ width: '300px', height: '32px', marginBottom: '1rem' }}></div>
            <div className="skeleton rounded" style={{ width: '500px', height: '80px', marginBottom: '1.5rem' }}></div>
            <div className="button-group">
              <div className="skeleton rounded" style={{ width: '120px', height: '40px', backgroundColor: '#dc3545' }}></div>
              <div className="skeleton rounded" style={{ width: '120px', height: '40px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="skeleton rounded" style={{ width: '180px', height: '24px', marginBottom: '1.5rem' }}></div>
        <div className="button-group" style={{ marginBottom: '2rem' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton rounded" style={{ width: '100px', height: '32px' }}></div>
          ))}
        </div>

        <div className="movie-grid">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="movie-card">
              <div className="skeleton movie-poster rounded"></div>
              <div className="skeleton rounded" style={{ height: '16px' }}></div>
              <div className="skeleton rounded" style={{ width: '70%', height: '16px' }}></div>
            </div>
          ))}
        </div>

        <div className="button-group" style={{ marginBottom: '2rem' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton rounded" style={{ width: '100px', height: '32px' }}></div>
          ))}
        </div>

        <div className="movie-grid">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="movie-card">
              <div className="skeleton movie-poster rounded"></div>
              <div className="skeleton rounded" style={{ height: '16px' }}></div>
              <div className="skeleton rounded" style={{ width: '70%', height: '16px' }}></div>
            </div>
          ))}
        </div>

        <div className="skeleton rounded" style={{ width: '120px', height: '24px', marginBottom: '1rem' }}></div>
        <div className="skeleton rounded" style={{ height: '200px', marginBottom: '3rem' }}></div>

        <footer className="footer-grid">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="footer-column">
              <div className="skeleton rounded" style={{ width: '120px', height: '24px' }}></div>
              {[...Array(4)].map((_, j) => (
                <div key={j} className="skeleton rounded" style={{ width: '100px', height: '16px' }}></div>
              ))}
            </div>
          ))}
        </footer>

        <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
          <div className="skeleton rounded" style={{ height: '40px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MovieSkeletonLoader;