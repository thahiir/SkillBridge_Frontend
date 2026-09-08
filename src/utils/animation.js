export const fadeUp = {

    initial: {
        opacity: 0,
        y: 30,
    },

    animate: {
        opacity: 1,
        y: 0,
    },

    transition: {
        duration: .5,
    },

};

export const fade = {

    initial: {
        opacity: 0,
    },

    animate: {
        opacity: 1,
    },

    transition: {
        duration: .5,
    },

};

export const scale = {

    whileHover: {
        scale: 1.03,
    },

    whileTap: {
        scale: .98,
    },

};

export const float = {

    animate: {
        y: [0, -10, 0],
    },

    transition: {
        duration: 4,
        repeat: Infinity,
    },

};