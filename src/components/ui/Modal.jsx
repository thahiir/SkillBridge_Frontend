import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
    open,
    onClose,
    children
}) => {

    return (

        <AnimatePresence>

            {

                open && (

                    <div

                        className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"

                        onClick={onClose}

                    >

                        <motion.div

                            initial={{

                                opacity: 0,

                                scale: .9

                            }}

                            animate={{

                                opacity: 1,

                                scale: 1

                            }}

                            exit={{

                                opacity: 0,

                                scale: .9

                            }}

                            onClick={(e) => e.stopPropagation()}

                            className="bg-white rounded-3xl p-8 w-full max-w-lg"

                        >

                            {children}

                        </motion.div>

                    </div>

                )

            }

        </AnimatePresence>

    );

};

export default Modal;