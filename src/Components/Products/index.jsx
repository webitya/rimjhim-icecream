import ProductHero from "../../Elements/ProductEl/ProductHero"
import ProductSection from "../../Elements/ProductEl/ProductSec"
import TabbedGallery from "../../Elements/ProductEl/ProductTabs"
import LayoutEl from "../../Shared/Layout"



const Products=()=>{
    const display=(
        <>
           <LayoutEl>
              <ProductHero/>
              <TabbedGallery/>
              <ProductSection/>
           </LayoutEl>
        </>
    )
    return display
}
export default Products