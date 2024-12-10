
import HomeAbout from "../../Elements/Homepgae/HomeAbout"
import HomeConesSection from "../../Elements/Homepgae/HomeCones"
import HomeCupsSection from "../../Elements/Homepgae/HomeCups"
// import HomePage from "../../Elements/Homepgae/HomeHero"
import HeroSection from "../../Elements/Homepgae/HomeHero2"
// import MobileProductCarousel from "../../Elements/Homepgae/HomeCones"
// import HomeProductSection from "../../Elements/Homepgae/HomeProduct"
import HomeSticks from "../../Elements/Homepgae/HomeSticks"
import HomeValues from "../../Elements/Homepgae/HomeValues"
import LayoutEl from "../../Shared/Layout"



const Home=()=>{
    const display=(
        <>
            <LayoutEl>
                <HeroSection/>
                {/* <HomePage/> */}
                <div className="py-10" style={{ 
  background: "linear-gradient(135deg, #FDE1D9 0%, #FAD7E1 30%, #CFF5E7 70%, #FDFDCB 100%)"
}}>
  <HomeConesSection />
  <HomeSticks />
  <HomeCupsSection />
</div>


                {/* <HomeProductSection/> */}
                <HomeAbout/>
                <HomeValues/>
            </LayoutEl>
        </>
    )
    return display
}
export default Home