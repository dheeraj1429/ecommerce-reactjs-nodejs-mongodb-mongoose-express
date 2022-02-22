import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadBlogPost, uploadBlogPostDetails } from '../../Redux/Action/action';
import EditHeadingComponent from '../EditHeadingComponent/EditHeadingComponent';
import ClickTabsComponent from '../../Components/ClickTabsComponent/ClickTabsComponent';
import DashboardSmHeadingComponent from '../DashboardSmHeadingComponent/DashboardSmHeadingComponent';
import AddProductInputComponent from '../AddProductInputComponent/AddProductInputComponent';
import DashboardTextAriaComponent from '../DashBoardTextAriaComponent/DashboardTextAriaComponent';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';

import './DashboardBlogComponent.css';

function DashboardBlogComponent() {
   const dispatch = useDispatch();
   const selector = useSelector((state) => state.userStoreData);

   const [PostData, setPostData] = useState({
      name: '',
      description: '',
      image: '',
   });

   const ChangeInputValue = function (e) {
      let name = e.target.name;
      let value = e.target.value;

      setPostData({ ...PostData, [name]: value });
   };

   const SendData = function () {
      const { name, description, image } = PostData;

      if (name && description && image) {
         dispatch(
            uploadBlogPost({ name, description, image, userData: selector.UserLoginStatus.data })
         );
      }
   };

   const showInfo = function () {
      if (selector.UploadBlogPost !== null && selector.UploadBlogPost.success === true) {
         alert('post uploaded');
         dispatch(uploadBlogPostDetails(null));
      }
   };

   showInfo();

   return (
      <div className="Blog_prent_div p-3">
         <EditHeadingComponent heading={'Blog'} tab={'Ecommerce / Blog'} />

         <div className="row gx-0 mt-4">
            <div className="col-12">
               <div className="blog_upload_div p-3">
                  <div>
                     <ClickTabsComponent data={[{ el: 'Upload Post' }, { el: 'All Post' }]} />

                     <div className="mt-3">
                        <DashboardSmHeadingComponent
                           heading={'Basic Information'}
                           subTitel={'Fill all information below'}
                        />
                        <AddProductInputComponent
                           name={'name'}
                           type={'text'}
                           label={'Post Name'}
                           Value={PostData.name}
                           Change={ChangeInputValue}
                        />

                        <div className="row">
                           <div className="col-12">
                              <DashboardTextAriaComponent
                                 name={'description'}
                                 label={'Product Description'}
                                 value={PostData.description}
                                 Change={ChangeInputValue}
                              />
                           </div>

                           <div className="d-flex">
                              <AddProductInputComponent
                                 name={'image'}
                                 type={'text'}
                                 label={'Post Image URL'}
                                 value={PostData.image}
                                 Change={ChangeInputValue}
                              />
                           </div>

                           <div className="py-3 px-3 d-flex">
                              <CustomButtonComponent
                                 btnCl={'Save_change'}
                                 TextContent={'Upload Post'}
                                 onClick={SendData}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DashboardBlogComponent;
