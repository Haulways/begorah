import CourseScroller from "../CourseScroller";

export default function CourseCategories(){
    const text = [
        {
            heading: "Corporate Organizations",
            students: "View tools"
        },
        {
            heading: "Educational Institutions",
            students: "View tools"
        },
        {
            heading: "Government Agencies",
            students: "View tools"
        }
        
      ].map((txt) => ({
        txt
      }));
    const text2 = [
        {
            heading: "Non-profit Organizations",
            students: "View tools"
        },
        {
            heading: "Manufacturing and Engineering",
            students: "View tools"
        },
        {
            heading: "Retail and Customer Care",
            students: "View tools"
        }
      ].map((txt) => ({
        txt
      }));
    const text3 = [
        {
            heading: "Healthcare and Hospitality",
            students: "View tools"
        },
        {
            heading: "Technology and Software",
            students: "View tools"
        },
        {
            heading: "Financial Services",
            students: "View tools"
        }
        
      ].map((txt) => ({
        txt
      }));

    return(
        <>
            <section id="about" className="xui-pt-3 xui-pb-3-half xui-container">
                <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1">
                    {text.map(({ id, txt }) => (
                        <div className="bizr-waitlist-scroll-item" >
                            <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                                <h3 className="xui-font-sz-100 bold-font">{txt.heading}</h3>
                                <span>
                                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2718 11.544C23.4704 11.5441 23.6608 11.623 23.8013 11.7635C23.9417 11.9039 24.0207 12.0944 24.0208 12.293L24.0208 20.773C24.0244 20.8736 24.0076 20.9739 23.9716 21.0679C23.9355 21.1619 23.8809 21.2476 23.811 21.3201C23.7411 21.3925 23.6573 21.4501 23.5647 21.4894C23.472 21.5287 23.3724 21.549 23.2718 21.549C23.1711 21.549 23.0715 21.5287 22.9788 21.4894C22.8862 21.4501 22.8024 21.3925 22.7325 21.3201C22.6626 21.2476 22.608 21.1619 22.5719 21.0679C22.5359 20.9739 22.5191 20.8736 22.5227 20.773V14.1021L12.4951 24.1297C12.3545 24.2703 12.1639 24.3492 11.9651 24.3492C11.7663 24.3492 11.5756 24.2703 11.4351 24.1297C11.2945 23.9892 11.2155 23.7985 11.2155 23.5997C11.2155 23.4009 11.2945 23.2103 11.4351 23.0697L21.4627 13.0421H14.7917C14.6912 13.0456 14.5909 13.0289 14.4969 12.9928C14.4029 12.9568 14.3172 12.9022 14.2447 12.8323C14.1723 12.7624 14.1147 12.6786 14.0754 12.586C14.036 12.4933 14.0158 12.3937 14.0158 12.293C14.0158 12.1924 14.036 12.0927 14.0754 12.0001C14.1147 11.9074 14.1723 11.8237 14.2447 11.7538C14.3172 11.6838 14.4029 11.6292 14.4969 11.5932C14.5909 11.5571 14.6911 11.5404 14.7917 11.544L23.2718 11.544Z" fill="#000760"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1 xui-mt-1-half">
                    {text2.map(({ id, txt }) => (
                        <div className="bizr-waitlist-scroll-item" >
                            <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                                <h3 className="xui-font-sz-100 bold-font">{txt.heading}</h3>
                                <span>
                                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2718 11.544C23.4704 11.5441 23.6608 11.623 23.8013 11.7635C23.9417 11.9039 24.0207 12.0944 24.0208 12.293L24.0208 20.773C24.0244 20.8736 24.0076 20.9739 23.9716 21.0679C23.9355 21.1619 23.8809 21.2476 23.811 21.3201C23.7411 21.3925 23.6573 21.4501 23.5647 21.4894C23.472 21.5287 23.3724 21.549 23.2718 21.549C23.1711 21.549 23.0715 21.5287 22.9788 21.4894C22.8862 21.4501 22.8024 21.3925 22.7325 21.3201C22.6626 21.2476 22.608 21.1619 22.5719 21.0679C22.5359 20.9739 22.5191 20.8736 22.5227 20.773V14.1021L12.4951 24.1297C12.3545 24.2703 12.1639 24.3492 11.9651 24.3492C11.7663 24.3492 11.5756 24.2703 11.4351 24.1297C11.2945 23.9892 11.2155 23.7985 11.2155 23.5997C11.2155 23.4009 11.2945 23.2103 11.4351 23.0697L21.4627 13.0421H14.7917C14.6912 13.0456 14.5909 13.0289 14.4969 12.9928C14.4029 12.9568 14.3172 12.9022 14.2447 12.8323C14.1723 12.7624 14.1147 12.6786 14.0754 12.586C14.036 12.4933 14.0158 12.3937 14.0158 12.293C14.0158 12.1924 14.036 12.0927 14.0754 12.0001C14.1147 11.9074 14.1723 11.8237 14.2447 11.7538C14.3172 11.6838 14.4029 11.6292 14.4969 11.5932C14.5909 11.5571 14.6911 11.5404 14.7917 11.544L23.2718 11.544Z" fill="#000760"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1 xui-mt-1-half">
                    {text3.map(({ id, txt }) => (
                        <div className="bizr-waitlist-scroll-item" >
                            <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
                                <h3 className="xui-font-sz-100 bold-font">{txt.heading}</h3>
                                <span>
                                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2718 11.544C23.4704 11.5441 23.6608 11.623 23.8013 11.7635C23.9417 11.9039 24.0207 12.0944 24.0208 12.293L24.0208 20.773C24.0244 20.8736 24.0076 20.9739 23.9716 21.0679C23.9355 21.1619 23.8809 21.2476 23.811 21.3201C23.7411 21.3925 23.6573 21.4501 23.5647 21.4894C23.472 21.5287 23.3724 21.549 23.2718 21.549C23.1711 21.549 23.0715 21.5287 22.9788 21.4894C22.8862 21.4501 22.8024 21.3925 22.7325 21.3201C22.6626 21.2476 22.608 21.1619 22.5719 21.0679C22.5359 20.9739 22.5191 20.8736 22.5227 20.773V14.1021L12.4951 24.1297C12.3545 24.2703 12.1639 24.3492 11.9651 24.3492C11.7663 24.3492 11.5756 24.2703 11.4351 24.1297C11.2945 23.9892 11.2155 23.7985 11.2155 23.5997C11.2155 23.4009 11.2945 23.2103 11.4351 23.0697L21.4627 13.0421H14.7917C14.6912 13.0456 14.5909 13.0289 14.4969 12.9928C14.4029 12.9568 14.3172 12.9022 14.2447 12.8323C14.1723 12.7624 14.1147 12.6786 14.0754 12.586C14.036 12.4933 14.0158 12.3937 14.0158 12.293C14.0158 12.1924 14.036 12.0927 14.0754 12.0001C14.1147 11.9074 14.1723 11.8237 14.2447 11.7538C14.3172 11.6838 14.4029 11.6292 14.4969 11.5932C14.5909 11.5571 14.6911 11.5404 14.7917 11.544L23.2718 11.544Z" fill="#000760"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

    
        </>
    )
}