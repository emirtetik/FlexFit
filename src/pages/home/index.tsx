import SEO from "../../components/Seo";
import Hero from "./_components/hero";
import SectionOne from "./_components/section/sectionOne";

const HomePage = () => {
  return (
    <div>
      <SEO
        title="FlexFit"
        description="Gücünü esnekliğe dönüştür."
        url="http://localhost:5173"
      />
      <Hero />
      <SectionOne />
    </div>
  );
};

export default HomePage;
