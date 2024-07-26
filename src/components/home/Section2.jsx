import SectionDuplicate from "../SectionDuplicate";
import Section2Image from "../../assets/images/section2-image.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Section2(){
    const cardBack = "At Begorah Ltd, We are committed to creating educational experiences that are inclusive and accessible to all learners.";

    const initialCardsState = [
        { id: 1, isFlipped: false, text: "Course Accessibility", cardBack: "At Begorah Ltd, We are committed to creating educational experiences that are inclusive and accessible to all learners." },
        { id: 2, isFlipped: false, text: "Schedule Learning", cardBack: "With flexible scheduling options, you can learn at your own pace while receiving the guidance and support needed to achieve your educational goals." },
        { id: 3, isFlipped: false, text: "Flexible Curriculum", cardBack: "Our Flexible Curriculum is designed to evolve with the learner, incorporating feedback and adjusting to their progress." }
    ];

    const [cards, setCards] = useState(initialCardsState);
    console.log(cards);

    const handleFlip = (id) => {
        setCards(cards.map(card => 
            card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
        ));
    };
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
                            {cards.map((card) => (
                                <div key={card.id} className={`grid-card flip-card xui-pt-1 xui-px-1 xui-pb-2 ${card.isFlipped ? "flipped" : ""}`}>
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front xui-d-flex xui-flex-dir-column xui-flex-jc-space-between">
                                            <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                                                <p className="xui-font-sz-120 begorah-text-blue xui-font-w-500 bold-font">{card.text}</p>
                                                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle begorah-bg-blue">
                                                    <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.55014 1.8479C4.19181 1.98228 3.27723 2.28436 2.59389 2.96873C1.36993 4.19478 1.36993 6.16873 1.36993 10.1177V14.3052C1.36993 18.2531 1.36993 20.2281 2.59389 21.4552C3.81785 22.6823 5.78868 22.6812 9.72931 22.6812H11.8199C15.7606 22.6812 17.7314 22.6812 18.9554 21.4552C20.0668 20.3406 20.1699 18.625 20.1793 15.3656" stroke="#FFF" stroke-width="2.20588" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M9.72928 7.05618L10.7741 10.702C11.3574 11.8583 12.0897 12.1603 13.9095 12.2645C15.3564 12.2291 16.1959 12.0583 16.9126 11.4353C17.4012 11.0103 17.622 10.3697 17.7293 9.73222L18.0876 7.57702M20.7001 5.49368V10.702M7.72407 4.90306C9.3772 3.53118 10.8501 2.79472 13.9053 1.98431C14.25 1.89331 14.6126 1.89511 14.9564 1.98952C17.6605 2.73327 19.1209 3.39368 21.0772 4.86243C21.1605 4.92493 21.1855 5.0416 21.1272 5.12806C20.4887 6.06764 19.0626 6.8291 15.5647 8.18535C14.8361 8.46569 14.0287 8.46123 13.3032 8.17285C9.57824 6.69368 7.86574 5.90202 7.6574 5.08014C7.65063 5.04734 7.6533 5.01329 7.6651 4.98195C7.6769 4.9506 7.69735 4.92325 7.72407 4.90306Z" stroke="#FFF" stroke-width="2.20588" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div>
                                                {/* <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>At Begorah Ltd, We are committed to creating educational experiences that are inclusive and accessible to all learners.</p> */}
                                                <Link onClick={() => handleFlip(card.id)} className="xui-d-inline-flex xui-flex-ai-center learn-more">
                                                    <p className='xui-font-sz-85'>Show More</p>
                                                    <span className="xui-ml-1 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                                        <svg width="15" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.53 6.97003C17.6704 7.11066 17.7493 7.30128 17.7493 7.50003C17.7493 7.69878 17.6704 7.88941 17.53 8.03003L11.53 14.03C11.4613 14.1037 11.3785 14.1628 11.2865 14.2038C11.1945 14.2448 11.0952 14.2668 10.9945 14.2686C10.8938 14.2704 10.7938 14.2519 10.7004 14.2142C10.607 14.1764 10.5222 14.1203 10.451 14.0491C10.3797 13.9779 10.3236 13.893 10.2859 13.7996C10.2481 13.7062 10.2296 13.6062 10.2314 13.5055C10.2332 13.4048 10.2552 13.3055 10.2962 13.2135C10.3372 13.1215 10.3963 13.0387 10.47 12.97L15.19 8.25003H0.999989C0.801077 8.25003 0.61031 8.17101 0.469658 8.03036C0.329006 7.88971 0.249989 7.69894 0.249989 7.50003C0.249989 7.30112 0.329006 7.11035 0.469658 6.9697C0.61031 6.82905 0.801077 6.75003 0.999989 6.75003L15.19 6.75003L10.47 2.03003C10.3963 1.96137 10.3372 1.87857 10.2962 1.78657C10.2552 1.69457 10.2332 1.59526 10.2314 1.49455C10.2296 1.39385 10.2481 1.29382 10.2859 1.20043C10.3236 1.10705 10.3797 1.02221 10.451 0.950993C10.5222 0.879774 10.607 0.82363 10.7004 0.785909C10.7938 0.748188 10.8938 0.729663 10.9945 0.73144C11.0952 0.733217 11.1945 0.755258 11.2865 0.79625C11.3785 0.837242 11.4613 0.896344 11.53 0.970031L17.53 6.97003Z" fill="black"/>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flip-card-back xui-d-flex xui-flex-dir-column xui-flex-jc-space-between xui-flex-ai-flex-start">
                                            <div className="card-content">
                                                <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>{card.cardBack}</p>
                                            </div>
                                            <Link onClick={() => handleFlip(card.id)} className="xui-d-inline-flex xui-flex-ai-center learn-more">
                                                <p className='xui-font-sz-85'>Show Less</p>
                                                <span className="xui-ml-1 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                                                    <svg width="15" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.53 6.97003C17.6704 7.11066 17.7493 7.30128 17.7493 7.50003C17.7493 7.69878 17.6704 7.88941 17.53 8.03003L11.53 14.03C11.4613 14.1037 11.3785 14.1628 11.2865 14.2038C11.1945 14.2448 11.0952 14.2668 10.9945 14.2686C10.8938 14.2704 10.7938 14.2519 10.7004 14.2142C10.607 14.1764 10.5222 14.1203 10.451 14.0491C10.3797 13.9779 10.3236 13.893 10.2859 13.7996C10.2481 13.7062 10.2296 13.6062 10.2314 13.5055C10.2332 13.4048 10.2552 13.3055 10.2962 13.2135C10.3372 13.1215 10.3963 13.0387 10.47 12.97L15.19 8.25003H0.999989C0.801077 8.25003 0.61031 8.17101 0.469658 8.03036C0.329006 7.88971 0.249989 7.69894 0.249989 7.50003C0.249989 7.30112 0.329006 7.11035 0.469658 6.9697C0.61031 6.82905 0.801077 6.75003 0.999989 6.75003L15.19 6.75003L10.47 2.03003C10.3963 1.96137 10.3372 1.87857 10.2962 1.78657C10.2552 1.69457 10.2332 1.59526 10.2314 1.49455C10.2296 1.39385 10.2481 1.29382 10.2859 1.20043C10.3236 1.10705 10.3797 1.02221 10.451 0.950993C10.5222 0.879774 10.607 0.82363 10.7004 0.785909C10.7938 0.748188 10.8938 0.729663 10.9945 0.73144C11.0952 0.733217 11.1945 0.755258 11.2865 0.79625C11.3785 0.837242 11.4613 0.896344 11.53 0.970031L17.53 6.97003Z" fill="black"/>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionDuplicate>
                </div>

            </section>
          
    
        </>
    )
}