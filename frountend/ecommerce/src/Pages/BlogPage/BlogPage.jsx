import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allBlogPost } from '../../Redux/Action/action';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import BlogHeadComponent from '../../Components/BlogHeadComponent/BlogHeadComponent';

import './BlogPage.css';

function BlogPage() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(allBlogPost());
   }, []);

   return (
      <div>
         <NavbarComponent />
         <BlogHeadComponent />
         <FooterComponent />
      </div>
   );
}

export default BlogPage;
