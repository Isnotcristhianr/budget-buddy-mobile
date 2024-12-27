import { Card } from "@/components/ui/card";

interface Transaction {
  id: number;
  amount: number;
  type: 'income' | 'expense';
  description: string;
  date: Date;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Transacciones Recientes</h2>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <Card key={transaction.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">
                  {transaction.date.toLocaleDateString()}
                </p>
              </div>
              <p className={`font-semibold ${
                transaction.type === 'income' ? 'text-income' : 'text-expense'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};