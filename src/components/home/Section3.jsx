import { Link } from "react-router-dom";
import Section3Image1 from "../../assets/images/section3-image1.png";
import Section3Image2 from "../../assets/images/section3-image2.png";

export default function Section3(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2 xui-container">
                <h1 className="xui-lg-font-sz-300 xui-font-sz-160 xui-lg-w-fluid-60 xui-w-fluid-100 bold-font">Empowering Learning with Innovative e-learning Solutions</h1>
                <div className="xui-row xui-mt-2-half">
                    <div className="xui-bdr-rad-half xui-lg-col-4 xui-col-12 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between begorah-bg-blue xui-text-white xui-pt-1 xui-px-1 xui-pb-2">
                        <p className="xui-font-sz-120 xui-mt-1 xui-font-w-500">Mission Statement</p>
                        <div className="xui-mt-9">
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>We are dedicated to excellence in designing educational and industry content, promoting growth and success through innovative, accessible, and impactful e-learning solutions.</p>
                        </div>
                    </div>
                    <div className="xui-lg-col-8 xui-col-12 xui-lg-pl-1 xui-pl-none xui-lg-mt-none xui-mt-1">
                        <img src={Section3Image1} className="xui-w-fluid-100 xui-max-h-400 xui-h-fluid-100 xui-bdr-rad-half" alt="" />
                    </div>
                </div>
                <div className="xui-row xui-mt-1">
                    <div className="xui-lg-col-8 xui-col-12 xui-lg-pr-1 xui-pr-none">
                        <img src={Section3Image2} className="xui-w-fluid-100 xui-max-h-400 xui-h-fluid-100 xui-bdr-rad-half" alt="" />
                    </div>
                    <div className="xui-bdr-rad-half xui-lg-mt-none xui-mt-1 xui-lg-col-4 xui-col-12 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between begorah-bg-blue xui-text-white xui-pt-1 xui-px-1 xui-pb-2">
                        <p className="xui-font-sz-120 xui-mt-1 xui-font-w-500">Vision Statement</p>
                        <div className="xui-mt-9">
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>To be the global leader in e-learning innovation, setting the standard for quality, accessibility and effectiveness in digital education, aimed at transforming the educational landscape.</p>
                        </div>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}