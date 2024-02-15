import React from 'react';
import koalas from './public/koalas';

const KoalaGallery = () => {
  return (
    <div>
      {koalas.map(koala => (
        <div key={koala.id} style={{ cursor: 'pointer' }}> {/* Assume each koala has a unique id */}
          <div>
            <img src={koala.imageURL} alt="Koala" />
          </div>
          <div>
            <div className="header">{koala.name}</div>
            <div className="description">
              <p>{koala.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KoalaGallery;
