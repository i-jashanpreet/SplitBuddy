import { useState } from "react";

function ExpenseForm({ members, addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState(members[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !paidBy) return;

    addExpense({
      description,
      amount: parseFloat(amount),
      paidBy,
    });

    setDescription("");
    setAmount("");
  };

  return (
    <form
      className="bg-white p-4 rounded-lg shadow-md mb-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <select
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      >
        {members.map((member, index) => (
          <option key={index} value={member}>
            {member}
          </option>
        ))}
      </select>

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;