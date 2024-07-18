import { Search } from "@carbon/icons-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PrivacyImage from "../assets/images/privacy-image.png";
export default function PrivacyPolicy(){
    return(
        <>
            <section className="xui-pt-7 xui-pb-8 amd-light-grey-bg xui-container" id="privacy-policy">
                <div className="xui-d-flex xui-flex-ai-center xui-lg-flex-dir-row xui-flex-dir-column-reverse">
                    <div className="xui-lg-col-7 xui-col-12">
                        <h1 className="xui-lg-font-sz-300 xui-font-sz-180 xui-lg-w-fluid-80 xui-w-fluid-100 bold-font xui-font-w-600 ">Privacy Policy</h1>
                        <p className="xui-font-sz-90 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half xui-opacity-8 xui-mt-half">Begorah Ltd ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [begorah.co.uk], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
                    </div>
                    <div className="xui-lg-col-5 xui-col-12">
                        <img className="xui-img-500" src={PrivacyImage} alt="" />
                    </div>
                </div>
                
            </section>
            <section className="xui-container xui-py-3">
                <div className="xui-d-grid xui-lg-grid-col-1 xui-flex-ai-center xui-grid-col-1 xui-grid-gap-4">
                    {/* <div>
                        <p className="xui-font-sz-90 xui-opacity-6">01)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Introduction</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">Welcome to Sunflower Pantry! We are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how Sunflower Pantry collects, uses, maintains, and discloses information obtained from users (each referred to as a "User") of our Sunflower Pantry mobile application ("App"). This Privacy Policy applies to all aspects of the App and extends to cover all products and services provided by Sunflower Pantry, emphasizing our dedication to protecting your privacy across all interactions with our platform.</p>
                    </div> */}
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">01)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Information We Collect</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                        <h3 className="xui-font-sz-120  xui-mt-half">Personal Data:</h3>
                        <ul>
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Name</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Email address</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Phone number</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Company name</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Job title</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Name</li> 
                        </ul>

                        <h3 className="xui-font-sz-120  xui-mt-2">Non-Personal Data:</h3>
                        <ul>
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Browser type</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Demographic information such as age, gender, interests</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">IP address</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">Cookies (for more information, please see our Cookie Policy)</li> 
                        </ul>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">02)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">How We Use Your Information</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">We use the information we collect in the following ways:</p>
                        <ul>
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">To operate, maintain, and improve our Site and services</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">To respond to your inquiries and fulfill your requests</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">To send you marketing and promotional communications (you may opt-out at any time)</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">To personalize your experience on our Site</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">To analyze Site usage and improve our content and services</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">To protect, investigate, and deter against unauthorized or illegal activity</li> 
                        </ul>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">03)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Sharing Your Information</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">We may share your information with third parties only in the ways that are described in this Privacy Policy:</p>
                        <ul>
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">With service providers who assist us in operating our website and services</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">With our business partners for marketing and promotional purposes</li> 
                            <li className="xui-mt-1 xui-font-sz-90 xui-opacity-8">With law enforcement or regulatory agencies as required by law</li> 
                        </ul>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">04)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Security of Your Information</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">We use administrative, technical, and physical security measures to help protect your personal information. However, please be aware that no security measures are perfect or impenetrable.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">05)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Your Choices Regarding Your Information</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">You have several choices regarding the use of information on our Site:</p>

                        <h3 className="xui-font-sz-120  xui-mt-2">Opt-Out:</h3>
                        <p className="xui-mt-1 xui-font-sz-90 xui-opacity-8">You may opt-out of receiving promotional communications from us by following the instructions in those communications or by contacting us directly.</p> 
                        
                        <h3 className="xui-font-sz-120  xui-mt-2">Cookies:</h3>
                        <p className="xui-mt-1 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half">You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p> 
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">06)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Changes to This Privacy Policy</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.</p>
                    </div>
                    <div>
                        <p className="xui-font-sz-90 xui-opacity-6">08)</p>
                        <h3 className="xui-font-sz-150  xui-mt-half">Contact Us</h3>
                        <p className="xui-font-sz-90 xui-line-height-1-half xui-opacity-8 xui-mt-half">If you have any questions about this Privacy Policy, please contact us at <Link to='https://www.begorah.co.uk' target='_blank' className="begorah-text-blue xui-text-dc-none bold-font xui-font-w-500">@begorah.co.uk</Link></p>
                    </div>
                </div>
            </section>
          
    
        </>
    )
}