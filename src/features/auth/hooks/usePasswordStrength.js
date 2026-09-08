import { useMemo } from "react";

const usePasswordStrength = (password = "") => {

    return useMemo(() => {

        const rules = {

            length: password.length >= 8,

            uppercase: /[A-Z]/.test(password),

            lowercase: /[a-z]/.test(password),

            number: /[0-9]/.test(password),

            special: /[^A-Za-z0-9]/.test(password),

        };

        const passedRules = Object.values(rules).filter(Boolean).length;

        const percentage = (passedRules / 5) * 100;

        let strength = "Very Weak";

        let color = "bg-red-500";

        if (passedRules === 2) {

            strength = "Weak";

            color = "bg-orange-500";

        }

        if (passedRules === 3) {

            strength = "Fair";

            color = "bg-yellow-500";

        }

        if (passedRules === 4) {

            strength = "Good";

            color = "bg-blue-500";

        }

        if (passedRules === 5) {

            strength = "Strong";

            color = "bg-emerald-500";

        }

        return {

            rules,

            passedRules,

            percentage,

            strength,

            color,

        };

    }, [password]);

};

export default usePasswordStrength;