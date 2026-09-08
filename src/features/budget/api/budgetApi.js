import api from "../../../api/axios";

export const getMonthlyBudget = async (month, year) => {
    return await api.get(
        `/budget/monthly?month=${month}&year=${year}`
    );
};

export const saveMonthlyBudget = async (data) => {
    return await api.post(
        "/budget/monthly",
        data
    );
};

export const getMonthlySpending = async (month, year) => {
    return await api.get(
        `/budget/spending?month=${month}&year=${year}`
    );
};