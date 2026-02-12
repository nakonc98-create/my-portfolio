import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";
import { data as headerDataIt } from "./contents/headerIt";
import { data as aboutDataIt } from "./contents/aboutIt";
import { data as skillDataIt } from "./contents/skillIt";

function AppIt() {
  return (
    <div className="bg-black md:bg-blue-950/30">
      <div className="mx-auto max-w-6xl gap-y-5 grid md:grid-cols-[30%_70%]">
        <LeftSection headerData={headerDataIt} />
        <RightSection aboutData={aboutDataIt} skillData={skillDataIt} />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default AppIt;
