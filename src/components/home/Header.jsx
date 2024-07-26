import HeaderImage from "../../assets/images/header-image.png";
import LinkButton from "../LinkButton";

export default function Header(){
    return(
        <>
            <section className="iyd-header xui-pt-8 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-7 xui-col-12">
                        <h1 className="xui-lg-font-sz-400 xui-font-sz-220 bold-font">Unlock the Potential of e-learning with <span className="begorah-text-blue">Begorah</span></h1>
                        <p className="xui-opacity-8 xui-lg-w-fluid-80 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-90 xui-mt-half">Engage, Educate, Empower with Begorah Ltd. Our innovative e-learning design transforms traditional education, making learning more accessible and effective for everyone.</p>
                        <div className="xui-mt-1 xui-d-flex xui-flex-ai-center">
                            <LinkButton text="More About Us" route="/about" customClass="xui-btn xui-bdr-rad-half" />
                            <LinkButton text="View Our Portfolio" route="/portfolio" customClass="xui-btn explore-btn xui-bdr-rad-half xui-ml-1 xui-font-w-bold bold-font" />
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