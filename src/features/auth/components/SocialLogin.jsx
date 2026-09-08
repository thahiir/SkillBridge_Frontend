import { FcGoogle } from "react-icons/fc";

import { motion } from "framer-motion";

const SocialLogin = () => {

    return (

        <div className="mt-8">

            <div className="relative my-6">

                <hr />

                <span

                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-slate-500"

                >

                    OR

                </span>

            </div>

            <motion.button

                whileHover={{

                    scale: 1.02,

                }}

                whileTap={{

                    scale: .98,

                }}

                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3 font-medium shadow-sm transition hover:bg-slate-50"

            >

                <FcGoogle size={24} />

                Continue with Google

            </motion.button>

        </div>

    );

};

export default SocialLogin;