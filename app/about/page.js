import Navbar from "@/Components/Navbar/Navbar"
import MainAboutComponent from "@/Components/about/mainComponent"
import Footer from "@/Components/Home/footer"


export const metadata = {
  title: "About Me",
  description:
    "Learn about Jawad Khan, a full-stack web developer passionate about building modern web applications with React, Next.js, Node.js, and MongoDB.",
};

const About = () => {
    return(
     <div>
        <Navbar/>
        <MainAboutComponent/>
        <Footer/>
    </div>
    )
}

export default About;