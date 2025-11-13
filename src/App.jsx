import Hero from './components/Hero';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Split from './components/Split';
import Grid from './components/Grid';
import Media from './components/Media';
import Carousel from './components/Carousel';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import websiteData from '../website.json';
import { images } from './utils/images';

const componentMap = {
  hero: Hero,
  feature: Feature,
  cards: Cards,
  split: Split,
  grid: Grid,
  media: Media,
  carousel: Carousel,
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
      .replace(/PLACEHOLDER_WORLD_MAP_IMAGE_URL/g, images.worldMap)
      .replace(/PLACEHOLDER_INDUSTRY_IMAGE_1/g, images.industries.electronics)
      .replace(/PLACEHOLDER_INDUSTRY_IMAGE_2/g, images.industries.textiles)
      .replace(/PLACEHOLDER_INDUSTRY_IMAGE_3/g, images.industries.agro)
      .replace(/PLACEHOLDER_INDUSTRY_IMAGE_4/g, images.industries.industrial)
      .replace(/PLACEHOLDER_TESTIMONIAL_PHOTO_1/g, images.testimonials.person1)
      .replace(/PLACEHOLDER_TESTIMONIAL_PHOTO_2/g, images.testimonials.person2)
      .replace(/PLACEHOLDER_CLIENT_LOGO_1/g, images.clientLogos[0])
      .replace(/PLACEHOLDER_CLIENT_LOGO_2/g, images.clientLogos[1])
      .replace(/PLACEHOLDER_CLIENT_LOGO_3/g, images.clientLogos[2])
      .replace(/PLACEHOLDER_CLIENT_LOGO_4/g, images.clientLogos[3])
  );
}

function App() {
  const homePage = websiteData.pages.find(page => page.id === 'home');

  return (
    <div className="app">
      {homePage.sections.map((section) => {
        const Component = componentMap[section.type];
        const updatedProps = replaceImagePlaceholders(section.props);
        return Component ? <Component key={section.id} props={updatedProps} /> : null;
      })}
    </div>
  );
}

export default App;
