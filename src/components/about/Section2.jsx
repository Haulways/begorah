import SectionDuplicate from "../SectionDuplicate";
import Section2Image from "../../assets/images/section2-image.png";
import { Link } from "react-router-dom";
import Services from "../Services";

export default function Section2(){
    return(
        <>
            {/* <div className="xui-d-grid xui-lg-grid-col-2 xui-mt-3 xui-grid-col-1 xui-flex-ai-flex-end">
                    <div>
                        <img className="xui-w-fluid-100 xui-h-fluid-100" src={Section2Image1} alt="" />
                    </div>
                    <div className="xui-pos-relative xui-pl-8">
                        <img className="xui-img-80 xui-pos-absolute" src={World} style={{"top": "-50px", "left": "32px"}} />
                        <div className="xui-w-fluid-100 xui-ml-auto">
                            <img className="xui-w-fluid-100 xui-h-fluid-100" src={Section2Image2} alt="" />
                        </div>
                    </div>
                </div> */}
            <section className="xui-pt-5 xui-pb-2 xui-container">
                <SectionDuplicate mainHeading="Explore the diverse range of services we provide" paragraphHeading="Discover the diverse range of services we offer, tailored to meet your unique e-learning needs and elevate your educational experience.">
                    <Services />
                </SectionDuplicate>

            </section>
          
    
        </>
    )
}