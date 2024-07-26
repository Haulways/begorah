/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */

import Accordionitem from "./Accordionitem";
const FAQ = () => {
    const faqData = [
        {
          question: `What makes Begorah's e-learning solutions unique?`,
          answer: `Begorah's e-learning solutions are unique because we blend innovative educational design with cutting-edge technology to create engaging, interactive learning experiences. We incorporate multimedia, gamification, and real-world applications to ensure learning is both effective and enjoyable. Our solutions are tailored to meet the specific needs of higher education institutions, organizations, and businesses, ensuring a personalized and impactful learning journey.`
        },
        {
          question: `How can I access Begorah's courses`,
          answer: 'While Begorah does not provide direct enrollment to courses, we offer our e-learning services as freelance contractors to higher education institutions, organizations, and businesses. To access our services, institutions can contact us to discuss their specific training needs. We then collaborate closely to develop and deliver customized learning solutions that integrate seamlessly into their existing training infrastructure.'
        },
        {
          question: `Are Begorah's courses suitable for beginners?`,
          answer: `Yes, Begorah's learning solutions are designed to cater to all levels of learners, including beginners. We develop introductory modules that provide foundational knowledge in various subjects, with clear, step-by-step instructions and ample resources to help beginners grasp the basics. Our goal is to make learning accessible and effective for all learners, regardless of their prior knowledge or experience.`
        },
        {
          question: `Can organizations integrate Begorah's courses into their training programs?`,
          answer: `Absolutely. We specialize in creating customized training packages that meet the specific needs of businesses and institutions. Our platform supports various integration options, ensuring that our courses complement your existing training infrastructure. This helps enhance your team's skills and productivity by providing relevant and tailored learning solutions.`
        },
        {
          question: 'What support does Begorah provide to organizations?',
          answer: 
          <div className="xui-pl-1">
            At Begorah, we are committed to offering exceptional support to our clients. Our comprehensive support services for organizations include:
            <ul className="xui-my-1">
              <li>24/7 Technical Assistance: Our dedicated technical support team is available around the clock to resolve any issues related to our e-learning solutions, ensuring smooth integration and functionality.</li>
              <li className="xui-mt-1">Expert Consultation and Mentoring : Organizations benefit from access to our team of experts who provide personalized guidance and constructive feedback on course development and implementation.</li>
              <li className="xui-mt-1">Interactive Community Engagement: We facilitate a vibrant network where your educators and administrators can connect, share insights, and collaborate through forums and other interactive platforms.</li>
              <li className="xui-mt-1">Extensive Resource Library: We offer a wealth of supplementary materials, including detailed tutorials, comprehensive FAQs, and user-friendly guides, to support your staff in delivering effective learning experiences.</li>
            </ul>
            Our goal is to ensure that your organization receives the support necessary to successfully implement and benefit from our e-learning solutions, ultimately achieving your educational and training objectives.
          </div>
        }
    ];

    return (
        <>
        <section className="xui-py-3 xui-container xui-overflow-y-hidden xui-bg-white">
            <h3 className="xui-lg-font-sz-250 xui-font-sz-200 xui-mt-1 xui-text-center bold-font xui-font-w-500">Frequently Asked Questions</h3>
            <Accordionitem data={faqData}/>
        </section>
        </>
    )
};

export default FAQ;