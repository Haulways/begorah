import React, { useRef } from 'react';
import Section5BGImage from "../../assets/images/section5-bg-image.jpg";
import LinkButton from '../LinkButton';

const Section5 = () => {
    const email = useRef(null);
    const formData = {email: ""};
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formData.email = email.current.value;
        window.open("mailto:mail@rsecng.co?subject="+ "&body=");
    }
    return (
        <section className="xui-pt-5 xui-pb-2 xui-container" id='contact'>
            <div className='xui-bg-sz-cover xui-bg-pos-center xui-bdr-rad-1' style={{"backgroundImage": `url('${Section5BGImage}')`}}>
                <div className='xui-container xui-py-1-half xui-bdr-rad-1 xui-overlay-1 xui-w-fluid-100 xui-h-fluid-100 xui-text-white'>
                    <h1 className="xui-lg-font-sz-300 xui-font-sz-160 xui-lg-w-fluid-65 xui-w-fluid-100 bold-font">Join And Collaborate with other e-learning Enthusiasts.</h1>
                    <p className='xui-font-sz-90 xui-opacity-8 xui-lg-w-fluid-50 xui-w-fluid-100 xui-line-height-1-half xui-mt-1'>Join Begorah to connect, collaborate, and innovate with a vibrant community of e-learning enthusiasts. Together, we're committed to shaping the future of digital education, sharing insights, and exploring new possibilities.</p>
                    <form onSubmit={onSubmitHandler}>
                        <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-max-w-400 xui-w-fluid-100 xui-ml-auto xui-mt-7 xui-p-1 xui-pos-relative xui-bg-white xui-bdr-rad-1-half">
                            <input ref={email} style={{"outline": "none", "border": "none", "background": "none"}} className="xui-pl-1 xui-font-sz-90" type="text" placeholder="Your email address" />
                            <LinkButton text="Join now" isButton={true} customClass="xui-btn-small xui-bdr-rad-1 xui-pos-absolute" customStyle={{"right": "10px"}} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Section5;