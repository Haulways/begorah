import BlogSection from "../components/about/BlogSection";
import Header from "../components/about/Header";
import Section2 from "../components/about/Section2";
import Section3 from "../components/about/Section3";
import Section4 from "../components/about/Section4";

export default function About(){
    return(
        <>
          <Header />
          <Section2 />
          <Section3 />
          <Section4 />
          <BlogSection />
        </>
    )
}