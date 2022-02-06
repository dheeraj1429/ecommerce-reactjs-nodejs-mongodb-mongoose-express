import React from 'react';
import EditHeadingComponent from '../../DashboardComponents/EditHeadingComponent/EditHeadingComponent';

import './ShopPageContentComponent.css';

function ShopPageContentComponent() {
  return (
    <div className="single_page_content_div px-3 py-4 my-4">
      <div className="container-fluid">
        <div className="row">
          <EditHeadingComponent heading={`Home / Shop`} style={'single_page_heading'} />

          <div className="col-12">
            <p className="mt-2">
              Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The
              last of a series of chairs wegner designed based on inspiration from antique Chinese armchairs. The gently rounded top together with the
              back and seat offers a variety of comfortable seating positions,ideal for both long visits to the dining table and relaxed lounging.
            </p>

            <h3 className="mb-3">The standard passage, used since the 1500s.</h3>

            <p>
              A light chair, easy to move around the dining table and about the room. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <img
              src="https://mageblueskytech.com/dukamarket/media/wysiwyg/xdetail_1.jpg.pagespeed.ic.JU3xpzMcVn.webp"
              className="img-fluid my-4"
              alt=""
            />

            <div className="text-center tb_cl">
              <h4>
                Get 30% Daily Cash <br /> Back with Membership Card.
              </h4>

              <p>
                A new collection of lounge furniture, occasional tables and a stool by Edward Barber & Jay Osgerby offers a relaxed, contemporary
                attitude toward interior design. The lounge furniture includes four individualized sized sofas, and three complementary ottomans.
                Available in a range of upholstery fabrics and leathers, the lounge furniture is distinguished by stitched seams that reinforce its
                architectural profile, softened by the curvature of cushions on each face.
              </p>
            </div>

            <img
              src="https://mageblueskytech.com/dukamarket/media/wysiwyg/xdetail_4.png.pagespeed.ic.jSV5D-7wq5.webp"
              className="img-fluid my-5"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPageContentComponent;
