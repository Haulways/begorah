import HeaderImage from "../../assets/images/header-image.png";
import LinkButton from "../LinkButton";
import CountUp from "react-countup";

export default function Header(){
    return(
        <>
            <section className="iyd-header xui-pt-8 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-7 xui-col-12">
                        <h1 className="xui-lg-font-sz-350 xui-font-sz-250 bold-font xui-lg-w-fluid-85 xui-w-fluid-100">At Begorah, we believe in the transformative power of learning.</h1>
                        <LinkButton text="Learn More" route="/" customClass="xui-btn xui-px-3 xui-bdr-rad-half xui-mt-1" />
                        <div className="xui-d-flex xui-flex-ai-center xui-mt-1-half">
                            <div className="stat xui-px-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={4} duration={2} />y+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">In Edu-Tech industry</p>
                            </div>
                            <div className="stat xui-px-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={300} duration={2} />+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">School collaboration</p>
                            </div>
                            <div className="stat xui-px-1-half">
                                <h3 className="xui-font-sz-150 bold-font xui-font-w-bold"><CountUp start={0} end={100} duration={2} />y+</h3>
                                <p className="xui-font-sz-85 xui-mt-half xui-opacity-6">Educators</p>
                            </div>
                        </div>
                    </div>
                    <div className="xui-lg-col-5 xui-col-12 xui-lg-mb-none xui-mb-1-half xui-lg-pl-1-half xui-pl-none">
                        <img className="xui-img-500 xui-ml-auto" src={HeaderImage} alt="" />
                    </div>
                </div>
            </section>

    
        </>
    )
}