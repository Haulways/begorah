import { Link } from "react-router-dom";
import Asterics from "../../assets/images/asterics.png";
import Section4Image1 from "../../assets/images/section4-image1.png";
import Section4Image2 from "../../assets/images/section4-image2.png";
import Section4Image3 from "../../assets/images/section4-image3.png";
import Section4Image4 from "../../assets/images/section4-image4.png";
import Section4Image5 from "../../assets/images/section4-image5.png";

export default function Section4(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2 xui-container">
                <div>
                    <h1 className="xui-lg-font-sz-300 xui-font-sz-180 xui-lg-w-fluid-60 xui-w-fluid-100 bold-font"><span className="xui-text-fade">Discover</span> firsthand</h1>
                    <h1 className="xui-lg-font-sz-300 xui-font-sz-180 xui-lg-w-fluid-60 xui-w-fluid-100 bold-font xui-text-fade">the transformative</h1>
                    <h1 className="xui-lg-font-sz-300 xui-lg-ml-6 xui-ml-2 xui-font-sz-180 xui-lg-w-fluid-60 bold-font">Impact of <span className="xui-text-fade xui-d-inline-flex xui-flex-ai-flex-start">Begorah <img className="xui-img-35" src={Asterics} alt="" /></span></h1>
                </div>
                <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-3 xui-mt-2">
                    <div>
                        <div>
                            <img src={Section4Image1} className="xui-w-fluid-100 xui-h-350 xui-bdr-rad-half" alt="" />
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>Begorah Ltd's e-learning solutions have revolutionized our training programs. Their personalized approach and interactive content have significantly boosted engagement and knowledge retention among our employees.</p>
                            <h3 className="xui-font-sz-120 xui-mt-1-half bold-font xui-font-w-500">Jane Cliffs</h3>
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>HR Manager, Reger Incorporated.</p>
                        </div>
                        <div className="xui-mt-1-half">
                            <img src={Section4Image2} className="xui-w-fluid-100 xui-h-350 xui-bdr-rad-half" alt="" />
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>As an educator, I appreciate Begorah for their user-friendly interface and innovative tools, the learning concept has ushered me into a whole new dimension in my profession as an educator.</p>
                            <h3 className="xui-font-sz-120 xui-mt-1-half bold-font xui-font-w-500">David Greene</h3>
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>Math Teacher, Sundary Highschool</p>
                        </div>
                    </div>
                    <div className="xui-lg-pt-10 xui-pt-none">
                        <div>
                            <img src={Section4Image3} className="xui-w-fluid-100 xui-h-350 xui-bdr-rad-half" alt="" />
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>Begorah Ltd's e-learning solutions have revolutionized our training programs. Their personalized approach and interactive content have significantly boosted engagement and knowledge retention among our employees.</p>
                            <h3 className="xui-font-sz-120 xui-mt-1-half bold-font xui-font-w-500">Sarah Brown</h3>
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>Educational Consultant</p>
                        </div>
                    </div>
                    <div className="xui-lg-pt-3 xui-pt-none">
                        <div>
                            <img src={Section4Image4} className="xui-w-fluid-100 xui-h-350 xui-bdr-rad-half" alt="" />
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>Thanks to Begorah Ltd, I finally found a course that fits my busy schedule. Flexible learning at its finest!. The personalized approach of the courses helped me grasp complex concepts with ease.</p>
                            <h3 className="xui-font-sz-120 xui-mt-1-half bold-font xui-font-w-500">Alex Stevens</h3>
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>Student, Glamond Day School.</p>
                        </div>
                        <div className="xui-mt-1-half">
                            <img src={Section4Image5} className="xui-w-fluid-100 xui-h-350 xui-bdr-rad-half" alt="" />
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>As a student using Begorah Ltd's courses, I found the flexibility and quality of their curriculum outstanding. The interactive modules and clear explanations made learning enjoyable and effective.</p>
                            <h3 className="xui-font-sz-120 xui-mt-1-half bold-font xui-font-w-500">Jane Smith</h3>
                            <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>Student, Brightminds Academy.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
          
    
        </>
    )
}