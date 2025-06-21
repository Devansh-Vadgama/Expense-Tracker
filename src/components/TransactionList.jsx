import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TransactionList = ({ transactions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="sub-heading-medium">Transaction List</CardTitle>
      </CardHeader>
      <CardContent>
        {(!transactions || transactions.length === 0) ? (
          <p className="no-transactions">No transactions found.</p>
        ) : (
          <div className="transactions-container">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className={`transaction-item ${transaction.type}`}
              >
                <div className="transaction-header sub-container">
                  <span className="amount font-bold">
                    ${Math.abs(transaction.amount).toFixed(2)}
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
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
