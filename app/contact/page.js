import Navbar from "@/Components/Navbar/Navbar"
import MainContactComponent from "@/Components/contact/mainComponent"
import Footer from "@/Components/Home/footer"


export const metadata = {
  title: "Contact Me",
  description:
    "Contact Jawad Khan for web development projects, freelance opportunities, and collaborations involving modern full-stack web technologies.",
};

const Contact = () => {
    return(
     <div>
        <Navbar/>
       <MainContactComponent/>
        <Footer/>
        
    </div>
    )
}

export default Contact;