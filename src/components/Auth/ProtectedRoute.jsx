import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user, redirectPath = '/', roleRequired = null }) => {
    // If no user is logged in, redirect to home
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    // If a specific role is required (like 'admin'), check user metadata
    if (roleRequired && user.user_metadata?.role !== roleRequired) {
        return <Navigate to={redirectPath} replace />;
    }

    // If all checks pass, render the protected component
    return children;
};

export default ProtectedRoute;
