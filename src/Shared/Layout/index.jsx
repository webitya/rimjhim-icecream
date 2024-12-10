import Footer from "../Footer"
import Navbar from "../Navbar"


const LayoutEl=(data)=>{
    const display=(
        <>
           <Navbar/>
           {data.children}
           <Footer/>
        </>
    )
    return display
}
export default LayoutEl