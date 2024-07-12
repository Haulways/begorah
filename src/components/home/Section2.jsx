import SectionDuplicate from "../SectionDuplicate";
import Section2Image from "../../assets/images/section2-image.png";
import { Link } from "react-router-dom";

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
                <SectionDuplicate mainHeading={<>We believe in the <span className="xui-text-fade">potential</span> for <span className="xui-text-fade">technology</span> to reshape the learning <span className="xui-text-fade">experience.</span></>} paragraphHeading="We believe in the potential for technology to reshape the learning experience, creating dynamic, interactive, and educational journeys. By harnessing the power of digital innovation, we aim to make learning more accessible, engaging, and effective for everyone, everywhere.">
                    <img className="xui-w-fluid-100 xui-mt-3" src={Section2Image} alt="" />
                </SectionDuplicate>
                <div className="xui-mt-6">
                    <SectionDuplicate mainHeading="Begorah Ltd, your premier partner in instructional design and e-learning solutions." paragraphHeading="With our cutting-edge solutions and innovative approach, we empower organizations to deliver engaging and effective online learning experiences. Our expertise spans instructional design, academic staffing support, multimedia development, and interactive technologies.">
                        <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1-half xui-mt-3">
                            <div className="grid-card xui-pt-1 xui-px-1 xui-pb-2">
                                <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                                    <p className="xui-font-sz-120 begorah-text-blue xui-font-w-500 bold-font">Course Accessibility</p>
                                    <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle begorah-bg-blue">
                                        <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.55014 1.8479C4.19181 1.98228 3.27723 2.28436 2.59389 2.96873C1.36993 4.19478 1.36993 6.16873 1.36993 10.1177V14.3052C1.36993 18.2531 1.36993 20.2281 2.59389 21.4552C3.81785 22.6823 5.78868 22.6812 9.72931 22.6812H11.8199C15.7606 22.6812 17.7314 22.6812 18.9554 21.4552C20.0668 20.3406 20.1699 18.625 20.1793 15.3656" stroke="#FFF" stroke-width="2.20588" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.72928 7.05618L10.7741 10.702C11.3574 11.8583 12.0897 12.1603 13.9095 12.2645C15.3564 12.2291 16.1959 12.0583 16.9126 11.4353C17.4012 11.0103 17.622 10.3697 17.7293 9.73222L18.0876 7.57702M20.7001 5.49368V10.702M7.72407 4.90306C9.3772 3.53118 10.8501 2.79472 13.9053 1.98431C14.25 1.89331 14.6126 1.89511 14.9564 1.98952C17.6605 2.73327 19.1209 3.39368 21.0772 4.86243C21.1605 4.92493 21.1855 5.0416 21.1272 5.12806C20.4887 6.06764 19.0626 6.8291 15.5647 8.18535C14.8361 8.46569 14.0287 8.46123 13.3032 8.17285C9.57824 6.69368 7.86574 5.90202 7.6574 5.08014C7.65063 5.04734 7.6533 5.01329 7.6651 4.98195C7.6769 4.9506 7.69735 4.92325 7.72407 4.90306Z" stroke="#FFF" stroke-width="2.20588" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="xui-mt-9">
                                    <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>At Begorah Ltd, We are committed to creating educational experiences that are inclusive and accessible to all learners.</p>
                                    <Link className="xui-d-inline-flex xui-flex-ai-center learn-more">
                                        <p className='xui-font-sz-85'>Learn More</p>
                                        <span className="xui-ml-1 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                            <svg width="15" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.53 6.97003C17.6704 7.11066 17.7493 7.30128 17.7493 7.50003C17.7493 7.69878 17.6704 7.88941 17.53 8.03003L11.53 14.03C11.4613 14.1037 11.3785 14.1628 11.2865 14.2038C11.1945 14.2448 11.0952 14.2668 10.9945 14.2686C10.8938 14.2704 10.7938 14.2519 10.7004 14.2142C10.607 14.1764 10.5222 14.1203 10.451 14.0491C10.3797 13.9779 10.3236 13.893 10.2859 13.7996C10.2481 13.7062 10.2296 13.6062 10.2314 13.5055C10.2332 13.4048 10.2552 13.3055 10.2962 13.2135C10.3372 13.1215 10.3963 13.0387 10.47 12.97L15.19 8.25003H0.999989C0.801077 8.25003 0.61031 8.17101 0.469658 8.03036C0.329006 7.88971 0.249989 7.69894 0.249989 7.50003C0.249989 7.30112 0.329006 7.11035 0.469658 6.9697C0.61031 6.82905 0.801077 6.75003 0.999989 6.75003L15.19 6.75003L10.47 2.03003C10.3963 1.96137 10.3372 1.87857 10.2962 1.78657C10.2552 1.69457 10.2332 1.59526 10.2314 1.49455C10.2296 1.39385 10.2481 1.29382 10.2859 1.20043C10.3236 1.10705 10.3797 1.02221 10.451 0.950993C10.5222 0.879774 10.607 0.82363 10.7004 0.785909C10.7938 0.748188 10.8938 0.729663 10.9945 0.73144C11.0952 0.733217 11.1945 0.755258 11.2865 0.79625C11.3785 0.837242 11.4613 0.896344 11.53 0.970031L17.53 6.97003Z" fill="black"/>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid-card xui-p-1">
                                <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                                    <p className="xui-font-sz-120 begorah-text-blue xui-font-w-500 bold-font">Schedule Learning</p>
                                    <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle begorah-bg-blue">
                                    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_26_118)">
                                        <path d="M10.4118 3.84924C8.9284 3.84924 7.47835 4.28911 6.24499 5.11322C5.01162 5.93733 4.05032 7.10867 3.48267 8.47912C2.91501 9.84956 2.76648 11.3576 3.05587 12.8124C3.34526 14.2673 4.05957 15.6037 5.10846 16.6525C6.15735 17.7014 7.49373 18.4157 8.94858 18.7051C10.4034 18.9945 11.9114 18.846 13.2819 18.2783C14.6523 17.7107 15.8237 16.7494 16.6478 15.516C17.4719 14.2827 17.9118 12.8326 17.9118 11.3492C17.9095 9.36082 17.1186 7.45448 15.7126 6.04845C14.3065 4.64242 12.4002 3.85152 10.4118 3.84924ZM10.4118 16.9742C9.29924 16.9742 8.21171 16.6443 7.28668 16.0263C6.36165 15.4082 5.64068 14.5297 5.21494 13.5018C4.7892 12.474 4.6778 11.343 4.89484 10.2519C5.11189 9.16072 5.64762 8.15844 6.43429 7.37177C7.22096 6.5851 8.22324 6.04937 9.31438 5.83233C10.4055 5.61528 11.5365 5.72668 12.5644 6.15242C13.5922 6.57816 14.4707 7.29913 15.0888 8.22416C15.7069 9.14919 16.0368 10.2367 16.0368 11.3492C16.0351 12.8406 15.4419 14.2704 14.3874 15.3249C13.3329 16.3794 11.9031 16.9726 10.4118 16.9742ZM13.2625 8.18596C13.3499 8.27306 13.4193 8.37655 13.4666 8.49051C13.5139 8.60446 13.5383 8.72664 13.5383 8.85003C13.5383 8.97341 13.5139 9.09559 13.4666 9.20954C13.4193 9.3235 13.3499 9.42699 13.2625 9.51409L11.075 11.7016C10.8989 11.8777 10.6601 11.9767 10.411 11.9767C10.1619 11.9767 9.92304 11.8777 9.74692 11.7016C9.5708 11.5255 9.47185 11.2866 9.47185 11.0375C9.47185 10.7885 9.5708 10.5496 9.74692 10.3735L11.9344 8.18596C12.0215 8.09856 12.125 8.02922 12.239 7.9819C12.3529 7.93458 12.4751 7.91022 12.5985 7.91022C12.7219 7.91022 12.844 7.93458 12.958 7.9819C13.072 8.02922 13.1754 8.09856 13.2625 8.18596ZM7.59926 1.66174C7.59926 1.4131 7.69803 1.17465 7.87385 0.998831C8.04966 0.823015 8.28812 0.724243 8.53676 0.724243H12.2868C12.5354 0.724243 12.7739 0.823015 12.9497 0.998831C13.1255 1.17465 13.2243 1.4131 13.2243 1.66174C13.2243 1.91038 13.1255 2.14884 12.9497 2.32466C12.7739 2.50047 12.5354 2.59924 12.2868 2.59924H8.53676C8.28812 2.59924 8.04966 2.50047 7.87385 2.32466C7.69803 2.14884 7.59926 1.91038 7.59926 1.66174Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_26_118">
                                        <rect width="20" height="20" fill="white" transform="translate(0.411758 0.411743)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    </span>
                                </div>
                                <div className="xui-mt-9">
                                    <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>With flexible scheduling options, you can learn at your own pace while receiving the guidance and support needed to achieve your educational goals.</p>
                                    <Link className="xui-d-inline-flex xui-flex-ai-center learn-more">
                                        <p className='xui-font-sz-85'>Learn More</p>
                                        <span className="xui-ml-1 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                            <svg width="15" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.53 6.97003C17.6704 7.11066 17.7493 7.30128 17.7493 7.50003C17.7493 7.69878 17.6704 7.88941 17.53 8.03003L11.53 14.03C11.4613 14.1037 11.3785 14.1628 11.2865 14.2038C11.1945 14.2448 11.0952 14.2668 10.9945 14.2686C10.8938 14.2704 10.7938 14.2519 10.7004 14.2142C10.607 14.1764 10.5222 14.1203 10.451 14.0491C10.3797 13.9779 10.3236 13.893 10.2859 13.7996C10.2481 13.7062 10.2296 13.6062 10.2314 13.5055C10.2332 13.4048 10.2552 13.3055 10.2962 13.2135C10.3372 13.1215 10.3963 13.0387 10.47 12.97L15.19 8.25003H0.999989C0.801077 8.25003 0.61031 8.17101 0.469658 8.03036C0.329006 7.88971 0.249989 7.69894 0.249989 7.50003C0.249989 7.30112 0.329006 7.11035 0.469658 6.9697C0.61031 6.82905 0.801077 6.75003 0.999989 6.75003L15.19 6.75003L10.47 2.03003C10.3963 1.96137 10.3372 1.87857 10.2962 1.78657C10.2552 1.69457 10.2332 1.59526 10.2314 1.49455C10.2296 1.39385 10.2481 1.29382 10.2859 1.20043C10.3236 1.10705 10.3797 1.02221 10.451 0.950993C10.5222 0.879774 10.607 0.82363 10.7004 0.785909C10.7938 0.748188 10.8938 0.729663 10.9945 0.73144C11.0952 0.733217 11.1945 0.755258 11.2865 0.79625C11.3785 0.837242 11.4613 0.896344 11.53 0.970031L17.53 6.97003Z" fill="black"/>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid-card xui-p-1">
                                <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                                    <p className="xui-font-sz-120 begorah-text-blue xui-font-w-500 bold-font">Flexible Curriculum</p>
                                    <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle begorah-bg-blue">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.48583 6.03164C7.99167 6.4733 9.485 7.39747 10 7.9283C10.515 7.39747 12.0083 6.4733 14.515 6.03164C15.7842 5.80747 16.4192 5.6958 16.9592 6.12497C17.5 6.5533 17.5 7.24997 17.5 8.6433V13.6491C17.5 14.9233 17.5 15.56 17.1533 15.9575C16.8058 16.355 16.0425 16.49 14.515 16.7591C13.1525 16.9991 12.09 17.3816 11.3208 17.7658C10.5633 18.1441 10.185 18.3333 10 18.3333M10 18.3333C9.815 18.3333 9.43583 18.1441 8.67917 17.7666C7.91 17.3816 6.8475 16.9991 5.48583 16.7583C3.9575 16.49 3.19417 16.355 2.84667 15.9575C2.49917 15.56 2.5 14.9233 2.5 13.6491V8.6433C2.5 7.24997 2.5 6.5533 3.04083 6.12497C3.58083 5.6958 4.21583 5.8083 5.485 6.03164M10 18.3333V7.49997M7.08333 2.54914C7.94709 1.97247 8.9627 1.66539 10.0013 1.66688C11.0398 1.66836 12.0546 1.97833 12.9167 2.55747M11.3517 4.5833C10.9445 4.33596 10.4776 4.20446 10.0012 4.20299C9.52476 4.20152 9.05701 4.33014 8.64833 4.57497" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="xui-mt-9">
                                    <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>Our Flexible Curriculum is designed to evolve with the learner, incorporating feedback and adjusting to their progress.</p>
                                    <Link className="xui-d-inline-flex xui-flex-ai-center learn-more">
                                        <p className='xui-font-sz-85'>Learn More</p>
                                        <span className="xui-ml-1 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                            <svg width="15" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.53 6.97003C17.6704 7.11066 17.7493 7.30128 17.7493 7.50003C17.7493 7.69878 17.6704 7.88941 17.53 8.03003L11.53 14.03C11.4613 14.1037 11.3785 14.1628 11.2865 14.2038C11.1945 14.2448 11.0952 14.2668 10.9945 14.2686C10.8938 14.2704 10.7938 14.2519 10.7004 14.2142C10.607 14.1764 10.5222 14.1203 10.451 14.0491C10.3797 13.9779 10.3236 13.893 10.2859 13.7996C10.2481 13.7062 10.2296 13.6062 10.2314 13.5055C10.2332 13.4048 10.2552 13.3055 10.2962 13.2135C10.3372 13.1215 10.3963 13.0387 10.47 12.97L15.19 8.25003H0.999989C0.801077 8.25003 0.61031 8.17101 0.469658 8.03036C0.329006 7.88971 0.249989 7.69894 0.249989 7.50003C0.249989 7.30112 0.329006 7.11035 0.469658 6.9697C0.61031 6.82905 0.801077 6.75003 0.999989 6.75003L15.19 6.75003L10.47 2.03003C10.3963 1.96137 10.3372 1.87857 10.2962 1.78657C10.2552 1.69457 10.2332 1.59526 10.2314 1.49455C10.2296 1.39385 10.2481 1.29382 10.2859 1.20043C10.3236 1.10705 10.3797 1.02221 10.451 0.950993C10.5222 0.879774 10.607 0.82363 10.7004 0.785909C10.7938 0.748188 10.8938 0.729663 10.9945 0.73144C11.0952 0.733217 11.1945 0.755258 11.2865 0.79625C11.3785 0.837242 11.4613 0.896344 11.53 0.970031L17.53 6.97003Z" fill="black"/>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SectionDuplicate>
                </div>

            </section>
          
    
        </>
    )
}