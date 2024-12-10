import NewLaunchesHero from "../../Elements/NewLaunhes/LaunchesHero"
import NewLaunchesProducts from "../../Elements/NewLaunhes/LaunchProduct"
import LayoutEl from "../../Shared/Layout"


const NewLaunches=()=>{
    const display=(
        <>
         <LayoutEl>
           <NewLaunchesHero/>
           <NewLaunchesProducts/>
         </LayoutEl>
        </>
    )
    return display
}
export default NewLaunches