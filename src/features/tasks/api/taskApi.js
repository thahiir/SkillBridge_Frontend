import axiosInstance from "../../../../src/api/axios";

// ==============================
// Get All Tasks
// ==============================

export const getTasks = async (params = {}) => {

    const response = await axiosInstance.get("/tasks", {
        params,
    });

    return response.data;

};

// ==============================
// Create Task
// ==============================

export const createTask = async (taskData) => {

    const response = await axiosInstance.post(
        "/tasks",
        taskData
    );

    return response.data;

};

// ==============================
// Update Task
// ==============================

export const updateTask = async (id, taskData) => {

    const response = await axiosInstance.put(
        `/tasks/${id}`,
        taskData
    );

    return response.data;

};

// ==============================
// Delete Task
// ==============================

export const deleteTask = async (id) => {

    const response = await axiosInstance.delete(
        `/tasks/${id}`
    );

    return response.data;

};

//summary

export const getTaskSummary = async () => {

    const { data } = await axiosInstance.get("/tasks/summary");

    return data;

};