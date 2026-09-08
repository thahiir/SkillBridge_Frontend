import { useState } from "react";

import { Eye, EyeOff, ShieldCheck } from "lucide-react";

import SettingsCard from "./SettingsCard";

import useChangePassword from "../hooks/useChangePassword";

const SecuritySettings = () => {

    const { updatePassword } = useChangePassword();

    const [form, setForm] = useState({

        currentpassword: "",

        newpassword: "",

        confirmpassword: "",

    });

    const [show, setShow] = useState(false);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (form.newpassword !== form.confirmpassword) {

            return alert("Passwords do not match");

        }

        const success = await updatePassword({

            currentpassword: form.currentpassword,

            newpassword: form.newpassword,

        });

        if (success) {

            setForm({

                currentpassword: "",

                newpassword: "",

                confirmpassword: "",

            });

        }

    };

    return (

        <SettingsCard

            title="Security"

            description="Update your password."

            icon={ShieldCheck}

        >

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <input

                    type={show ? "text" : "password"}

                    name="currentpassword"

                    value={form.currentpassword}

                    onChange={handleChange}

                    placeholder="Current Password"

                    className="w-full rounded-xl border p-3"

                    autoComplete="current-password"

                    required

                />

                <input

                    type={show ? "text" : "password"}

                    name="newpassword"

                    value={form.newpassword}

                    onChange={handleChange}

                    placeholder="New Password"

                    className="w-full rounded-xl border p-3"

                    autoComplete="new-password"

                    required

                />

                <input

                    type={show ? "text" : "password"}

                    name="confirmpassword"

                    value={form.confirmpassword}

                    onChange={handleChange}

                    placeholder="Confirm Password"

                    className="w-full rounded-xl border p-3"

                    autoComplete="confirm-password"

                    required

                />

                <button

                    type="button"

                    onClick={() => setShow(!show)}

                    className="flex items-center gap-2 text-sm text-slate-600"

                >

                    {

                        show

                            ? <EyeOff size={18} />

                            : <Eye size={18} />

                    }

                    {

                        show

                            ? "Hide Passwords"

                            : "Show Passwords"

                    }

                </button>

                <button

                    type="submit"

                    className="
                        rounded-xl
                        bg-indigo-600
                        px-6
                        py-3
                        font-semibold
                        text-white
                        hover:bg-indigo-700
                    "

                >

                    Update Password

                </button>

            </form>

        </SettingsCard>

    );

};

export default SecuritySettings;