import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const LinkButton = (props) => {
    const { route, text, customClass, isButton, isHash, customStyle } = props;

    if (isHash) {
        return (
            <HashLink smooth to={route} style={customStyle} className={`begorah-bg-blue xui-text-white xui-lg-font-sz-85 xui-font-sz-70 ${customClass}`}>
                {text}
            </HashLink>
        );
    }

    if (isButton) {
        return (
            <button style={customStyle} className={`begorah-bg-blue xui-text-white xui-lg-font-sz-85 xui-font-sz-70 ${customClass}`}>
                {text}
            </button>
        );
    }

    return (
        <Link to={route} target='_blank' style={customStyle} className={`begorah-bg-blue xui-text-white xui-lg-font-sz-85 xui-font-sz-70 ${customClass}`}>
            {text}
        </Link>
    );
};

export default LinkButton;
