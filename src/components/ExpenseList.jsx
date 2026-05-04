function ExpenseList({ expenses }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6 border-4 border-black">
      <h2 className="text-2xl font-black mb-6 text-black uppercase tracking-wide">Expenses</h2>

      {expenses.length === 0 ? (
        <p className="text-gray-600 font-medium italic">No expenses added yet</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="border-b-2 border-gray-200 py-4 font-bold text-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="text-lg">{expense.description}</span>
              <span className="text-black bg-yellow-400 px-3 py-1.5 rounded-lg border-2 border-black shadow-sm text-sm">₹{expense.amount} <span className="font-medium text-gray-800 ml-1">(Paid by {expense.paidBy})</span></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;