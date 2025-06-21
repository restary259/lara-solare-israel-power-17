
import { motion } from "framer-motion";

interface ProductImageProps {
  className?: string;
  alt?: string;
}

const ProductImage = ({ className = "", alt = "200L All-Stainless Steel Solar Water Heater" }: ProductImageProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/lovable-uploads/d4433ab1-eace-4368-b4be-f775e435b56a.png" 
        alt={alt}
        className="w-full h-full object-contain rounded-lg shadow-lg"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg pointer-events-none"></div>
    </motion.div>
  );
};

export default ProductImage;
