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
    <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6 border-4 border-black">
      <h2 className="text-2xl font-black mb-4 text-black uppercase tracking-wide">Balance Sheet</h2>
      <h3 className="text-xl font-bold mt-4 mb-4 text-gray-800 border-b-2 border-black pb-2 inline-block">Settlements</h3>

{settlements.length === 0 ? (
  <p className="text-gray-600 font-medium italic">No settlements needed</p>
) : (
  <ul className="mt-2">
    {settlements.map((s, index) => (
      <li key={index} className="border-b-2 border-gray-200 py-4 font-bold text-black flex flex-wrap items-center gap-2">
        <span>{s.from} pays</span>
        <span className="text-black bg-yellow-400 px-3 py-1 rounded-lg border-2 border-black shadow-sm mx-1">₹{s.amount.toFixed(2)}</span>
        <span>to {s.to}</span>
      </li>
    ))}
  </ul>
)}
    </div>
  );
}

export default BalanceSheet;