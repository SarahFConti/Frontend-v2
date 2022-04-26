import { BrowserRouter as SwitchRouter, Route, Routes } from "react-router-dom";
import React from 'react';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Router() {
  return (
    <SwitchRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new" element={<New />} />
      </Routes>


    </SwitchRouter>
  )
}
