import Section4Image1 from "../../assets/images/section4-image1.jpg";

export default function Section4(){
    return(
        <>
            <section className="xui-pt-5 xui-pb-2 xui-container">
                <h1 className="xui-lg-font-sz-300 xui-font-sz-200 xui-lg-w-fluid-70 xui-w-fluid-100 bold-font">Access cutting-edge technology with proven instructional design principles</h1>
                <div className="xui-mt-2-half xui-d-flex xui-flex-dir-column xui-flex-jc-space-between xui-p-2 xui-text-white xui-h-450 xui-bdr-rad-3" style={{"backgroundImage": `url('${Section4Image1}')`}}>
                    <h3 className="xui-font-sz-120 xui-font-w-bold">Watch Video</h3>
                    <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                        <span className="xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle xui-bg-white">
                            <svg width="20" height="20" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33337 13.5V1.95337L11.3334 7.7267L21.3334 13.5L11.3334 19.2734L1.33337 25.0467V13.5Z" fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <h3 className="xui-font-sz-120 xui-font-w-bold">01:30</h3>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}