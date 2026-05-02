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

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Balance Sheet</h2>
    </div>
  );
}

export default BalanceSheet;