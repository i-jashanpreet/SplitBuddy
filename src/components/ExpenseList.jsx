function ExpenseList({ expenses }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="border-b py-2">
              {expense.description} - ₹{expense.amount} (Paid by {expense.paidBy})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;