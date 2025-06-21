import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const Transaction = ({
  transactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
}) => {
  return (
    <div>
      <TransactionForm addTransaction={addTransaction} transactions={transactions} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />
    </div>
  );
};

export default Transaction;
