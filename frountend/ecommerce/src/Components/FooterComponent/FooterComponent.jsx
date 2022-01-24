import React from 'react';
import FooterCardComponent from '../FooterCardComponent/FooterCardComponent';
import FooterLinkCardComponent from '../FooterLinkCardComponent/FooterLinkCardComponent';
import NewsLetterComponent from '../NewsLetterComponent/NewsLetterComponent';

import './FooterComponent.css';

function FooterComponent() {
  return (
    <div className="footer">
      <footer class="footer-section">
        <div class="container-fluid ">
          <div class="footer-cta pt-5 pb-5 side_padding">
            <div class="row">
              <FooterCardComponent heading={'Find us'} subtitle={'1010 Avenue, sw 54321, chandigarh'} icon={'fas fa-map-marker-alt'} />
              <FooterCardComponent heading={'Call us'} subtitle={'9876543210 0'} icon={'fas fa-phone'} />
              <FooterCardComponent heading={'Mail us'} subtitle={'dheerajsingh1429@gmail.com'} icon={'far fa-envelope-open'} />
            </div>
          </div>
          <div class="footer-content pt-5 pb-5 side_padding">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                      elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <FooterLinkCardComponent />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <NewsLetterComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
