const colors = {
    Food: "bg-red-100 text-red-700",
    Transport: "bg-blue-100 text-blue-700",
    Shopping: "bg-pink-100 text-pink-700",
    Bills: "bg-yellow-100 text-yellow-700",
    Entertainment: "bg-purple-100 text-purple-700",
    Education: "bg-green-100 text-green-700",
    Healthcare: "bg-emerald-100 text-emerald-700",
    Travel: "bg-indigo-100 text-indigo-700",
    Others: "bg-slate-100 text-slate-700",
};

const CategoryBadge = ({ category }) => {

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                colors[category] || colors.Others
            }`}
        >
            {category}
        </span>

    );

};

export default CategoryBadge;