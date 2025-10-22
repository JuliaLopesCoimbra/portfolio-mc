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
      <main className="pt-16">
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

//tirar os avatares e colocar outros 
//pegar fotos dignas do site para colocar no bonus e como funciona a consultoria
//preciso de relatos por textos e fotos das pessoas para colocar nos icones(avatares)
//colocar fadeIn nas seções

//header no celular
//antes e depois esta ficando em cima das fotos no celular