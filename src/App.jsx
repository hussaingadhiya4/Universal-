import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Feature from './components/Feature';
import Products from './components/Products';
import Process from './components/Process';
import Split from './components/Split';
import Regions from './components/Regions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import websiteData from '../website.json';
import { images } from './utils/images';

const componentMap = {
  hero: Hero,
  stats: Stats,
  feature: Feature,
  products: Products,
  process: Process,
  split: Split,
  regions: Regions,
  testimonials: Testimonials,
  contact: Contact,
  cta: CTA,
  footer: Footer
};

function replaceImagePlaceholders(props) {
  const propsString = JSON.stringify(props);
  return JSON.parse(
    propsString
      .replace(/PLACEHOLDER_HERO_IMAGE_URL/g, images.hero)
      .replace(/PLACEHOLDER_WHY_IMAGE_URL/g, images.why)
      .replace(/PLACEHOLDER_ELECTRONICS_IMAGE/g, images.electronics)
      .replace(/PLACEHOLDER_TEXTILES_IMAGE/g, images.textiles)
      .replace(/PLACEHOLDER_INDUSTRIAL_IMAGE/g, images.industrial)
      .replace(/PLACEHOLDER_AGRO_IMAGE/g, images.agro)
      .replace(/PLACEHOLDER_CONSUMER_IMAGE/g, images.consumer)
      .replace(/PLACEHOLDER_MATERIALS_IMAGE/g, images.materials)
      .replace(/PLACEHOLDER_TESTIMONIAL_PHOTO_1/g, images.testimonials.person1)
      .replace(/PLACEHOLDER_TESTIMONIAL_PHOTO_2/g, images.testimonials.person2)
      .replace(/PLACEHOLDER_TESTIMONIAL_PHOTO_3/g, images.testimonials.person3)
  );
}

function App() {
  const homePage = websiteData.pages.find(page => page.id === 'home');

  return (
    <>
      <Navigation />
      <main>
        {homePage.sections.map((section) => {
          const Component = componentMap[section.type];
          const updatedProps = replaceImagePlaceholders(section.props);
          return Component ? <Component key={section.id} props={updatedProps} /> : null;
        })}
      </main>
    </>
  );
}

export default App;
