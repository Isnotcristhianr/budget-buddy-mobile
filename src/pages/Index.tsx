import { useState } from "react";
import { Balance } from "@/components/Balance";
import { AddTransaction } from "@/components/AddTransaction";
import { TransactionList } from "@/components/TransactionList";
import { TransactionStats } from "@/components/TransactionStats";

interface Transaction {
  id: number;
  amount: number;
  type: 'income' | 'expense';
  description: string;
  date: Date;
}

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (amount: number, type: 'income' | 'expense', description: string) => {
    const newTransaction: Transaction = {
      id: Date.now(),
      amount,
      type,
      description,
      date: new Date(),
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const totalIncome = transactions.reduce(
    (acc, curr) => (curr.type === 'income' ? acc + curr.amount : acc),
    0
  );

  const totalExpenses = transactions.reduce(
    (acc, curr) => (curr.type === 'expense' ? acc + curr.amount : acc),
    0
  );

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Control de Finanzas</h1>
      <Balance income={totalIncome} expenses={totalExpenses} />
      <AddTransaction onAdd={handleAddTransaction} />
      <TransactionStats transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Index;