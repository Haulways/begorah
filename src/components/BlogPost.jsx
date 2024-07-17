import { React, useState } from 'react';

const BlogPost = ({ image, title, text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const maxLength = 150;
    return (
        <div className='xui-d-flex xui-flex-ai-center xui-mb-1-half'>
            <img className='xui-img-150' src={image} alt="" />
            <div className='xui-pl-1' style={{"width": "calc(100% - 150px)"}}>
                <h3 className='xui-font-sz-120 bold-font xui-font-w-500 begorah-text-blue xui-lg-w-fluid-90 xui-w-fluid-100'>{title}</h3>
                <p className='xui-font-sz-90 xui-opacity-6 xui-line-height-1-half'>
                    {isExpanded ? text : `${text.slice(0, maxLength)}...`}
                        <span style={{"fontWeight": "600"}} onClick={toggleExpand} className='bold-font begorah-text-dark-blue xui-font-w-600 xui-cursor-pointer'>
                            {isExpanded ? ' Read less' : ' Read more'}
                        </span>
                </p>
            </div>
        </div>
    );
};

export default BlogPost;