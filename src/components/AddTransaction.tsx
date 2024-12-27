import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface AddTransactionProps {
  onAdd: (amount: number, type: 'income' | 'expense', description: string) => void;
}

export const AddTransaction = ({ onAdd }: AddTransactionProps) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    onAdd(Number(amount), type, description);
    setAmount("");
    setDescription("");
    toast({
      title: "¡Éxito!",
      description: "Transacción agregada correctamente",
    });
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant={type === 'income' ? 'default' : 'outline'}
            onClick={() => setType('income')}
            className={type === 'income' ? 'bg-income hover:bg-income/90' : ''}
          >
            Ingreso
          </Button>
          <Button
            type="button"
            variant={type === 'expense' ? 'default' : 'outline'}
            onClick={() => setType('expense')}
            className={type === 'expense' ? 'bg-expense hover:bg-expense/90' : ''}
          >
            Egreso
          </Button>
        </div>
        <Input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-lg"
        />
        <Input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Agregar Transacción
        </Button>
      </form>
    </Card>
  );
};