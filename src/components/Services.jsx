/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import { DotMark } from "@carbon/icons-react";
import ServiceImage1 from "../assets/images/service-image1.png";
import ServiceImage2 from "../assets/images/service2.jpg";
import ServiceImage3 from "../assets/images/service3.jpg";
import ServiceImage4 from "../assets/images/service4.jpg";
import ServiceImage5 from "../assets/images/service5.jpg";
import ServiceImage6 from "../assets/images/service6.jpg";
import ServiceImage7 from "../assets/images/service7.jpeg";

import Serviceitem from "./Serviceitem";
const Services = () => {
    const serviceData = [
        {
          question: <><div className="xui-d-inline-flex xui-flex-ai-center"><span><DotMark size={19.8} /></span> <p className="xui-ml-1">Blended Learning Solutions</p></div></>,
          heading: `Integrating traditional and digital learning methods for an enriched educational experience.`,
          paragraph: 'This helps in leveraging the strengths of both approaches to meet diverse student needs and prepare them for a dynamic future.',
          image: ServiceImage1,
        },
        {
          question: <><div className="xui-d-inline-flex xui-flex-ai-center"><span><DotMark size={19.8} /></span> <p className="xui-ml-1">Custom e-learning Solutions</p></div></>,
          heading: `Designing bespoke e-learning programs that align with your specific requirements.`,
          paragraph: `In today's rapidly evolving educational landscape, the integration of traditional and digital learning methods is emerging as a powerful strategy for creating a more enriched and dynamic educational experience. This blended approach leverages the strengths of both modalities, offering a comprehensive learning environment that meets the diverse needs of students and educators alike.`,
          image: ServiceImage2,
        },
        {
          question: <><div className="xui-d-inline-flex xui-flex-ai-center"><span><DotMark size={19.8} /></span> <p className="xui-ml-1">Academic Module Design</p></div></>,
          heading: `Crafting detailed and engaging academic modules for effective learning.`,
          paragraph: 'Integrating traditional and digital learning methods offers a promising pathway toward creating a more enriched educational experience. As education continues to evolve, combining the strengths of both traditional and digital approaches can lead to more engaging, effective, and personalized learning for students. This integration not only harnesses the advantages of each method but also addresses the limitations inherent in using one approach exclusively.',
          image: ServiceImage3,
        },
        {
          question: <><div className="xui-d-inline-flex xui-flex-ai-center"><span><DotMark size={19.8} /></span> <p className="xui-ml-1">Specialized Training Documentation</p></div></>,
          heading: `Developing precise and user-friendly training materials.`,
          paragraph: `Integrating traditional and digital learning methods has become an increasingly popular approach in the educational landscape, blending the strengths of both to create a more enriched and holistic learning experience. This hybrid model leverages the advantages of face-to-face interactions while incorporating the flexibility and vast resources available through digital means.`,
          image: ServiceImage4,
        },
        {
          question: <><div className="xui-d-inline-flex xui-flex-ai-center"><span><DotMark size={19.8} /></span> <p className="xui-ml-1">E-Learning to Slide Conversion</p></div></>,
          heading: `Transforming e-learning content into engaging and informative slides.`,
          paragraph: `Transforming e-learning content into engaging and informative slides represents a pivotal step towards enhancing educational experiences in today’s digital age. This process integrates traditional pedagogical principles with contemporary technological advancements, aiming to foster deeper engagement, comprehension, and retention among learners.`,
          image: ServiceImage5,
        },
        {
          question: <><div className="xui-d-inline-flex xui-flex-ai-center"><span><DotMark size={19.8} /></span> <p className="xui-ml-1">Exam Script Marking Services</p></div></>,
          heading: `Providing accurate and efficient exam marking solutions.`,
          paragraph: `Integrating traditional and digital learning methods represents a pivotal evolution in education, offering a multifaceted approach that enriches the overall educational experience. This integration bridges the gap between conventional classroom settings and the dynamic possibilities afforded by digital technologies, aiming to harness the strengths of both paradigms for optimal learning outcomes.`,
          image: ServiceImage6,
        }

    ];

    return (
        <>
        <section className="xui-py-3 xui-overflow-y-hidden xui-bg-white">
            <Serviceitem data={serviceData}/>
        </section>
        </>
    )
};

export default Services;