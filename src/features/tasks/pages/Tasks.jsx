import { useState } from "react";

import PageHeader from "../../../../src/components/dashboard/PageHeader";

import TaskTable from "../components/TaskTable";
import TaskForm from "../components/TaskForm";
import useTaskSummary from "../hooks/useTaskSummary";
import TaskSummaryCards from "../components/TaskSummaryCard";
import TaskSummarySkeleton from "../components/TaskSummarySkeleton";

import useTasks from "../hooks/useTasks";
import useDeleteTask from "../hooks/useDeleteTask";

const Tasks = () => {

    const [showForm, setShowForm] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const {
        tasks,
        loading,
        error,
        fetchTasks,

        search,
        setSearch,

        status,
        setStatus,

        priority,
        setPriority,

        sort,
        setSort,

        page,
        setPage,

        pagination,

    } = useTasks();

    const {
            summary,
            fetchSummary,
            loading:loadingSummary
        } = useTaskSummary();

    const { removeTask } = useDeleteTask();

    const handleDelete = async (id) => {

        await removeTask(id);

        fetchTasks();

    };

    const handleEdit = (task) => {

        setSelectedTask(task);

        setShowForm(true);

    };

    if (loading) {

        return <h2>Loading Tasks...</h2>;

    }

    if (error) {

        return <h2>Something went wrong.</h2>;

    }

    return (

        <div className="space-y-8">

            <PageHeader
                title="Task Management"
                subtitle="Create, organize and manage your daily tasks."
            />
            {
                loadingSummary
                    ? <TaskSummarySkeleton />
                    : <TaskSummaryCards summary={summary} />
            }

            <div className="flex justify-end">

                <button

                    onClick={() => {

                        setSelectedTask(null);

                        setShowForm(true);

                    }}

                    className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"

                >

                    + Create Task

                </button>

            </div>

            {

                showForm && (

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                        <TaskForm

                            task={selectedTask}

                            onSuccess={() =>{
                                fetchTasks();
                                fetchSummary();
                            }}

                            onClose={() => {

                                setShowForm(false);

                                setSelectedTask(null);

                            }}

                        />

                    </div>

                )

            }

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-xl font-semibold text-slate-800">

                    All Tasks

                </h2>

                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">

                    <input
                        type="text"
                        placeholder="Search task..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="rounded-xl border px-4 py-3"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="rounded-xl border px-4 py-3"
                    >
                        <option value="">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="rounded-xl border px-4 py-3"
                    >
                        <option value="">All Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="rounded-xl border px-4 py-3"
                    >
                        <option value="-createdAt">Newest</option>
                        <option value="createdAt">Oldest</option>
                        <option value="dueDate">Due Date</option>
                    </select>

                </div>

                <TaskTable

                    tasks={tasks}

                    onEdit={handleEdit}

                    onDelete={handleDelete}

                />

                <div className="mt-6 flex items-center justify-between">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="rounded-lg border px-4 py-2 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <span>
                        Page {pagination.page || 1} of {pagination.pages || 1}
                    </span>

                    <button
                        disabled={page === pagination.pages}
                        onClick={() => setPage(page + 1)}
                        className="rounded-lg border px-4 py-2 disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Tasks;