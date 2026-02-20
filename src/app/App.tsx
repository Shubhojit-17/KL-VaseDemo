import { Navbar } from './components/vase/Navbar';
import { Hero } from './components/vase/Hero';
import { Divider } from './components/vase/Divider';
import { Collection } from './components/vase/Collection';
import { Story } from './components/vase/Story';
import { Craftsmanship } from './components/vase/Craftsmanship';
import { ShopPreview } from './components/vase/ShopPreview';
import { Contact } from './components/vase/Contact';

export default function App() {
  return (
    <div className="bg-[#1A0F0A] min-h-screen text-[#FDFBF7] selection:bg-[#C5A059] selection:text-[#1A0F0A] overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Divider />
      <Collection />
      <Story />
      <Craftsmanship />
      <ShopPreview />
      <Contact />
    </div>
  );
}
