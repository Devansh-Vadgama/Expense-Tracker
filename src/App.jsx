import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
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
        <Route path="/" element={<Home transactions={transactions} />} />
        <Route
          path="/dashboard"
          element={<Dashboard transactions={transactions} />}
        />
        <Route
          path="/transaction"
          element={
            <div className="main-container">
              <Transaction
                transactions={transactions}
                addTransaction={addTransaction}
                deleteTransaction={deleteTransaction}
                editTransaction={editTransaction}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
