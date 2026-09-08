import { LoaderCircle } from "lucide-react";

const LoadingScreen = () => {

    return (

        <div className="flex h-screen items-center justify-center bg-slate-50">

            <div className="flex flex-col items-center gap-4">

                <LoaderCircle
                    size={48}
                    className="animate-spin text-indigo-600"
                />

                <h2 className="text-xl font-semibold text-slate-700">

                    Loading SkillBridge...

                </h2>

                <p className="text-slate-500">

                    Preparing your workspace

                </p>

            </div>

        </div>

    );

};

export default LoadingScreen;