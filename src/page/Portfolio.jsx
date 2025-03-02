import React from 'react';
// import CircleSpinner from '../components/CircleSpinner';
import Typewriter from 'react-ts-typewriter';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const specializations = [
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031211/spec1_uar2ko.png', "text": 'The layout must be intuitive, guiding students through course materials, assignments, and discussions. We can achieve this by clearly structuring modules and ensuring that all content is easily accessible.'},
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031360/spec2_zli0ev.png', "text": 'Canvas provides features like announcements and messaging to keep students informed. These tools should be utilized to share important updates and engage students with course material'},
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031424/spec3_q2hjhx.png', "text": 'Canvas offers discussion boards, quizzes, and multimedia support. These tools can be used to create interactive content and foster student engagement. For example, using video content and quizzes within modules can enhance learning outcomes and keep students engaged.'},
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031485/spec4_chdopc.png', "text": 'With a diverse student body, including international students, the course must be inclusive and flexible. Canvas supports features such as accessibility tools, subtitles, and extra time for assessments, all of which can help students from varied backgrounds succeed.'},
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031580/spec5_dkdazj.png', "text": 'From the student feedback, there is a clear concern about course materials being presented at an overwhelming pace. To address this, I would recommend a more gradual progression from basic to advanced concepts in the modules, allowing students to build confidence before tackling more complex ideas. We can use Canvas’s modular structure to pace content delivery effectively.'},
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031629/spec6_tev9we.png', "text": 'Another theme raised in the feedback was the need for better pastoral support and clarity on marking criteria. For the online course, I would suggest creating a dedicated space in Canvas for student wellbeing resources, which could include links to support services, workshops on stress management, and clear guidelines for academic integrity.'},
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031655/spec7_hybog2.png', "text": 'Before meeting with the academic team, I would review the program outline and student feedback to gather insights. I’d prepare a list of priorities, focusing on clarity of communication, the use of multimedia, and ensuring that the course offers both challenge and support. To develop these course spaces, I would propose running workshops with the academic team to collaboratively design the course structure. This would include mapping out the content delivery, ensuring an appropriate balance between theory and practical application. And finally, I would suggest setting up regular feedback loops with the program team during development. This would ensure the course evolves based on input from both faculty and students.'},
    {"image": 'https://res.cloudinary.com/dgynhlovo/image/upload/v1736031680/spec8_s7fx96.png', "text": 'In conclusion, developing a flagship course in Canvas for the University of Manchester’s BSc in Global Development involves careful consideration of course structure, interactivity, and student engagement. By focusing on clarity, detailed feedback, and inclusive design, we can create an online space that supports student success, fosters interdisciplinary learning, and responds effectively to student feedback. I look forward to collaborating with the academic team to ensure the course meets the highest standards of pedagogical excellence. Thank you.'},
    ]
    return (
        <>
            <section className='xui-text-center xui-container xui-lg-pt-8 xui-lg-pb-2 xui-pt-9 xui-pb-3'>
                <div className="xui-lg-font-sz-350 xui-font-sz-300 xui-font-w-normal xui-letter-spacing-2 xui-lg-w-fluid-50 xui-w-fluid-100 bold-font xui-mx-auto">
                    <Typewriter text='Welcome to my portfolio' speed={30} cursor={false}/>
                </div>
                <p className="xui-opacity-6 xui-font-sz-100 xui-line-height-2 xui-mt-1">Flagship course design for a university</p>
            </section>
            {/* <div className="xui-d-flex xui-flex-jc-center">
                <CircleSpinner />
            </div> */}
            <section className='xui-container xui-py-half'>
                <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2' id='specializations'>
                    {specializations.map((specialization, index) => (
                        <div key={index} className="xui-p-1 begorah-border-grey xui-bdr-rad-1 service">
                            <img className='xui-w-fluid-100 xui-bdr-rad-1' src={specialization.image} alt="" />
                        </div>
                    ))}

                </div>
            </section>
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1'>
                <Link to='mailto:Contact@begorah.co.uk' className='xui-text-dc-none xui-text-white xui-btn begorah-bg-blue xui-bdr-rad-2 xui-mt-1'>Reach Out</Link>
                <Link to='https://www.linkedin.com/company/begorah-ltd/' target='_blank' className='xui-text-dc-none begorah-color-blue xui-btn xui-bdr-rad-2 begorah-bdr-blue xui-mt-1'>Learn more</Link>
            </div>
            {/* <section className='xui-d-flex xui-lg-flex-dir-row xui-flex-dir-column xui-container'>
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
                        <div className="xui-lg-font-sz-300 xui-font-sz-200 xui-font-w-normal xui-letter-spacing-2 xui-lg-w-fluid-90 xui-w-fluid-100 bold-font">
                            <Typewriter text='Designing a Flagship Canvas Course for BSc in Global Development' speed={30} cursor={false}/>
                        </div>
                        <div className='xui-bg-sz-cover xui-bg-pos-center xui-h-350 xui-bdr-rad-1' style={{backgroundImage: `url(https://res.cloudinary.com/dgynhlovo/image/upload/v1736030994/pt1_azhoiq.png)`}}>

                        </div>
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
                                <img className='xui-w-fluid-100 xui-bdr-rad-1' src={specialization.image} alt="" />
                                <p className="xui-opacity-7 xui-font-sz-100 xui-md-w-fluid-90 xui-lg-w-fluid-90 xui-line-height-2 xui-mt-1">{specialization.text}</p>
                            </div>
                        ))}

                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Portfolio;