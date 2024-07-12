import { Link,  } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import GrascopeLogo from "../assets/images/grascope-logo.png";
import { Send } from "@carbon/icons-react";

export default function Footer(){

    return(
        <>
            <section className="xui-pt-3 xui-pb-5 xui-container begorah-bg-blue-iii xui-text-black footer">
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-2 xui-mt-3'>
                    <div>
                        <img className="xui-mt-1 xui-img-120" src={Logo} alt="" />
                        <p className='xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>Begorah Ltd is a leading e-learning content design company dedicated to creating engaging, interactive, and effective online educational materials.</p>
                        <div className="xui-mt-1 xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                            <Link to='/' target="_blank">
                                <svg width="20" height="20" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.2727 3.17747C26.2689 3.65474 25.1869 3.96838 24.0657 4.11838C25.2129 3.39565 26.0994 2.25019 26.5166 0.872922C25.4346 1.55474 24.2352 2.03201 22.9706 2.30474C21.9407 1.13201 20.4937 0.450195 18.851 0.450195C15.7874 0.450195 13.2844 3.06838 13.2844 6.30019C13.2844 6.76383 13.3365 7.21383 13.4278 7.63656C8.78672 7.3911 4.65409 5.05928 1.90335 1.52747C1.421 2.38656 1.14723 3.39565 1.14723 4.45929C1.14723 6.4911 2.12498 8.2911 3.63723 9.31383C2.71163 9.31383 1.85121 9.0411 1.09508 8.63201V8.67292C1.09508 11.5093 3.02451 13.882 5.5797 14.4138C4.75934 14.6487 3.89809 14.6813 3.06362 14.5093C3.4177 15.6718 4.11116 16.6889 5.04652 17.4178C5.98187 18.1467 7.11209 18.5507 8.27829 18.5729C6.30145 20.2099 3.85103 21.0947 1.32974 21.082C0.886494 21.082 0.443247 21.0547 0 21.0002C2.47697 22.6638 5.42326 23.632 8.57813 23.632C18.851 23.632 24.4959 14.7138 24.4959 6.98201C24.4959 6.72292 24.4959 6.47747 24.4829 6.21838C25.578 5.40019 26.5166 4.36383 27.2727 3.17747Z" fill="#000760"/>
                                </svg>
                            </Link>
                            <Link to='/' target="_blank">
                                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5455 0.107422C5.94894 0.107422 0.613708 5.47674 0.613708 12.1074C0.613708 18.0904 4.97734 23.0676 10.6876 23.9711V15.5847H7.65348V12.1074H10.6876V9.46538C10.6876 6.44833 12.4773 4.79492 15.1876 4.79492C16.5001 4.79492 17.8637 5.03356 17.8637 5.03356V7.98242H16.3637C14.8808 7.98242 14.4205 8.90288 14.4205 9.85742V12.1074H17.7273L17.1989 15.5847H14.4205V23.9711C20.1308 23.0676 24.4944 18.1074 24.4944 12.1074C24.4944 5.47674 19.1592 0.107422 12.5626 0.107422H12.5455Z" fill="#000760"/>
                                </svg>
                            </Link>
                            <Link to='/' target="_blank">
                                <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.93636 1.44988H18.2455C21.7962 1.44988 24.6818 4.33553 24.6818 7.88625V18.1953C24.6818 19.9024 24.0037 21.5395 22.7967 22.7465C21.5896 23.9536 19.9525 24.6317 18.2455 24.6317H7.93636C4.38564 24.6317 1.49999 21.7461 1.49999 18.1953V7.88625C1.49999 6.17922 2.17811 4.5421 3.38516 3.33505C4.59222 2.128 6.22933 1.44988 7.93636 1.44988ZM7.69091 2.54079C6.3383 2.54079 5.0411 3.07811 4.08466 4.03455C3.12823 4.99098 2.5909 6.28819 2.5909 7.64079V18.4408C2.5909 21.2596 4.87208 23.5408 7.69091 23.5408H18.4909C19.8435 23.5408 21.1407 23.0035 22.0972 22.047C23.0536 21.0906 23.5909 19.7934 23.5909 18.4408V7.64079C23.5909 4.82196 21.3097 2.54079 18.4909 2.54079H7.69091ZM19.5341 5.74534C19.7601 5.74534 19.9769 5.83513 20.1367 5.99496L20.6189 5.51285L20.1367 5.99497C20.2966 6.1548 20.3864 6.37157 20.3864 6.59761C20.3864 6.82365 20.2966 7.04043 20.1367 7.20026C19.9769 7.36009 19.7601 7.44988 19.5341 7.44988C19.3081 7.44988 19.0913 7.36009 18.9314 7.20026C18.7716 7.04043 18.6818 6.82365 18.6818 6.59761C18.6818 6.37158 18.7716 6.1548 18.9314 5.99497L18.4493 5.51285L18.9314 5.99496C19.0913 5.83513 19.3081 5.74534 19.5341 5.74534ZM13.0909 7.58625C14.5375 7.58625 15.9249 8.16092 16.9479 9.18385C17.9708 10.2068 18.5455 11.5942 18.5455 13.0408C18.5455 14.4874 17.9708 15.8748 16.9479 16.8977C15.9249 17.9207 14.5375 18.4953 13.0909 18.4953C11.6443 18.4953 10.2569 17.9207 9.23396 16.8977C8.21104 15.8748 7.63636 14.4874 7.63636 13.0408C7.63636 11.5942 8.21104 10.2068 9.23396 9.18385C10.2569 8.16092 11.6443 7.58625 13.0909 7.58625ZM13.0909 8.67716C11.9336 8.67716 10.8237 9.1369 10.0054 9.95524C9.18701 10.7736 8.72727 11.8835 8.72727 13.0408C8.72727 14.1981 9.18701 15.308 10.0054 16.1264C10.8237 16.9447 11.9336 17.4044 13.0909 17.4044C14.2482 17.4044 15.3581 16.9447 16.1765 16.1264C16.9948 15.308 17.4545 14.1981 17.4545 13.0408C17.4545 11.8835 16.9948 10.7736 16.1765 9.95524C15.3581 9.1369 14.2482 8.67716 13.0909 8.67716Z" stroke="#000760" stroke-width="1.36364"/>
                                </svg>
                            </Link>
                            <Link to='/' target="_blank">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.75 0.790039C21.4131 0.790039 22.0489 1.05343 22.5178 1.52227C22.9866 1.99111 23.25 2.627 23.25 3.29004V20.79C23.25 21.4531 22.9866 22.089 22.5178 22.5578C22.0489 23.0266 21.4131 23.29 20.75 23.29H3.25003C2.58699 23.29 1.9511 23.0266 1.48226 22.5578C1.01342 22.089 0.750031 21.4531 0.750031 20.79V3.29004C0.750031 2.627 1.01342 1.99111 1.48226 1.52227C1.9511 1.05343 2.58699 0.790039 3.25003 0.790039H20.75ZM20.125 20.165V13.54C20.125 12.4593 19.6957 11.4228 18.9315 10.6586C18.1673 9.89436 17.1308 9.46504 16.05 9.46504C14.9875 9.46504 13.75 10.115 13.15 11.09V9.70254H9.66253V20.165H13.15V14.0025C13.15 13.04 13.925 12.2525 14.8875 12.2525C15.3517 12.2525 15.7968 12.4369 16.125 12.7651C16.4531 13.0933 16.6375 13.5384 16.6375 14.0025V20.165H20.125ZM5.60003 7.74004C6.15698 7.74004 6.69113 7.51879 7.08495 7.12496C7.47878 6.73113 7.70003 6.19699 7.70003 5.64004C7.70003 4.47754 6.76253 3.52754 5.60003 3.52754C5.03976 3.52754 4.50244 3.7501 4.10627 4.14627C3.7101 4.54244 3.48753 5.07977 3.48753 5.64004C3.48753 6.80254 4.43753 7.74004 5.60003 7.74004ZM7.33753 20.165V9.70254H3.87503V20.165H7.33753Z" fill="#000760"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className='xui-font-sz-100 bold-font xui-font-w-600 begorah-text-blue' style={{"fontWeight": "600"}}>Quick Links</p>
                        <div className="xui-my-1">
                            <Link to='/about' className="xui-font-sz-90 xui-text-black xui-text-dc-none xui-d-block xui-opacity-8">About us</Link>
                            <Link to='/' className="xui-font-sz-90 xui-text-black xui-text-dc-none xui-d-block xui-opacity-8 xui-mt-1">Contact us</Link>
                        </div>
                    </div>
                    <div>
                        <p className='xui-font-sz-100 bold-font xui-font-w-600 begorah-text-blue' style={{"fontWeight": "600"}}>Explore</p>
                        <div className="xui-my-1">
                            <Link to='/about' className="xui-font-sz-90 xui-text-black xui-text-dc-none xui-d-block xui-opacity-8">Privacy Policy</Link>
                            <Link to='/' className="xui-font-sz-90 xui-text-black xui-text-dc-none xui-d-block xui-opacity-8 xui-mt-1">Contact us</Link>
                        </div>
                    </div>
                    <div>
                        <div className="xui-d-flex xui-flex-ai-center">
                            <p className='xui-font-sz-100 bold-font xui-font-w-600 begorah-text-blue' style={{"fontWeight": "600"}}>Newsletter</p>
                            <p className='xui-font-sz-80 bold-font xui-font-w-600 begorah-text-blue xui-pl-2' style={{"width": "calc(100% - 110px)"}}>&copy; 2024 Powered by <span style={{"fontWeight": "600"}} className="bold-font">Grascope</span></p>

                        </div>
                        <div className="xui-my-1">
                            <form>
                                <div className="xui-d-flex xui-flex-jc-space-between xui-w-fluid-100 xui-mt-1">
                                    <input style={{"outline": "none", "border": "none","width": "calc(100% - 60px)"}} className="xui-pl-1 xui-bdr-rad-2 begorah-bg-blue xui-font-sz-90 xui-text-white" type="text" placeholder="Email address" />
                                    <span className="xui-w-40 xui-h-40 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center begorah-bg-blue">
                                        <Send color='#FFF' />
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
                <p className="xui-mt-2-half xui-font-sz-90 xui-text-center begorah-text-blue">BEGORAH LTD - 1275605</p>
            </section>
    
        </>
    )
}