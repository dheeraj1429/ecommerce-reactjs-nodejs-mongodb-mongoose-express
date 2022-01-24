import React, { useState } from 'react';

import './FooterLinkCardComponent.css';

function FooterLinkCardComponent() {
  const [FooterLinks, setFooterLinks] = useState([
    { el: 'Home' },
    { el: 'about' },
    { el: 'services' },
    { el: 'portfolio' },
    { el: 'Contact' },
    { el: 'About us' },
    { el: 'Our Services' },
    { el: 'Expert Team' },
    { el: 'Contact us' },
    { el: 'Latest News' },
  ]);

  return (
    <div class="footer-widget">
      <div class="footer-widget-heading">
        <h3>Useful Links</h3>
      </div>
      <ul className="footer_links">
        {FooterLinks.map((el) => (
          <li key={el.el}>
            <p>{el.el}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinkCardComponent;
