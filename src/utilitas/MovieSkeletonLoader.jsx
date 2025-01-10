// DetailMovieSkeleton.jsx
import React from 'react';

const DetailMovieSkeleton = () => {
  const styles = `
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

    .movie-detail-wrapper {
      min-height: 100vh;
      background: #000;
      color: #fff;
      padding: 20px;
    }

    .detail-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      gap: 30px;
    }

    .cast-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-top: 40px;
    }

    .recommended-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-top: 40px;
    }
  `;

  return (
    <div className="movie-detail-wrapper">
      <style>{styles}</style>
      <div className="detail-container">
        {/* Poster */}
        <div className="skeleton" style={{ width: '300px', height: '450px', borderRadius: '8px', flexShrink: 0 }}></div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          {/* Title */}
          <div className="skeleton" style={{ width: '60%', height: '40px', borderRadius: '4px', marginBottom: '20px' }}></div>

          {/* User Score & Duration */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div className="skeleton" style={{ width: '60px', height: '60px', borderRadius: '50%' }}></div>
            <div className="skeleton" style={{ width: '100px', height: '30px', borderRadius: '4px', marginTop: '15px' }}></div>
          </div>

          {/* Genres */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton" style={{ width: '80px', height: '30px', borderRadius: '4px' }}></div>
            ))}
          </div>

          {/* Overview Title */}
          <div className="skeleton" style={{ width: '120px', height: '24px', borderRadius: '4px', marginBottom: '15px' }}></div>

          {/* Overview Text */}
          <div className="skeleton" style={{ width: '100%', height: '100px', borderRadius: '4px', marginBottom: '30px' }}></div>

          {/* Crew */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="skeleton" style={{ width: '100px', height: '20px', borderRadius: '4px', marginBottom: '10px' }}></div>
                <div className="skeleton" style={{ width: '80px', height: '16px', borderRadius: '4px' }}></div>
              </div>
            ))}
          </div>

          {/* Trailer Button */}
          <div className="skeleton" style={{ width: '150px', height: '40px', borderRadius: '4px', marginTop: '20px' }}></div>
        </div>
      </div>

      {/* Cast Section */}
      <div style={{ maxWidth: '1200px', margin: '40px auto' }}>
        <div className="skeleton" style={{ width: '200px', height: '30px', borderRadius: '4px', marginBottom: '20px' }}></div>
        <div className="cast-grid">
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div className="skeleton" style={{ width: '100%', height: '200px', borderRadius: '8px', marginBottom: '10px' }}></div>
              <div className="skeleton" style={{ width: '80%', height: '20px', borderRadius: '4px', margin: '0 auto 5px' }}></div>
              <div className="skeleton" style={{ width: '60%', height: '16px', borderRadius: '4px', margin: '0 auto' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div style={{ maxWidth: '1200px', margin: '40px auto' }}>
        <div className="skeleton" style={{ width: '200px', height: '30px', borderRadius: '4px', marginBottom: '20px' }}></div>
        <div className="recommended-grid">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className="skeleton" style={{ width: '100%', aspectRatio: '2/3', borderRadius: '8px', marginBottom: '10px' }}></div>
              <div className="skeleton" style={{ width: '100%', height: '20px', borderRadius: '4px', marginBottom: '5px' }}></div>
              <div className="skeleton" style={{ width: '40%', height: '20px', borderRadius: '4px' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMovieSkeleton;