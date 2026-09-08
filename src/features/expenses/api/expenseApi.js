import axiosInstance from "../../../api/axios";

// ==========================
// Get All Expenses
// ==========================

export const getExpenses = async (params = {}) => {

    const { data } = await axiosInstance.get(
        "/expenses",
        {
            params,
        }
    );

    return data;

};

// ==========================
// Create Expense
// ==========================

export const createExpense = async (expenseData) => {

    const { data } = await axiosInstance.post(
        "/expenses",
        expenseData
    );

    return data;

};

// ==========================
// Update Expense
// ==========================

export const updateExpense = async (id, expenseData) => {

    const { data } = await axiosInstance.put(
        `/expenses/${id}`,
        expenseData
    );

    return data;

};

// ==========================
// Delete Expense
// ==========================

export const deleteExpense = async (id) => {

    const { data } = await axiosInstance.delete(
        `/expenses/${id}`
    );

    return data;

};

// ==============================
// Expense Summary
// ==============================

export const getExpenseSummary = async () => {

    const { data } = await axiosInstance.get(
        "/expenses/summary"
    );

    return data;

};

// ==============================
// Monthly Expense
// ==============================

export const getMonthlyExpenses = async () => {

    const { data } = await axiosInstance.get(
        "/expenses/monthly"
    );

    return data;

};

// ==============================
// Category Expense
// ==============================

export const getCategoryExpenses = async () => {

    const { data } = await axiosInstance.get(
        "/expenses/category"
    );

    return data;

};