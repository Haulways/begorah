import React, { useState } from 'react';
import LinkButton from "../LinkButton";
import MainBlogImage from "../../assets/images/main-blog-image.png";
import BlogImage1 from "../../assets/images/blog-image-1.png";
import BlogImage2 from "../../assets/images/blog-image-2.png";
import BlogImage3 from "../../assets/images/blog-image-3.png";
import BlogImage4 from "../../assets/images/blog-image-4.png";
import BlogPost from '../BlogPost';

const BlogSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const blogPosts = [
        {
            image: BlogImage1,
            title: 'Designing Accessible E-Learning: Best Practices and Strategies',
            text: 'Accessibility in e-learning is not just a legal obligation but a moral imperative. Ensuring that all learners, regardless of their abilities, can access and benefit from'
        },
        {
            image: BlogImage2,
            title: 'Maximizing Engagement: The Role of Gamification in Online Learning',
            text: 'Engaging learners in an online environment can be challenging. Gamification, the application of game-design elements in non-game contexts, has emer'
        },
        {
            image: BlogImage3,
            title: 'Measuring Success: Key Metrics for Evaluating E-Learning Effectiveness',
            text: 'Introduction Evaluating the effectiveness of e-learning programs is essential to ensure they deliver the desired outcomes. By tracking key metrics, educators...'
        },
        {
            image: BlogImage4,
            title: 'Customized Learning Paths: Tailoring Education to Meet Individual Needs',
            text: 'One-size-fits-all approaches to education are becoming outdated. Customized learning paths, which tailor educational experiences to individual needs'
        }
    ];

    return (
        <section className="xui-pt-5 xui-pb-2 xui-container">
            <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center'>
                <div>
                    <h3 className='xui-font-sz-100 begorah-text-blue bold-font xui-font-w-500'>BLOGS AND NEWS</h3>
                    <h3 className='xui-font-sz-150 xui-mt-1 bold-font xui-font-w-500'>Our Latest Blogs</h3>
                </div>
                {/* <LinkButton text="Read All Blogs" route="/" customClass="xui-btn-small xui-bdr-rad-half" /> */}
            </div>
            <div className='xui-mt-2 xui-row'>
                <div className='xui-lg-col-4 xui-col-12'>
                    <img className='xui-w-fluid-100 xui-h-400 xui-bdr-rad-half' src={MainBlogImage} alt="" />
                    <div className='xui-pt-1-half'>
                        <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center'>
                            <div className='xui-btn-small begorah-bg-blue-ii xui-bdr-rad-half begorah-text-blue xui-font-sz-95 xui-font-w-500 bold-font'>Innovation</div>
                            <p className='xui-font-sz-85 xui-opacity-6'>10th Jul, 2024</p>
                        </div>
                        <div className='xui-pt-1-half'>
                            <h3 className='xui-font-sz-150 xui-mt-1 bold-font xui-font-w-500 begorah-text-blue'>The Future of E-Learning: Trends and Innovations to Watch</h3>
                            <p className='xui-font-sz-90 xui-opacity-6 xui-line-height-1-half'>
                                {isExpanded
                                    ? "E-learning has rapidly evolved over the past decade, changing the way we approach education and training. From virtual classrooms to AI-driven personalized learning experiences, the future of e-learning promises to be even more dynamic and impactful. Innovative technologies like VR, AR, and blockchain are set to revolutionize the way we learn and teach. These advancements offer unprecedented opportunities for creating immersive and interactive learning environments, making education more accessible and engaging for students around the globe."
                                    : "E-learning has rapidly evolved over the past decade, changing the way we approach education and training..."}
                                <span style={{"fontWeight": "600"}} className='bold-font begorah-text-dark-blue xui-font-w-600 xui-cursor-pointer' onClick={toggleExpand}>{isExpanded ? ' Read Less' : ' Read More'}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-8 xui-col-12 xui-lg-pl-2 xui-pl-none'>
                    {blogPosts.map((post, index) => (
                        <BlogPost 
                            key={index}
                            image={post.image}
                            title={post.title}
                            text={post.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
