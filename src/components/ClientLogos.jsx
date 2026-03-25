import React from 'react';
import './ClientLogos.css';

const ClientLogos = ({ data }) => {
  // Duplicate the array to create a seamless infinite scroll loop
  const scrollLogos = [...data.logos, ...data.logos];

  return (
    <section className="client-logos-section">
      <div className="container">
        {data.title && <h3 className="client-logos-title">{data.title}</h3>}
        <div className="logo-slider">
          <div className="logo-track">
            {scrollLogos.map((client, index) => (
              <a 
                key={index} 
                href={client.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="client-logo-link"
              >
                <div className="logo-tooltip">{client.website}</div>
                <img src={client.url} alt={client.name} className="client-logo-img" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
