import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
    const { route, text, customClass, isButton, customStyle } = props;
    return (
        <>
            {
            !isButton ? <Link to={route} style={customStyle} className={`begorah-bg-blue xui-text-white xui-lg-font-sz-85 xui-font-sz-70 ${customClass}`}>{text}</Link>
            : <button type='submit' style={customStyle} className={`begorah-bg-blue xui-text-white xui-lg-font-sz-85 xui-font-sz-70 ${customClass}`}>{text}</button>
            }
        </>
        
    );
};

export default LinkButton;