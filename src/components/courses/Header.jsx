import { useRef, useState } from "react";
import Asterics from "../../assets/images/asterics2.png";

export default function Header() {
    const emailRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            const subject = "No-reply: Thank you for contacting us";
            const body = `Dear ${email},\n\nThank you for reaching out. We have received your email and will get back to you shortly.\n\nBest regards,\nYour Company`;
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Attempt to open the mail client
            const mailWindow = window.open(mailtoLink, '_blank');
            
            // If the mail client fails to open
            if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
                setErrorMessage('It looks like you don’t have an email client configured. Please use a web-based email service or contact us directly at: mail@rsecng.co');
            }
        } else {
            setErrorMessage('Please enter a valid email address.');
        }
    };

    return (
        <section id="about" className="xui-pt-8 xui-pb-3-half xui-container begorah-bg-blue">
            <div className="xui-text-center xui-text-white">
                <span className="xui-btn-small xui-bg-white xui-bdr-rad-1 begorah-text-blue xui-font-sz-90 bold-font-2">Expand your Horizons</span>
                <h1 className="xui-lg-font-sz-200 xui-font-sz-150 xui-d-flex xui-flex-ai-center xui-mt-1-half xui-flex-jc-center bold-font xui-grid-gap-1-half">
                    <img className="xui-lg-img-30 xui-img-20" src={Asterics} alt="" /> Industries We Served <img className="xui-lg-img-30 xui-img-20" src={Asterics} alt="" />
                </h1>
                <div className="xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-mt-1-half">
                    <div className="xui-d-flex xui-bg-white xui-bdr-rad-3 xui-lg-w-fluid-83 xui-w-fluid-83">
                        <div style={{ "borderTopLeftRadius": "3rem", "borderBottomLeftRadius": "3rem" }} className="xui-w-75 xui-h-75 begorah-bg-blue-iii xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                            <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9999 39.5833H8.33325M41.6666 10.4167H35.4166M41.6666 39.5833H33.3333M27.0833 10.4167H8.33325M14.5833 25H8.33325M41.6666 25H22.9166" stroke="#000760" strokeWidth="2" strokeLinecap="round" />
                                <path d="M33.3333 39.5833C33.3333 37.2821 31.4679 35.4167 29.1667 35.4167C26.8655 35.4167 25 37.2821 25 39.5833C25 41.8845 26.8655 43.75 29.1667 43.75C31.4679 43.75 33.3333 41.8845 33.3333 39.5833Z" stroke="#000760" strokeWidth="2" strokeLinecap="round" />
                                <path d="M22.9166 25C22.9166 22.6988 21.0511 20.8333 18.7499 20.8333C16.4487 20.8333 14.5833 22.6988 14.5833 25C14.5833 27.3012 16.4487 29.1667 18.7499 29.1667C21.0511 29.1667 22.9166 27.3012 22.9166 25Z" stroke="#000760" strokeWidth="2" strokeLinecap="round" />
                                <path d="M35.4166 10.4167C35.4166 8.11548 33.5511 6.25 31.2499 6.25C28.9487 6.25 27.0833 8.11548 27.0833 10.4167C27.0833 12.7178 28.9487 14.5833 31.2499 14.5833C33.5511 14.5833 35.4166 12.7178 35.4166 10.4167Z" stroke="#000760" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="xui-d-flex xui-pl-1" style={{ "width": "calc(100% - 75px)" }}>
                            <div className="xui-w-50 xui-h-fluid-100 xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9545 3.75C11.134 3.75 9.35443 4.28983 7.84075 5.30124C6.32708 6.31264 5.14732 7.75018 4.45065 9.43209C3.75399 11.114 3.57171 12.9647 3.92687 14.7502C4.28202 16.5357 5.15867 18.1758 6.44594 19.4631C7.73321 20.7503 9.37329 21.627 11.1588 21.9821C12.9443 22.3373 14.795 22.155 16.4769 21.4583C18.1588 20.7617 19.5963 19.5819 20.6078 18.0682C21.6192 16.5546 22.159 14.775 22.159 12.9545C22.1588 10.5134 21.189 8.17225 19.4629 6.44611C17.7367 4.71996 15.3956 3.75016 12.9545 3.75Z" stroke="#737373" strokeWidth="1.5" strokeMiterlimit="10" />
                                    <path d="M19.8218 19.8217L26.2501 26.25" stroke="#737373" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="xui-pl-1" style={{ "width": "calc(100% - 50px)" }}>
                                <input ref={emailRef} style={{ "outline": "none", "border": "none" }} className="xui-bdr-rad-3 xui-w-fluid-100 xui-h-fluid-100 xui-font-sz-90 xui-text-black" type="text" placeholder="Enter your email" />
                            </div>
                        </div>
                    </div>
                    <div className="xui-bg-white xui-bdr-rad-2 xui-p-half xui-lg-w-fluid-15 xui-w-fluid-100 xui-lg-mt-none xui-mt-1">
                        <button onClick={onSubmitHandler} className="begorah-bg-blue xui-bdr-rad-2 xui-btn xui-px-3 xui-w-fluid-100">Contact</button>
                    </div>
                </div>
                {errorMessage && <p className="xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1" style={{ color: 'red' }}>{errorMessage}</p>}
                <p className="xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1">Our e-learning solutions cater to a diverse range of industries, including but not limited to:</p>
            </div>
        </section>
    );
}
