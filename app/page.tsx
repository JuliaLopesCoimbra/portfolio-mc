import Header from './components/Header';
import Hero from './pages/Hero';
import SectionPain from './pages/SectionPain';
import CompareCard from './pages/CompareCard';
import SectionHow from './pages/SectionHow';
import VideoCard from './pages/VideoCard';
import SectionComparison from './pages/SectionComparision';
import SectionBonus from './pages/SectionBonus';
import SectionPlans from './pages/SectionPlans';
import SectionAboutUs from './pages/SectionAboutUs';
import SectionFAQ from './pages/SectionFaq';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
       <Header />
    <main className="pt-0">
       <Hero />
       <SectionPain />
       <CompareCard />
       <SectionHow />
       <VideoCard />
       <SectionComparison />
       <SectionBonus />
        <SectionPlans />
        <SectionAboutUs />
        <SectionFAQ />
        <Footer />
      </main>
    </>
  );
}

//borrado no hero
//deixar a parte bonus mais chamativa, ta mt morto
