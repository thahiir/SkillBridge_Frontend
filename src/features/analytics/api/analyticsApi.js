import axiosInstance from "../../../api/axios";

// ==============================
// Dashboard Analytics
// ==============================

export const getDashboardAnalytics = async () => {

    const { data } = await axiosInstance.get(
        "/dashboard"
    );

    return data;

};

// ==============================
// Task Analytics
// ==============================

export const getTaskAnalytics = async () => {

    const { data } = await axiosInstance.get(
        "/tasks/summary"
    );

    return data;

};

// ==============================
// Expense Summary
// ==============================

export const getExpenseAnalytics = async () => {

    const { data } = await axiosInstance.get(
        "/expenses/summary"
    );

    return data;

};

// ==============================
// Monthly Expenses
// ==============================

export const getMonthlyExpenses = async () => {

    const { data } = await axiosInstance.get(
        "/expenses/monthly"
    );

    return data;

};

// ==============================
// Category Expenses
// ==============================

export const getCategoryExpenses = async () => {

    const { data } = await axiosInstance.get(
        "/expenses/category"
    );

    return data;

};