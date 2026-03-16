import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";
import { data as headerDataDev } from "./contents/headerDev";
import { data as aboutDataDev } from "./contents/aboutDev";
import { data as skillDataDev } from "./contents/skillDev";

function AppDev() {
  return (
    <div className="bg-black md:bg-blue-950/30">
      <div className="mx-auto w-full max-w-7xl px-4 gap-y-5 grid md:grid-cols-[1fr_2.5fr]">
        <LeftSection headerData={headerDataDev} />
        <RightSection aboutData={aboutDataDev} skillData={skillDataDev} />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default AppDev;
