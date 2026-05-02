import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FDCB02]/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing Lightning Bolt */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            filter: ["drop-shadow(0px 0px 10px rgba(253, 203, 2, 0.5))", "drop-shadow(0px 0px 30px rgba(253, 203, 2, 1))", "drop-shadow(0px 0px 10px rgba(253, 203, 2, 0.5))"]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Zap className="w-20 h-20 text-[#FDCB02] fill-[#FDCB02]" />
        </motion.div>

        {/* Logo or Text */}
        <motion.img 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          src={logo} 
          alt="Burak Elektrik" 
          className="h-12 md:h-16 mb-8 object-contain"
        />

        {/* Loading Bar Container */}
        <div className="w-48 md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
          {/* Animated fill line */}
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            // This 2 second duration controls how fast the bar fills up
            transition={{ duration: 2, ease: "circOut" }}
            className="h-full bg-[#FDCB02] shadow-[0_0_10px_#FDCB02]"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-[#FDCB02] text-xs font-bold tracking-widest uppercase"
        >
          Sistem Yükleniyor...
        </motion.p>
      </div>
    </motion.div>
  );
}