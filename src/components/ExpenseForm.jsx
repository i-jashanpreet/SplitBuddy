import { useState } from "react";

function ExpenseForm({ members, addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState(members[0] || "");

  return (
    <form className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>
    </form>
  );
}

export default ExpenseForm;