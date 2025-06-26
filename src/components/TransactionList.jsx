import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTransactions } from "../context/TransactionContext";

const TransactionList = () => {

  const {transactions,deleteTransaction,editTransaction} = useTransactions();

  const [editId, setEditId] = useState(null);
  const [editedTransaction, setEditedTransaction] = useState({
    amount: "",
    description: "",
    category: "",
    type: "",
  });
  const [customCategories, setCustomCategories] = useState([]);

  // Load custom categories from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customCategories")) || [];
    setCustomCategories(stored);
  }, []);

  const handleEditClick = (transaction) => {
    setEditId(transaction._id);
    setEditedTransaction({
      amount: transaction.amount,
      description: transaction.description,
      category: transaction.category,
      type: transaction.type,
    });
  };

  const handleSave = () => {
    editTransaction(editId, {
      ...editedTransaction,
      amount: parseFloat(editedTransaction.amount),
    });
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="sub-heading-medium">Transaction List</CardTitle>
      </CardHeader>
      <CardContent>
        {!transactions || transactions.length === 0 ? (
          <p className="no-transactions">No transactions found.</p>
        ) : (
          <div className="transactions-container">
            {transactions.map((transaction) => {
              const isEditing = editId === transaction._id;

              return (
                <div
                  key={transaction._id}
                  className={`transaction-item ${transaction.type}`}
                >
                  {isEditing ? (
                    <div className="main-container">
                      <Input
                        type="number"
                        value={editedTransaction.amount}
                        onChange={(e) =>
                          setEditedTransaction({
                            ...editedTransaction,
                            amount: e.target.value,
                          })
                        }
                        placeholder="Amount"
                      />
                      <Input
                        type="text"
                        value={editedTransaction.description}
                        onChange={(e) =>
                          setEditedTransaction({
                            ...editedTransaction,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                      />
                      {/* Category dropdown matching form */}
                      <select
                        value={editedTransaction.category}
                        onChange={(e) =>
                          setEditedTransaction({
                            ...editedTransaction,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="General">General</option>
                        <option value="Food">Food</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bills">Bills</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                        {customCategories.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      {/* Type dropdown */}
                      <select
                        value={editedTransaction.type}
                        onChange={(e) =>
                          setEditedTransaction({
                            ...editedTransaction,
                            type: e.target.value,
                          })
                        }
                      >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                      </select>

                      <div className="flex gap-2 mt-2">
                        <Button onClick={handleSave}>Save</Button>
                        <Button variant="ghost" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="transaction-header sub-container">
                        <span className="amount font-bold">
                          ₹{Math.abs(transaction.amount).toFixed(2)}
                        </span>
                        <span className={`type ${transaction.type}`}>
                          {transaction.type}
                        </span>
                      </div>
                      <div className="transaction-details">
                        <p className="description">{transaction.description}</p>
                        <p className="category text-sm text-muted-foreground">
                          Category: {transaction.category}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditClick(transaction)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteTransaction(transaction._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
