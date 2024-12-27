import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Transaction {
  id: number;
  amount: number;
  type: 'income' | 'expense';
  description: string;
  date: Date;
}

interface TransactionStatsProps {
  transactions: Transaction[];
}

export const TransactionStats = ({ transactions }: TransactionStatsProps) => {
  const data = [
    { name: 'Ingresos', amount: transactions.reduce((acc, curr) => curr.type === 'income' ? acc + curr.amount : acc, 0) },
    { name: 'Egresos', amount: transactions.reduce((acc, curr) => curr.type === 'expense' ? acc + curr.amount : acc, 0) }
  ];

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Resumen</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#10B981" name="Ingresos" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};