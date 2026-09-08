import { User, Mail, Phone, Calendar } from "lucide-react";

const ProfileCards = ({ profile, onEdit }) => {

    if (!profile) return null;

    return (

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex flex-col items-center">

                <img
                    src={
                        profile.profileImage ||
                        "https://ui-avatars.com/api/?name=" +
                            encodeURIComponent(profile.Fullname)
                    }
                    alt={profile.Fullname}
                    className="h-32 w-32 rounded-full border-4 border-indigo-100 object-cover"
                />

                <h2 className="mt-5 text-2xl font-bold text-slate-800">

                    {profile.Fullname}

                </h2>

                <p className="mt-1 text-slate-500">

                    Full Stack Developer

                </p>

            </div>

            <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3">

                    <User
                        size={18}
                        className="text-indigo-600"
                    />

                    <span>{profile.Fullname}</span>

                </div>

                <div className="flex items-center gap-3">

                    <Mail
                        size={18}
                        className="text-indigo-600"
                    />

                    <span>{profile.Email}</span>

                </div>

                <div className="flex items-center gap-3">

                    <Phone
                        size={18}
                        className="text-indigo-600"
                    />

                    <span>{profile.PhoneNo}</span>

                </div>

                <div className="flex items-center gap-3">

                    <Calendar
                        size={18}
                        className="text-indigo-600"
                    />

                    <span>

                        Joined{" "}
                        {new Date(
                            profile.createdAt
                        ).toLocaleDateString()}

                    </span>

                </div>

            </div>

            <button

                onClick={onEdit}

                className="
                    mt-8
                    w-full
                    rounded-xl
                    bg-indigo-600
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-indigo-700
                "

            >

                Edit Profile

            </button>

        </div>

    );

};

export default ProfileCards;