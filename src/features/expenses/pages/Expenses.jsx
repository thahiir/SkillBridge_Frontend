import { useState } from "react";

import PageHeader from "../../../components/dashboard/PageHeader";
import useExpenses from "../hooks/useExpenses";
import useDeleteExpense from "../hooks/useDeleteExpense";

import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";

import ExpenseSummary from "../components/ExpenseSummary";
import useExpenseAnalytics from "../hooks/useExpenseAnalytics";

import ExpenseCategoryChart from "../components/ExpenseCategoryChart";
import ExpenseMonthlyChart from "../components/ExpenseMonthlyChart";
import ExpenseAnalyticsSection from "../components/ExpenseAnalyticsSection";

const Expenses = () => {

    const [showForm, setShowForm] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState(null);

    const { removeExpense } = useDeleteExpense();

    const {

        expenses,
        loading,
        error,
        fetchExpenses,

        search,
        setSearch,

        category,
        setCategory,

        paymentMethod,
        setPaymentMethod,

        sort,
        setSort,

        page,
        setPage,

    } = useExpenses();

    const {

        summary,

        monthly,

        categories,

    } = useExpenseAnalytics();

    if (loading) {
        return <h2>Loading Expenses...</h2>;
    }

    if (error) {
        return <h2>Something went wrong.</h2>;
    }

    const handleEdit = (expense) => {

        setSelectedExpense(expense);
        setShowForm(true);

    };

    const handleDelete = async (id) => {

        await removeExpense(id);

        fetchExpenses();

    };

    return (

        <div className="space-y-8">

            <PageHeader
                title="Expense Management"
                subtitle="Track and manage all your expenses."
            />
            <ExpenseAnalyticsSection
                summary={summary}
                categories={categories}
                monthly={monthly}
            />

            {/* Add Expense Button */}

            <div className="flex justify-end">

                <button

                    onClick={() => {

                        setSelectedExpense(null);
                        setShowForm(!showForm);

                    }}

                    className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"

                >

                    {

                        showForm

                            ? "Close"

                            : "+ Add Expense"

                    }

                </button>

            </div>

            {/* Expense Form */}

            {

                showForm && (

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                        <ExpenseForm

                            expense={selectedExpense}

                            onSuccess={fetchExpenses}

                            onClose={() => {

                                setShowForm(false);
                                setSelectedExpense(null);

                            }}

                        />

                    </div>

                )

            }

            {/* Filters */}

            <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <input

                    type="text"

                    placeholder="Search expenses..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                    className="min-w-[220px] flex-1 rounded-xl border border-slate-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"

                />

                <select

                    value={category}

                    onChange={(e) => setCategory(e.target.value)}

                    className="rounded-xl border border-slate-300 px-4 py-2"

                >

                    <option value="">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Travel">Travel</option>
                    <option value="Others">Others</option>

                </select>

                <select

                    value={paymentMethod}

                    onChange={(e) => setPaymentMethod(e.target.value)}

                    className="rounded-xl border border-slate-300 px-4 py-2"

                >

                    <option value="">All Payments</option>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="Wallet">Wallet</option>

                </select>

                <select

                    value={sort}

                    onChange={(e) => setSort(e.target.value)}

                    className="rounded-xl border border-slate-300 px-4 py-2"

                >

                    <option value="-date">Newest</option>
                    <option value="date">Oldest</option>
                    <option value="-amount">Highest Amount</option>
                    <option value="amount">Lowest Amount</option>

                </select>

            </div>

            {/* Expense Table */}

            <ExpenseTable

                expenses={expenses}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            {/* Pagination */}

            <div className="flex items-center justify-center gap-4">

                <button

                    disabled={page === 1}

                    onClick={() => setPage(page - 1)}

                    className="rounded-lg bg-slate-200 px-4 py-2 transition disabled:cursor-not-allowed disabled:opacity-50"

                >

                    Previous

                </button>

                <span className="font-medium">

                    Page {page}

                </span>

                <button

                    onClick={() => setPage(page + 1)}

                    className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"

                >

                    Next

                </button>

            </div>

        </div>

    );

};

export default Expenses;