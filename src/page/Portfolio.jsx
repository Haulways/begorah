import { Designtools } from 'iconsax-react';
import React from 'react';
import CircleSpinner from '../components/CircleSpinner';
import Typewriter from 'react-ts-typewriter';
import PT1 from "../assets/images/section4-image5.png";
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className='xui-d-flex xui-lg-flex-dir-row xui-flex-dir-column xui-container'>
            <div>
                <div className='portfolio-sidebar xui-lg-mt-none xui-mt-7 xui-text-center xui-py-2 xui-px-3 begorah-border-grey xui-bdr-rad-1'>
                    <img src={PT1} className='xui-w-fluid-100 xui-h-250 xui-bdr-rad-1' alt="" />
                    <Link to='mailto:Contact@begorah.co.uk' className='xui-text-dc-none xui-text-white xui-btn-block xui-bdr-rad-half begorah-bg-blue xui-mt-1'>Reach Out</Link>
                </div>
            </div>
            <div className="portfolio-main-screen xui-lg-px-4 xui-px-1 xui-pt-4 xui-pb-2">
                <div className="xui-lg-py-3 xui-py-1">
                    <div className="xui-lg-font-sz-300 xui-font-sz-200 xui-font-w-normal xui-letter-spacing-2 xui-lg-w-fluid-90 xui-w-fluid-100 bold-font">
                        <Typewriter text='Designing a Flagship Canvas Course for BSc in Global Development' speed={30} cursor={false}/>
                    </div>
                    {/* <h1>{typedText}</h1> */}
                    <p className="xui-opacity-6 xui-font-sz-100 xui-line-height-2 xui-mt-1">Hello, and welcome. My name is Deborah Ogbeni, and today I'll be walking you through the development of an online flagship course space for the University of Manchester's BSc in Global Development, designed to ensure pedagogical excellence and provide the best student experience. In this presentation, I'll cover the key aspects of a flagship Canvas course, themes for improving the course based on student feedback, and a consultation approach for working with the academic team to develop these spaces.</p>
                    <div className="xui-d-flex xui-flex-jc-flex-end">
                        <CircleSpinner />
                    </div>
                </div>
                <div className="xui-py-3">
                    <h1 className="xui-font-sz-200 bold-font xui-letter-spacing-2 xui-w-fluid-80">Our <span className="begorah-text-blue">Specializations</span></h1>
                    <div className='xui-mt-2 xui-d-grid xui-grid-col-1 xui-grid-gap-2' id='specializations'>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">User-Friendly Navigation</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">The layout must be intuitive, guiding students through course materials, assignments, and discussions. We can achieve this by clearly structuring modules and ensuring that all content is easily accessible.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Clear Communication</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">Canvas provides features like announcements and messaging to keep students informed. These tools should be utilized to share important updates and engage students with course material</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Interactivity and Engagement</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">Canvas provides features like announcements and messaging to keep students informed. These tools should be utilized to share important updates and engage students with course material</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Inclusive Learning Environment</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">With a diverse student body, including international students, the course must be inclusive and flexible. Canvas supports features such as accessibility tools, subtitles, and extra time for assessments, all of which can help students from varied backgrounds succeed.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Feedback and Support:</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">Detailed feedback through SpeedGrader to guide student improvement.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Student Wellbeing</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">Another theme raised in the feedback was the need for better pastoral support and clarity on marking criteria. For the online course, I would suggest creating a dedicated space in Canvas for student wellbeing resources, which could include links to support services, workshops on stress management, and clear guidelines for academic integrity.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Student Wellbeing</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">Another theme raised in the feedback was the need for better pastoral support and clarity on marking criteria. For the online course, I would suggest creating a dedicated space in Canvas for student wellbeing resources, which could include links to support services, workshops on stress management, and clear guidelines for academic integrity.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>

                    </div>
                </div>
                <div className="xui-py-1">
                    <h1 className="xui-font-sz-200 bold-font xui-letter-spacing-2 xui-w-fluid-80">Consultation Approach</h1>
                    <p className='xui-font-sz-110 xui-opacity-7 xui-mt-1'>Now, let's discuss how I would approach the early discussions with the program team to ensure these themes are integrated into the course design.</p>
                    <div className='xui-mt-2 xui-d-grid xui-grid-col-1 xui-grid-gap-2'>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Initial Meeting Preparation</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">Before meeting with the academic team, I would review the program outline and student feedback to gather insights. I’d prepare a list of priorities, focusing on clarity of communication, the use of multimedia, and ensuring that the course offers both challenge and support.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Collaborative Workshops:</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">To develop these course spaces, I would propose running workshops with the academic team to collaboratively design the course structure. This would include mapping out the content delivery, ensuring an appropriate balance between theory and practical application.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>
                        <div className="xui-p-2 begorah-border-grey xui-bdr-rad-1 xui-d-flex service">
                            <div style={{"width":"calc(100% - 22px)"}}>
                                <h1 className="xui-font-sz-150 xui-font-w-medium xui-letter-spacing-2">Ongoing Feedback and Iteration</h1>
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">I would suggest setting up regular feedback loops with the program team during development. This would ensure the course evolves based on input from both faculty and students.</p>
                            </div>
                            <Designtools size="22" color="#000760" variant="Bold"/>
                        </div>

                    </div>
                </div>
                <h1 className="xui-font-sz-200 bold-font xui-letter-spacing-2 xui-w-fluid-80 xui-mt-1">Conclusion</h1>
                <p className='xui-font-sz-110 xui-opacity-7 xui-mt-1 xui-line-height-1-half'>In conclusion, developing a flagship course in Canvas for the University of Manchester’s BSc in Global Development involves careful consideration of course structure, interactivity, and student engagement. By focusing on clarity, detailed feedback, and inclusive design, we can create an online space that supports student success, fosters interdisciplinary learning, and responds effectively to student feedback. I look forward to collaborating with the academic team to ensure the course meets the highest standards of pedagogical excellence. Thank you.</p>
            </div>
        </section>
    );
};

export default Portfolio;