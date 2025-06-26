import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Navbar from "./components/Navbar";

function App() {
  // Using Localstorage
  // const [transactions, setTransactions] = useState(
  //   JSON.parse(localStorage.getItem("transactions")) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(transactions));
  // }, [transactions]);

  // const addTransaction = (transaction) => {
  //   setTransactions([{ ...transaction, id: Date.now() }, ...transactions]);
  // };

  // const deleteTransaction = (id) => {
  //   setTransactions(transactions.filter((t) => t.id !== id));
  // };

  // const editTransaction = (id, updatedTransaction) => {
  //   setTransactions(
  //     transactions.map((t) => (t.id === id ? { ...updatedTransaction, id } : t))
  //   );
  // };

  {
    /* <div>
        <Routes>
          <Route path="/" element={<Home transactions={transactions} />} />
          <Route
            path="/transactions"
            element={
              <Transactions
                transactions={transactions}
                addTransaction={addTransaction}
                deleteTransaction={deleteTransaction}
                editTransaction={editTransaction}
              />
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard transactions={transactions} />}
          />
        </Routes>
      </div> */
  }

  return (
    <Router>
      <Navbar />
      <h1 className="main-heading">Expense Tracker</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/transaction"
          element={
            <div className="main-container">
              <Transaction />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
