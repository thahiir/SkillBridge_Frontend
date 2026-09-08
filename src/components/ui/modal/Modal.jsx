import {

    AnimatePresence,

    motion,

} from "framer-motion";

import {

    useEffect,

} from "react";

import clsx from "clsx";

const Modal = ({

    isOpen,

    onClose,

    children,

    size = "md",

    closeOnOverlay = true,

}) => {

    useEffect(() => {

        const handleKeyDown = (e) => {

            if (

                e.key === "Escape"

            ) {

                onClose();

            }

        };

        if (isOpen) {

            window.addEventListener(

                "keydown",

                handleKeyDown

            );

        }

        return () =>

            window.removeEventListener(

                "keydown",

                handleKeyDown

            );

    }, [

        isOpen,

        onClose,

    ]);

    const sizes = {

        sm: "max-w-md",

        md: "max-w-2xl",

        lg: "max-w-4xl",

        xl: "max-w-6xl",

    };

    return (

        <AnimatePresence>

            {

                isOpen && (

                    <motion.div

                        initial={{

                            opacity: 0,

                        }}

                        animate={{

                            opacity: 1,

                        }}

                        exit={{

                            opacity: 0,

                        }}

                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"

                        onClick={() => {

                            if (

                                closeOnOverlay

                            )

                                onClose();

                        }}

                    >

                        <motion.div

                            initial={{

                                scale: .9,

                                opacity: 0,

                                y: 30,

                            }}

                            animate={{

                                scale: 1,

                                opacity: 1,

                                y: 0,

                            }}

                            exit={{

                                scale: .95,

                                opacity: 0,

                                y: 20,

                            }}

                            transition={{

                                duration: .25,

                            }}

                            onClick={(e) =>

                                e.stopPropagation()

                            }

                            className={clsx(

                                "w-full rounded-3xl bg-white shadow-2xl",

                                "max-h-[90vh] overflow-hidden",

                                sizes[size]

                            )}

                        >

                            {children}

                        </motion.div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

};

export default Modal;