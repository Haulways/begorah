import HeaderImage2 from "../../assets/images/header-image2.png";
import LinkButton from "../LinkButton";

export default function Header(){
    return(
        <>
            <section className="iyd-header xui-pt-8 xui-pb-2">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse xui-container">
                    <div className="xui-lg-col-7 xui-col-12">
                        <h1 className="xui-lg-font-sz-250 xui-font-sz-200 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-600 bold-font xui-font-w-100">More Than Therapists, We're Your Partners in Wellness</h1>
                        <p className="xui-opacity-8 xui-lg-w-fluid-70 xui-w-fluid-100 xui-line-height-1-half xui-font-sz-85 xui-mt-half">Guiding you to holistic well-being with personalized care and expertise. At Good Life Spa, we prioritize your relaxation and ensure each visit leaves you refreshed and revitalized.</p>
                        <LinkButton text="Book Appointment" route="/" customClass="xui-btn-small xui-bdr-rad-1-half xui-mt-1" />
                    </div>
                    <div className="xui-lg-col-5 xui-col-12 xui-lg-mb-none xui-mb-1-half">
                        <img className="xui-img-500 xui-ml-auto" src={HeaderImage2} alt="" />
                    </div>
                </div>
            </section>
          
    
        </>
    )
}