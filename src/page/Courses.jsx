import CourseCategories from "../components/courses/CourseCategories";
import Header from "../components/courses/Header";
import RecentCourses from "../components/courses/RecentCourses";

export default function Courses(){
    return(
        <>
          <Header />
          <CourseCategories />
          <RecentCourses />
        </>
    )
}