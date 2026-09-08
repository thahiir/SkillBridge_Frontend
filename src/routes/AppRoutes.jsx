import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import ResetPassword from "../features/auth/pages/ResetPassword";

import Dashboard from "../features/dashboard/pages/Dashboard";

import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";

import Tasks from "../features/tasks/pages/Tasks"
import Expenses from "../features/expenses/pages/Expenses";
import Notifications from "../features/notifications/pages/Notifications";
import Profile from "../features/profile/pages/Profile";
import Analytics from "../features/analytics/pages/Analytics";
import Settings from "../features/settings/pages/Settings";
import AI from "../features/ai/pages/AI"
import Budget from "../features/budget/pages/Budget";

const AppRoutes = () => {

    return (

        <Routes>

            {/* Authentication */}

            <Route element={<AuthLayout />}>

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                />

            </Route>

            {/* Protected Dashboard */}

            <Route
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                

                <Route path="/tasks" element={<Tasks />} />

                <Route path="/expenses" element={<Expenses />} />

                <Route path="/budget" element={<Budget />} />

                {/* <Route path="/habits" element={<Habits />} /> */}

                <Route path="/analytics" element={<Analytics />} />

                <Route path="/notifications" element={<Notifications />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/settings" element={<Settings />} />

                <Route path="/ai" element={<AI />} />

            </Route>

            <Route
                path="*"
                element={<Navigate to="/login"  />}
            />

            

        </Routes>

    );

};

export default AppRoutes;