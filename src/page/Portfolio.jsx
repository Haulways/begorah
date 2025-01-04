import { Designtools } from 'iconsax-react';
import React from 'react';
import CircleSpinner from '../components/CircleSpinner';
import Typewriter from 'react-ts-typewriter';
import Profile from "../assets/images/section4-image5.png";
import PT1 from "../assets/images/pt1.png";
import Logo from "../assets/images/logo.svg";
import Spec1 from "../assets/images/spec1.png";
import Spec2 from "../assets/images/spec2.png";
import Spec3 from "../assets/images/spec3.png";
import Spec4 from "../assets/images/spec4.png";
import Spec5 from "../assets/images/spec5.png";
import Spec6 from "../assets/images/spec6.png";
import Spec7 from "../assets/images/spec7.png";
import Spec8 from "../assets/images/spec8.png";
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const specializations = [
    {"image": Spec1, "text": 'The layout must be intuitive, guiding students through course materials, assignments, and discussions. We can achieve this by clearly structuring modules and ensuring that all content is easily accessible.'},
    {"image": Spec2, "text": 'Canvas provides features like announcements and messaging to keep students informed. These tools should be utilized to share important updates and engage students with course material'},
    {"image": Spec3, "text": 'Canvas offers discussion boards, quizzes, and multimedia support. These tools can be used to create interactive content and foster student engagement. For example, using video content and quizzes within modules can enhance learning outcomes and keep students engaged.'},
    {"image": Spec4, "text": 'With a diverse student body, including international students, the course must be inclusive and flexible. Canvas supports features such as accessibility tools, subtitles, and extra time for assessments, all of which can help students from varied backgrounds succeed.'},
    {"image": Spec5, "text": 'From the student feedback, there is a clear concern about course materials being presented at an overwhelming pace. To address this, I would recommend a more gradual progression from basic to advanced concepts in the modules, allowing students to build confidence before tackling more complex ideas. We can use Canvas’s modular structure to pace content delivery effectively.'},
    {"image": Spec6, "text": 'Another theme raised in the feedback was the need for better pastoral support and clarity on marking criteria. For the online course, I would suggest creating a dedicated space in Canvas for student wellbeing resources, which could include links to support services, workshops on stress management, and clear guidelines for academic integrity.'},
    {"image": Spec7, "text": 'Before meeting with the academic team, I would review the program outline and student feedback to gather insights. I’d prepare a list of priorities, focusing on clarity of communication, the use of multimedia, and ensuring that the course offers both challenge and support. To develop these course spaces, I would propose running workshops with the academic team to collaboratively design the course structure. This would include mapping out the content delivery, ensuring an appropriate balance between theory and practical application. And finally, I would suggest setting up regular feedback loops with the program team during development. This would ensure the course evolves based on input from both faculty and students.'},
    {"image": Spec8, "text": 'In conclusion, developing a flagship course in Canvas for the University of Manchester’s BSc in Global Development involves careful consideration of course structure, interactivity, and student engagement. By focusing on clarity, detailed feedback, and inclusive design, we can create an online space that supports student success, fosters interdisciplinary learning, and responds effectively to student feedback. I look forward to collaborating with the academic team to ensure the course meets the highest standards of pedagogical excellence. Thank you.'},
    ]
    return (
        <section className='xui-d-flex xui-lg-flex-dir-row xui-flex-dir-column xui-container'>
            <div>
                <div className='portfolio-sidebar xui-lg-mt-none xui-mt-7 xui-text-center xui-py-2 xui-px-3 begorah-border-grey xui-bdr-rad-1'>
                    <img src={Logo} className='xui-img-250 xui-mx-auto' alt="" />
                    <h3 className='xui-font-sz-120 xui-mt-1'>we believe in the transformative power of learning.</h3>
                    <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1'>
                        <Link to='mailto:Contact@begorah.co.uk' className='xui-text-dc-none xui-text-white xui-btn-block begorah-bg-blue xui-bdr-rad-2 xui-mt-1'>Reach Out</Link>
                        <Link to='https://www.linkedin.com/company/begorah-ltd/' target='_blank' className='xui-text-dc-none begorah-color-blue xui-btn-block xui-bdr-rad-2 begorah-bdr-blue xui-mt-1'>Learn more</Link>
                    </div>
                </div>
            </div>
            <div className="portfolio-main-screen xui-lg-px-4 xui-px-1 xui-pt-4 xui-pb-2">
                <div className="xui-lg-py-3 xui-py-1">
                    {/* <div className="xui-lg-font-sz-300 xui-font-sz-200 xui-font-w-normal xui-letter-spacing-2 xui-lg-w-fluid-90 xui-w-fluid-100 bold-font">
                        <Typewriter text='Designing a Flagship Canvas Course for BSc in Global Development' speed={30} cursor={false}/>
                    </div> */}
                    <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-350 xui-bdr-rad-1' style={{backgroundImage: `url('${PT1}')`}}>

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
                    {specializations.map((specialization, index) => (
                        <div key={index} className="xui-p-1 begorah-border-grey xui-bdr-rad-1 service">
                            <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-350 xui-bdr-rad-1' style={{backgroundImage: `url('${specialization.image}')`}}></div>
                            <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">{specialization.text}</p>
                        </div>
                    ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;