import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const Transaction = ({
  transactions,
  addtransaction,
  deletetransaction,
  edittransaction,
}) => {
  return (
    <div>
      <TransactionForm transactions={transactions} addtransaction={addtransaction}/>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transaction;
