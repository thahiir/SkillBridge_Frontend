import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import { Pencil, Trash2 } from "lucide-react";

const TaskRow = ({ task, onEdit, onDelete }) => {

    return (

        <tr className="border-b">

            <td className="px-4 py-4">
                {task.title}
            </td>

            <td className="px-4 py-4">
                <PriorityBadge priority={task.priority} />
            </td>

            <td className="px-4 py-4">
                <StatusBadge status={task.status} />
            </td>

            <td className="px-4 py-4">
                {new Date(task.dueDate).toLocaleDateString()}
            </td>

            <td className="px-4 py-4">

                <div className="flex gap-3">

                    <button onClick={() => onEdit(task)}>
                        <Pencil
                            size={18}
                            className="text-blue-600"
                        />
                    </button>

                    <button onClick={() => onDelete(task._id)}>
                        <Trash2
                            size={18}
                            className="text-red-600"
                        />
                    </button>

                </div>

            </td>

        </tr>

    );

};

export default TaskRow;