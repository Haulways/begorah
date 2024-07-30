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
            heading: "Manfufacturing and Engineering",
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
            <section id="about" className="xui-pt-3 xui-pb-3-half">
                <CourseScroller animateClass="animate1" text={text} speed={50000} />
                <CourseScroller animateClass="animate2" text={text2} speed={50000} />
                <CourseScroller animateClass="animate1" text={text3} speed={50000} />
            </section>

    
        </>
    )
}