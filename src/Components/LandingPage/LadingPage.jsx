import Category from "../Categories/Categories";
import HeroPage from "../HeroPage/HeroPage";
import NewArrival from "../NewArrival/NewArrival";
import BeforeFooter from "../Sections/BeforeFooter";
import BestSeller from "../Sections/BestSeller";
import Blogs from "../Sections/Blogs";
import Newsletter from "../Sections/NewsLetter";
import Shippng from "../Sections/Shipping";

function LandingPage() {
    return ( 
        <>
        <HeroPage />
        <Category />
        <NewArrival />
        <BeforeFooter />
        <BestSeller />
        <Shippng />
        <Blogs />
        <Newsletter />
        </>
     );
}

export default LandingPage;