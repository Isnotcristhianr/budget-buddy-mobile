import { Card } from "@/components/ui/card";

interface BalanceProps {
  income: number;
  expenses: number;
}

export const Balance = ({ income, expenses }: BalanceProps) => {
  const balance = income - expenses;

  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Balance Total</h2>
        <p className={`text-3xl font-bold ${balance >= 0 ? 'text-income' : 'text-expense'}`}>
          ${balance.toLocaleString()}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-sm text-gray-500">Ingresos</p>
            <p className="text-lg font-semibold text-income">+${income.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Egresos</p>
            <p className="text-lg font-semibold text-expense">-${expenses.toLocaleString()}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};