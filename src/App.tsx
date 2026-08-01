import { usePreloader } from './hooks/usePreloader';
import { useCursorDot } from './hooks/useCursorDot';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { Launches } from './components/Launches';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const TICKER_ITEMS = [
  'BRAND STORIES',
  'SHORT-FORM',
  'MOTION DIRECTION',
  'KINETIC TYPOGRAPHY',
  'STORYTELLING',
  'CAPCUT',
  'DAVINCI RESOLVE',
] as const;

const TICKER_ALT_ITEMS = [
  'LAUNCH READY',
  'ON BRIEF',
  'ON TIME',
  'FRAME PERFECT',
  'BUILT AFTER DARK',
  '6IX AFTERDARK',
] as const;

function App() {
  const { pct, done, mounted } = usePreloader();
  useCursorDot();

  return (
    <>
      {mounted && <Preloader pct={pct} done={done} />}
      <Header />
      <main id="top">
        <Hero />
        <Ticker items={TICKER_ITEMS} />
        <Manifesto />
        <Services />
        <FeaturedWork />
        <Launches />
        <Ticker items={TICKER_ALT_ITEMS} reverse alt />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
