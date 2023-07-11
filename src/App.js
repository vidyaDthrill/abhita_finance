import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/Login";
import Groups from "./pages/Master/Groups";
import Bank from "./pages/Master/Bank";
import Branches from "./pages/Master/Branches";
import Designation from "./pages/Master/Designation";
import Customers from "./pages/Customers/Customers";
import CustomersGroup from "./pages/Customers/CustomersGroup";
import CreateGroupLoan from "./pages/CreateGroupLoan";
import LoanSummary from "./pages/LoanSummary";
import Disbursement from "./pages/Disbursement";
import ShowCollection from "./pages/Collections/ShowCollection";
import EMICollection from "./pages/Collections/EMICollection";
import CustomersCollection from "./pages/Collections/CustomersCollections";
import LoanSummaryDetails from "./pages/LoanSummaryDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Master */}
          <Route path="groups" element={<Groups />} />
          <Route path="bank" element={<Bank />} />
          <Route path="branches" element={<Branches />} />
          <Route path="designation" element={<Designation />} />
          {/* Customers */}
          <Route path="Customers" element={<Customers />} />
          <Route path="Customers_group" element={<CustomersGroup />} />
          {/* Create Group Loan */}
          <Route path="create_group_loan" element={<CreateGroupLoan />} />
          {/* Loan Summary*/}
          <Route path="loan_summary" element={<LoanSummary />} />
          <Route path="loan_summary_details" element={<LoanSummaryDetails />} />
          {/* Disbursement */}
          <Route path="Disbursement" element={<Disbursement />} />
          {/* Collection */}
          <Route path="show_collection" element={<ShowCollection />} />
          <Route path="emi_Collection" element={<EMICollection />} />
          <Route
            path="Customers_collection"
            element={<CustomersCollection />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
