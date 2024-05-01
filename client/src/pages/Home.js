import HeroSection from "../components/HeroSection"
import ImproveSkills from "../components/ImproveSkills"
import QuoteSections from '../components/QuoteSections';
import RecipeSection from '../components/RecipeSection';

export default function Home() {
    return(
        <div>
            <HeroSection/>
            <ImproveSkills/>
            <QuoteSections/>
            <RecipeSection/>
        </div>
    )
}