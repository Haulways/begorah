import React from 'react';
import Tool1 from "../../assets/images/tool1.png";
import Tool2 from "../../assets/images/tool2.png";
import Tool3 from "../../assets/images/tool3.png";
import Tool4 from "../../assets/images/tool4.png";
import Tool5 from "../../assets/images/tool5.png";
import Tool6 from "../../assets/images/tool6.png";
import Tool7 from "../../assets/images/tool7.png";
import Tool8 from "../../assets/images/tool8.png";
import Tool9 from "../../assets/images/tool9.png";
import Tool10 from "../../assets/images/tool10.png";
import Tool11 from "../../assets/images/tool11.png";
import { Link } from 'react-router-dom';

export default function RecentCourses() {
  return (
    <>
      <section className="xui-pt-3 xui-pb-3-half xui-container xui-pos-relative iyd-header">
        {/* <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center'>
          <h3 className='xui-font-sz-180 bold-font'>E-Learning Authoring tools for Content Creation</h3>
          <div className='xui-d-flex xui-flex-ai-center'>
            <span className='xui-w-40 xui-h-40 xui-bdr-rad-circle pagination-btn xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
              <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2357 5.12441C20.4112 5.30019 20.5098 5.53848 20.5098 5.78691C20.5098 6.03535 20.4112 6.27363 20.2357 6.44941L11.8369 14.8494L20.2369 23.2494C20.4076 23.4263 20.502 23.6632 20.4997 23.909C20.4975 24.1548 20.3988 24.3899 20.2249 24.5636C20.051 24.7374 19.8158 24.8358 19.57 24.8379C19.3242 24.8399 19.0874 24.7453 18.9107 24.5744L9.84815 15.5119C9.67259 15.3361 9.57397 15.0978 9.57397 14.8494C9.57397 14.601 9.67259 14.3627 9.84815 14.1869L18.9107 5.12441C18.9977 5.03729 19.1011 4.96819 19.2149 4.92103C19.3287 4.87388 19.4506 4.84961 19.5738 4.84961C19.6969 4.84961 19.8189 4.87388 19.9327 4.92103C20.0465 4.96819 20.1498 5.03729 20.2369 5.12441" fill="#737373"/>
              </svg>
            </span>
            <p className='xui-font-sz-90 xui-opacity-8 xui-mx-1'>1/100</p>
            <span className='xui-w-40 xui-h-40 pagination-btn xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
              <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.84785 24.5631C9.67228 24.3873 9.57367 24.149 9.57367 23.9006C9.57367 23.6521 9.67228 23.4139 9.84785 23.2381L18.2466 14.8381L9.8466 6.43809C9.6759 6.26119 9.58152 6.02433 9.58377 5.77852C9.58602 5.53271 9.68473 5.29762 9.85863 5.12388C10.0325 4.95015 10.2677 4.85166 10.5135 4.84964C10.7593 4.84762 10.9961 4.94223 11.1728 5.11309L20.2353 14.1756C20.4109 14.3514 20.5095 14.5897 20.5095 14.8381C20.5095 15.0865 20.4109 15.3248 20.2353 15.5006L11.1728 24.5631C11.0858 24.6502 10.9824 24.7193 10.8686 24.7665C10.7548 24.8136 10.6329 24.8379 10.5097 24.8379C10.3866 24.8379 10.2646 24.8136 10.1508 24.7665C10.037 24.7193 9.93366 24.6502 9.8466 24.5631" fill="#737373"/>
              </svg>
            </span>
          </div>
        </div> */}
        <h3 className='xui-font-sz-180 bold-font'>E-Learning Authoring tools for Content Creation</h3>
        <p className="xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1">Authoring tools are software applications used to create, design, and develop online content.</p>
        <p className="xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1">Our Custom e-learning development services are powered by a range of cutting-edge technologies of tools, enabling us to create engaging and effective training programs while ensuring the delivery of high quality e-learning courses.</p>
        <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1 xui-mt-1-half'>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.articulate.com/360/storyline/" target="_blank">
              <img src={Tool1} className="xui-img-300 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.articulate.com/360/rise/" target="_blank">
              <img src={Tool2} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.adobe.com/ng/products/captivate.html" target="_blank">
              <img src={Tool3} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.adobe.com/ng/products/photoshop/landpa.html?gclid=CjwKCAjwko21BhAPEiwAwfaQCJCEwctJbBLtB5if3oreA0FTf4Xqqfd-Qgfz5f_gtZKGEBDarVfrrRoCy58QAvD_BwE&mv=search&mv=search&mv2=paidsearch&sdid=2XBSBWBF&ef_id=CjwKCAjwko21BhAPEiwAwfaQCJCEwctJbBLtB5if3oreA0FTf4Xqqfd-Qgfz5f_gtZKGEBDarVfrrRoCy58QAvD_BwE:G:s&s_kwcid=AL!3085!3!602604000938!e!!g!!adobe%20photoshop!12704499767!119837632319&gad_source=1" target="_blank">
              <img src={Tool4} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.lectoraonline.com/" target="_blank">
              <img src={Tool5} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.adobe.com/ng/products/premiere/campaign/pricing.html?gclid=CjwKCAjwko21BhAPEiwAwfaQCE4fa1wkich-ssSkjDFMCrqvcb9AQ-AMn6R2XzzHlI0cmy6TZZtGqhoCwDQQAvD_BwE&mv=search&mv=search&mv2=paidsearch&sdid=G4FRYP7G&ef_id=CjwKCAjwko21BhAPEiwAwfaQCE4fa1wkich-ssSkjDFMCrqvcb9AQ-AMn6R2XzzHlI0cmy6TZZtGqhoCwDQQAvD_BwE:G:s&s_kwcid=AL!3085!3!602604107894!e!!g!!adobe%20premiere%20pro!12704500265!120002443865&gad_source=1" target="_blank">
              <img src={Tool6} className="xui-img-300 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.chameleoncreator.com/" target="_blank">
              <img src={Tool7} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.techsmith.com/camtasia/" target="_blank">
              <img src={Tool8} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.elucidat.com/" target="_blank">
              <img src={Tool9} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.ispringsolutions.com/ispring-suite" target="_blank">
              <img src={Tool10} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
          <div className='tool xui-p-half xui-bg-white xui-bdr-fade xui-bdr-style-solid xui-bdr-w-1'>
            <Link className='xui-d-block' to="https://www.vyond.com/" target="_blank">
              <img src={Tool11} className="xui-w-fluid-100 xui-h-250 xui-mx-auto xui-object-fit-fill xui-object-pos-center" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
