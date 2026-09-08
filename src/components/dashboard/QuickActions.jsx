import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

import Button from "../ui/button/Button";

const QuickActions = () => {

    return (

        <Button asChild>

            <NavLink to="/tasks">

                <Plus size={18} />

                New Task

            </NavLink>

        </Button>

    );

};

export default QuickActions;