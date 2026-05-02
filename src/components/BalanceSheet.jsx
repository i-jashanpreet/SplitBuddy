function BalanceSheet({ expenses, members }) {
  const balances = {};

  members.forEach((member) => {
    balances[member] = 0;
  });

  expenses.forEach((expense) => {
    const splitAmount = expense.amount / members.length;

    members.forEach((member) => {
      if (member === expense.paidBy) {
        balances[member] += expense.amount - splitAmount;
      } else {
        balances[member] -= splitAmount;
      }
    });
  });

  const settlements = [];
  const creditors = [];
const debtors = [];

Object.entries(balances).forEach(([member, balance]) => {
  if (balance > 0) creditors.push({ member, balance });
  if (balance < 0) debtors.push({ member, balance: -balance });
});

let i = 0;
let j = 0;

while (i < debtors.length && j < creditors.length) {
  const debtor = debtors[i];
  const creditor = creditors[j];

  const amount = Math.min(debtor.balance, creditor.balance);

  settlements.push({
    from: debtor.member,
    to: creditor.member,
    amount,
  });

  debtor.balance -= amount;
  creditor.balance -= amount;

  if (debtor.balance === 0) i++;
  if (creditor.balance === 0) j++;
}

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Balance Sheet</h2>
      <h3 className="text-lg font-semibold mt-4 mb-2">Settlements</h3>

{settlements.length === 0 ? (
  <p className="text-gray-500">No settlements needed</p>
) : (
  <ul>
    {settlements.map((s, index) => (
      <li key={index} className="border-b py-2">
        {s.from} pays ₹{s.amount.toFixed(2)} to {s.to}
      </li>
    ))}
  </ul>
)}
    </div>
  );
}

export default BalanceSheet;