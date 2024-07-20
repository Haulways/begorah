import SectionDuplicate from "../SectionDuplicate";
import Section3Image from "../../assets/images/about-section3-image.jpg";

export default function Section2(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2 xui-container">
                <SectionDuplicate mainHeading="Principles that drive our e-learning solutions" paragraphHeading="Discover the core principles that guide us in creating innovative, effective, and inclusive learning solutions tailored to meet your unique educational needs.">
                    <img className="xui-w-fluid-100 xui-mt-3" src={Section3Image} alt="" />
                    <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-gap-1 xui-mt-1-half">
                        <div className="principle xui-p-1">
                            <h3 className="xui-font-sz-180 bold-font xui-font-w-500 xui-mt-1 xui-font-w-500">Innovation</h3>
                            <p className='xui-opacity-8 xui-mt-3 xui-lg-font-sz-90 xui-font-sz-75 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-1-half'>Continuously pushing the boundaries of what's possible in digital education, we innovate to create personalized, effective, and inclusive learning experiences tailored to meet your unique educational needs.</p>
                        </div>
                        <div className="principle xui-p-1">
                            <h3 className="xui-font-sz-180 bold-font xui-font-w-500 xui-mt-1 xui-font-w-500">Quality</h3>
                            <p className='xui-opacity-8 xui-mt-3 xui-lg-font-sz-90 xui-font-sz-75 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-1-half'>Delivering superior, high-quality content that drives real results through innovative learning solutions, transforming ideas into impactful educational experiences that empower growth and ensure lasting success.</p>
                        </div>
                        <div className="principle xui-p-1">
                            <h3 className="xui-font-sz-180 bold-font xui-font-w-500 xui-mt-1 xui-font-w-500">Accessibility</h3>
                            <p className='xui-opacity-8 xui-mt-3 xui-lg-font-sz-90 xui-font-sz-75 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-1-half'>We are dedicated to ensuring that all learners, regardless of their abilities or background, have unfettered access to valuable educational resources that empower them to achieve their goals.</p>
                        </div>
                    </div>
                </SectionDuplicate>

            </section>
          
    
        </>
    )
}