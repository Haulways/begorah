import React from 'react';
import Portfolio1 from "../assets/images/portfolio1.png";
import Portfolio2 from "../assets/images/portfolio2.png";
import Portfolio3 from "../assets/images/portfolio3.png";
import Portfolio4 from "../assets/images/portfolio4.png";
import LinkButton from '../components/LinkButton';

const Tools = () => {
    return (
        <section className="iyd-header xui-pt-8 xui-pb-2 xui-mb-4">
            <div className='xui-container '>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1-half xui-lg-font-sz-100 xui-font-sz-70'>
                    <h3 className='xui-font-sz-300'>Elevate</h3>
                    <h1 className='xui-font-sz-350 bold-font'>EDUCATION</h1>
                    <span className='begorah-bg-blue xui-w-20 xui-h-20 xui-bdr-rad-circle'></span>
                    <img className='xui-img-150 xui-bdr-rad-1-half' src={Portfolio1} alt="" />
                    <h3 className='xui-font-sz-300'>Empower</h3>
                </div>
                <div className='xui-mt-1 xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1-half xui-lg-font-sz-100 xui-font-sz-70'>
                    <h1 className='xui-font-sz-350 bold-font'>LEARNERS</h1>
                    <span className='begorah-bg-blue xui-w-20 xui-h-20 xui-bdr-rad-circle'></span>
                    <img className='xui-img-150 xui-bdr-rad-1-half' src={Portfolio2} alt="" />
                    <h3 className='xui-font-sz-300'>Deliver</h3>
                </div>
                <div className='xui-mt-1 xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1-half xui-lg-font-sz-100 xui-font-sz-70'>
                    <img className='xui-img-150 xui-bdr-rad-1-half' src={Portfolio3} alt="" />
                    <h1 className='xui-font-sz-350 bold-font'>TOP CONTENT</h1>
                    <span className='begorah-bg-blue xui-w-20 xui-h-20 xui-bdr-rad-circle'></span>
                    <img className='xui-img-150 xui-bdr-rad-1-half' src={Portfolio4} alt="" />
                </div>
                <div className='xui-mt-1-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                    <LinkButton text="Let's Connect" route="https://calendly.com/contact-begorah/30min" customClass="xui-btn xui-px-3 xui-bdr-rad-half xui-mt-1" />
                </div>
            </div>
        </section>
    );
};

export default Tools;