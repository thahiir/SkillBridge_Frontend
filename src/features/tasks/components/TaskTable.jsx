import TaskRow from "./TaskRow";

const TaskTable = ({ tasks, onEdit, onDelete}) => {

    return (

        <div className="overflow-hidden rounded-2xl border">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-4 py-4 text-left">

                            Title

                        </th>

                        <th className="px-4 py-4 text-left">

                            Priority

                        </th>

                        <th className="px-4 py-4 text-left">

                            Status

                        </th>

                        <th className="px-4 py-4 text-left">

                            Due Date

                        </th>

                        <th className="px-4 py-4 text-left">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {tasks.map((task) => (

                        <TaskRow
                            key={task._id}
                            task={task}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default TaskTable;