import AboutHeaderImage from "../../assets/images/about-header-image.png";
import LinkButton from "../LinkButton";
import CountUp from "react-countup";

export default function Header(){
    return(
        <>
            <section id="about" className="iyd-header xui-pt-8 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-7 xui-col-12">
                        <h1 className="xui-lg-font-sz-350 xui-font-sz-220 bold-font xui-lg-w-fluid-95 xui-w-fluid-100">At Begorah, we believe in the transformative power of learning.</h1>
                        {/* <LinkButton text="Learn More" route="/" customClass="xui-btn xui-px-3 xui-bdr-rad-half xui-mt-1" /> */}
                        <div className="xui-d-flex xui-flex-ai-center xui-mt-1-half xui-lg-grid-gap-none xui-grid-gap-1">
                            <div className="stat xui-pr-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={4} duration={2} />y+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">In Edu-Tech industry</p>
                            </div>
                            <div className="stat xui-lg-px-1-half xui-pl-none xui-pr-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={30} duration={2} />+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">School collaboration</p>
                            </div>
                            <div className="stat xui-lg-px-1-half xui-pl-none xui-pr-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={100} duration={2} />+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Educators</p>
                            </div>
                        </div>
                    </div>
                    <div className="xui-lg-col-5 xui-col-12 xui-lg-mb-none xui-mb-1-half xui-lg-pl-1-half xui-pl-none">
                        <div className="xui-pos-relative xui-z-index-1 xui-max-w-400 xui-w-fluid-100 xui-ml-auto">
                            <img className="xui-w-fluid-100" src={AboutHeaderImage} alt="" />
                            <span className="xui-d-inline-block xui-z-index--1 xui-pos-absolute" style={{"left": "-18px", "bottom": "-9px"}}>
                                <svg width="130" height="130" viewBox="0 0 156 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.501541 0.974854C20.9223 0.974854 41.1431 4.99702 60.0094 12.8117C78.8757 20.6264 96.018 32.0805 110.458 46.5202C124.897 60.9598 136.351 78.1022 144.166 96.9685C151.981 115.835 156.003 136.056 156.003 156.476L0.501541 156.476V0.974854Z" fill="#000760"/>
                                </svg>
                            </span>
                            <span className="xui-d-inline-block xui-z-index--1 xui-pos-absolute" style={{"right": "-10px", "top": "-20px"}}>
                                <svg width="130" height="130" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M155.499 155.696C135.078 155.696 114.857 151.674 95.9908 143.859C77.1245 136.044 59.9821 124.59 45.5425 110.151C31.1029 95.7109 19.6487 78.5685 11.834 59.7022C4.01935 40.8359 -0.0028094 20.6152 -0.00280762 0.194412L155.499 0.194427V155.696Z" fill="#000760"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

    
        </>
    )
}