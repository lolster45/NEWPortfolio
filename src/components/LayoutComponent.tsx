// components/Layout.tsx
import { motion } from 'framer-motion';

const layoutVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
};

const LayoutComponent = ({ children }: {children: any}) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={layoutVariants}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default LayoutComponent;
