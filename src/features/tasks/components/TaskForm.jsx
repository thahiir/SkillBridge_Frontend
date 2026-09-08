import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { taskSchema } from "../schemas/taskSchema";

import useCreateTask from "../hooks/useCreateTask";
import useUpdateTask from "../hooks/useUpdateTask";

import { useEffect } from "react";

const TaskForm = ({
    task = null,
    onSuccess,
    onClose,
}) => {

    const { create, loading } = useCreateTask();

    const { update } = useUpdateTask();

    const {

        register,

        handleSubmit,

        reset,

        formState: { errors },

    } = useForm({

        resolver: zodResolver(taskSchema),

        defaultValues: {

            title: task?.title || "",

            description: task?.description || "",

            priority: task?.priority || "Medium",

            status: task?.status || "Pending",

            dueDate: task?.dueDate
                ? task.dueDate.slice(0, 10)
                : "",

        },

    });
    useEffect(() => {

            reset({

                title: task?.title || "",

                description: task?.description || "",

                priority: task?.priority || "Medium",

                status: task?.status || "Pending",

                dueDate: task?.dueDate
                    ? task.dueDate.slice(0, 10)
                    : "",

            });

        }, [task, reset]);

    const onSubmit = async (data) => {

        if (task) {

            await update(task._id, data);

        } else {

            await create(data);

        }

        reset();

        onSuccess?.();

        onClose?.();

    };

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Task Title

                </label>

                <input

                    type="text"

                    {...register("title")}

                    className="w-full rounded-xl border px-4 py-3"

                />

                {errors.title && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.title.message}

                    </p>

                )}

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Description

                </label>

                <textarea

                    rows={4}

                    {...register("description")}

                    className="w-full rounded-xl border px-4 py-3"

                />

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Priority

                </label>

                <select

                    {...register("priority")}

                    className="w-full rounded-xl border px-4 py-3"

                >

                    <option value="Low">Low</option>

                    <option value="Medium">Medium</option>

                    <option value="High">High</option>

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Status

                </label>

                <select

                    {...register("status")}

                    className="w-full rounded-xl border px-4 py-3"

                >

                    <option value="Pending">Pending</option>

                    <option value="In Progress">In Progress</option>

                    <option value="Completed">Completed</option>

                </select>

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">

                    Due Date

                </label>

                <input

                    type="date"

                    {...register("dueDate")}

                    className="w-full rounded-xl border px-4 py-3"

                />

            </div>

            <button

                type="submit"

                disabled={loading}

                className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"

            >

                {

                    loading

                        ? "Saving..."

                        : task

                            ? "Update Task"

                            : "Create Task"

                }

            </button>

        </form>

    );

};

export default TaskForm;