import HeroSection from "../components/Main/HeroSection"
import ImproveSkills from "../components/Main/ImproveSkills"
import QuoteSections from '../components/Main/QuoteSections';
import RecipeSection from '../components/Main/RecipeSection';

export default function Main() {
    return(
        <div>
            <HeroSection/>
            <ImproveSkills/>
            <QuoteSections/>
            <RecipeSection/>
        </div>
    )
}