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
      className="bg-white p-6 rounded-2xl shadow-2xl mb-6 border-4 border-black"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-black mb-6 text-black uppercase tracking-wide">Add Expense</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border-2 border-black rounded-lg mb-4 focus:ring-4 focus:ring-yellow-400 focus:outline-none transition-all font-medium text-black placeholder-gray-500"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        min={0}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border-2 border-black rounded-lg mb-4 focus:ring-4 focus:ring-yellow-400 focus:outline-none transition-all font-medium text-black placeholder-gray-500"
      />

      <select
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
        className="w-full p-3 border-2 border-black rounded-lg mb-4 focus:ring-4 focus:ring-yellow-400 focus:outline-none transition-all font-medium text-black bg-white"
      >
        {members.map((member, index) => (
          <option key={index} value={member}>
            {member}
          </option>
        ))}
      </select>

      <button className="bg-black hover:bg-gray-800 text-yellow-400 font-black px-6 py-4 rounded-xl w-full uppercase tracking-widest transition-colors shadow-lg mt-2">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;