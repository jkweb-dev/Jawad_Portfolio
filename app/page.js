import Navbar from "@/Components/Navbar/Navbar"
import Hero from "@/Components/Home/hero"
import SelectedWork from "@/Components/Home/selectedWork"
import Capabilities from "@/Components/Home/capabilities"
import Footer from "@/Components/Home/footer"


export const metadata = {
  title: "Jawad Khan | Full-Stack Web Developer",
  description:
    "Jawad Khan is a full-stack web developer specializing in React, Next.js, Node.js, Express, and MongoDB. Explore projects and web development experience.",
};

const Home = () => {

    return <div>
        <Navbar/>
        <Hero/>
        <SelectedWork/>
        <Capabilities/>
        <Footer/>
    </div>
}

export default Home