const colors = {
    Cash: "bg-green-100 text-green-700",
    UPI: "bg-blue-100 text-blue-700",
    "Debit Card": "bg-orange-100 text-orange-700",
    "Credit Card": "bg-purple-100 text-purple-700",
    "Net Banking": "bg-indigo-100 text-indigo-700",
    Wallet: "bg-pink-100 text-pink-700",
};

const PaymentBadge = ({ paymentMethod }) => {

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                colors[paymentMethod] || "bg-slate-100 text-slate-700"
            }`}
        >
            {paymentMethod}
        </span>

    );

};

export default PaymentBadge;