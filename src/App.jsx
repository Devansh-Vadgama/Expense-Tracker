import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Transaction from "./pages/transaction";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const editTransaction = (id, updatedTransaction) => {
    setTransactions(
      transactions.map((t) => (t.id === id ? { ...updatedTransaction, id } : t))
    );
  };

  return (
    <Router>
      <Navbar />
      <h1 className="main-heading">Expense Tracker</h1>
      <Routes>
        <Route path="/" element={<Home Transactions={transactions} />} />
        <Route path="/dashboard" element={<Dashboard Transactions={transactions} />} />
        <Route
          path="/transaction"
          element={
            <Transaction
              Transactions={transactions}
              addTransaction={addTransaction}
              deleteTransaction={deleteTransaction}
              editTransaction={editTransaction}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
