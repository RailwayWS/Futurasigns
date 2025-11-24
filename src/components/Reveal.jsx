import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal({ children, shouldAnimate = true }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (shouldAnimate && isInView) {
            mainControls.start("visible");
        }
    }, [shouldAnimate, isInView, mainControls]);

    return (
        <div ref={ref} className="reveal-container">
            <motion.div
                className="reveal-content"
                variants={{
                    hidden: { opacity: 0, y: 150 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export { Reveal };
export default Reveal;
