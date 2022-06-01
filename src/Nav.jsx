import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Expenses from "./expenses";
import Invoices from "./invoices";
import Counters from "./components/Counters"
import Page from "./Page";

function Nav() {
  return (
    <BrowserRouter>
    <Routes>
      <React.StrictMode>
        <Route path="/" element={<Counters />} />
        <Route path="./Page" element={<Page />} />
        <Route path="./expenses" element={<expenses />} />
        <Route path="./invoices" element={<invoices />} />
      </React.StrictMode>
    </Routes>
  </BrowserRouter>
  )
}

export default Nav