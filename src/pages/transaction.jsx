import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const transaction = ({
  transactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
}) => {
  return (
    <div>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction} />
    </div>
  );
};

export default transaction;
