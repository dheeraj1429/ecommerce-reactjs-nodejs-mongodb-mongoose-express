import React from 'react';
import './BlogNgComponent.css';

function BlogNgComponent({ data }) {
   return (
      <div className="blog_post_div_card p-4">
         <div
            className="blg_post_div_innner_card"
            style={{
               backgroundImage: `url(${data.image})`,
            }}
         ></div>
         <div className="blog_post_card_content_div">
            <h1>{data.name.slice(0, 40)}...</h1>
            <p className="mt-3">{data.description.slice(0, 300)}...</p>
         </div>
      </div>
   );
}

export default BlogNgComponent;
