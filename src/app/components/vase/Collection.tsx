import { motion } from 'motion/react';
import vase1Img from '@/assets/vase1.png';
import vase2Img from '@/assets/vase 2.png';
import vase3Img from '@/assets/vase 3.png';
import vase4Img from '@/assets/vase 4.png';
import vase5Img from '@/assets/vase 5.png';
import vase6Img from '@/assets/vase 6.png';
import vase7Img from '@/assets/vase 7.png';
import vase8Img from '@/assets/vase 8.png';

const vases = [
  { id: 1, name: 'Vase I', price: '$250', image: vase1Img },
  { id: 2, name: 'Vase II', price: '$320', image: vase2Img },
  { id: 3, name: 'Vase III', price: '$280', image: vase3Img },
  { id: 4, name: 'Vase IV', price: '$450', image: vase4Img },
  { id: 5, name: 'Vase V', price: '$380', image: vase5Img },
  { id: 6, name: 'Vase VI', price: '$290', image: vase6Img },
  { id: 7, name: 'Vase VII', price: '$410', image: vase7Img },
  { id: 8, name: 'Vase VIII', price: '$340', image: vase8Img },
];

export function Collection() {
  return (
    <section id="collection" className="py-16 md:py-24 bg-[#1A0F0A] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-['Cormorant_Garamond'] font-bold text-4xl md:text-5xl text-[#FDFBF7] text-center mb-14 tracking-wide"
        >
          The Collection
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {vases.map((vase, index) => (
            <motion.div
              key={vase.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-[3/4] overflow-hidden relative border border-transparent transition-all duration-500 group-hover:border-[#C5A059]/30 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                <img
                  src={vase.image}
                  alt={vase.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="mt-4 text-center w-full flex flex-col items-center space-y-2">
                <h3 className="font-['Cormorant_Garamond'] font-bold text-xl md:text-2xl text-[#FDFBF7]">{vase.name}</h3>
                <p className="font-['Montserrat'] text-[#C5A059] text-xs tracking-[0.2em] font-light">{vase.price}</p>
                
                <button 
                  className="mt-2 px-6 py-2 border border-[#C5A059] text-[#C5A059] font-['Montserrat'] text-[10px] uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#C5A059] hover:to-[#E8D0A9] hover:text-[#1A0F0A] transition-all duration-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transform"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
