import React from 'react';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import BlogHeadComponent from '../../Components/BlogHeadComponent/BlogHeadComponent';

import './BlogPage.css';

function BlogPage() {
   return (
      <div>
         <NavbarComponent />
         <BlogHeadComponent />
         <FooterComponent />
      </div>
   );
}

export default BlogPage;
