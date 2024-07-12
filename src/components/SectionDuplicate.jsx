import React from 'react';

const SectionDuplicate = (props) => {
    const { paragraphHeading, mainHeading, children } = props;
    return (
        <div>
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1'>
                <div>
                    <h3 className='bold-font xui-font-w-500 xui-lg-font-sz-250 xui-font-sz-200 xui-m-none'>{mainHeading}</h3>
                </div>
                <div>
                    <p className='xui-font-sz-90 xui-line-height-1-half'>{paragraphHeading}</p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SectionDuplicate;