import { motion } from "framer-motion";

function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;