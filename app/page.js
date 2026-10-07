import Navbar from "@/Components/Navbar/Navbar"
import Hero from "@/Components/Home/hero"
import SelectedWork from "@/Components/Home/selectedWork"
import Capabilities from "@/Components/Home/capabilities"
import Footer from "@/Components/Home/footer"

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