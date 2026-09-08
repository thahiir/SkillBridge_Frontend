import toast from "react-hot-toast";

import { changePassword } from "../api/settingsApi";

const useChangePassword = () => {

    const updatePassword = async (values) => {

        try {

            const response = await changePassword(values);

            toast.success(response.message);

            return true;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Unable to change password."
            );

            return false;

        }

    };

    return { updatePassword };

};

export default useChangePassword;