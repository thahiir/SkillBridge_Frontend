import { motion } from "framer-motion";
import {
    CheckCircle2,
    XCircle,
    ShieldCheck,
} from "lucide-react";

import usePasswordStrength from "../hooks/usePasswordStrength";

const PasswordStrength = ({ password = "" }) => {

    const {
        rules,
        strength,
        percentage,
        color,
    } = usePasswordStrength(password);

    const ruleList = [

        {
            label: "Minimum 8 characters",
            passed: rules.length,
        },

        {
            label: "One uppercase letter",
            passed: rules.uppercase,
        },

        {
            label: "One lowercase letter",
            passed: rules.lowercase,
        },

        {
            label: "One number",
            passed: rules.number,
        },

        {
            label: "One special character",
            passed: rules.special,
        },

    ];

    return (

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            {/* Header */}

            <div className="mb-4 flex items-center gap-2">

                <ShieldCheck
                    size={20}
                    className="text-indigo-600"
                />

                <h3 className="font-semibold text-slate-700">

                    Password Strength

                </h3>

            </div>

            {/* Progress */}

            <div className="mb-2 h-3 overflow-hidden rounded-full bg-slate-200">

                <motion.div

                    initial={{ width: 0 }}

                    animate={{
                        width: `${percentage}%`,
                    }}

                    transition={{
                        duration: .35,
                    }}

                    className={`h-full rounded-full ${color}`}

                />

            </div>

            {/* Percentage */}

            <div className="mb-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">

                    {percentage.toFixed(0)}%

                </span>

                <span
                    className={`text-sm font-semibold

                    ${
                        strength === "Strong"

                            ? "text-emerald-600"

                            : strength === "Good"

                            ? "text-blue-600"

                            : strength === "Fair"

                            ? "text-yellow-600"

                            : strength === "Weak"

                            ? "text-orange-600"

                            : "text-red-600"

                    }`}
                >

                    {strength}

                </span>

            </div>

            {/* Checklist */}

            <div className="space-y-3">

                {

                    ruleList.map((rule) => (

                        <motion.div

                            key={rule.label}

                            initial={{

                                opacity: 0,

                                x: -10,

                            }}

                            animate={{

                                opacity: 1,

                                x: 0,

                            }}

                            className="flex items-center gap-3"

                        >

                            {

                                rule.passed

                                    ?

                                    <CheckCircle2

                                        size={18}

                                        className="text-emerald-500"

                                    />

                                    :

                                    <XCircle

                                        size={18}

                                        className="text-slate-400"

                                    />

                            }

                            <span

                                className={`text-sm

                                ${
                                    rule.passed

                                        ? "text-emerald-700"

                                        : "text-slate-500"

                                }`}

                            >

                                {rule.label}

                            </span>

                        </motion.div>

                    ))

                }

            </div>

        </div>

    );

};

export default PasswordStrength;