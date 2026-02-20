import { motion } from 'motion/react';
import vase1Img from '@/assets/vase1.png';
import vase2Img from '@/assets/vase 2.png';
import vase3Img from '@/assets/vase 3.png';
import vase4Img from '@/assets/vase 4.png';

const vases = [
  { id: 1, name: 'Vase I', price: '$250', image: vase1Img },
  { id: 2, name: 'Vase II', price: '$320', image: vase2Img },
  { id: 3, name: 'Vase III', price: '$280', image: vase3Img },
  { id: 4, name: 'Vase IV', price: '$450', image: vase4Img },
];

export function ShopPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#1A0F0A] px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#FDFBF7] text-center mb-14"
        >
          Explore the Atelier
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mb-14">
          {vases.map((vase, index) => (
            <motion.div
              key={vase.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full overflow-hidden aspect-[3/4] mb-4 relative border border-transparent transition-all duration-500 group-hover:border-[#C5A059]/30">
                 <div className="absolute inset-0 bg-[#1A0F0A]/20 group-hover:bg-transparent transition-all z-10 duration-500" />
                 <img src={vase.image} alt={vase.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
              </div>
              <h3 className="text-center font-['Cormorant_Garamond'] text-lg md:text-xl text-[#FDFBF7] group-hover:text-[#C5A059] transition-colors duration-300">{vase.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.button 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
           className="px-10 py-3 border border-[#C5A059] text-[#C5A059] font-['Montserrat'] tracking-[0.2em] uppercase text-xs hover:bg-gradient-to-r hover:from-[#C5A059] hover:to-[#E8D0A9] hover:text-[#1A0F0A] transition-all duration-400 transform hover:scale-105"
        >
          View Full Collection
        </motion.button>
      </div>
    </section>
  );
}
