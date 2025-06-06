import { motion } from 'framer-motion';

const directionOffsets = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

const FadeInSection = ({
  children,
  direction = 'up',
  duration = 0.8,
  delay = 0,
}) => {
  const offset = directionOffsets[direction] || { x: 0, y: 40 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;