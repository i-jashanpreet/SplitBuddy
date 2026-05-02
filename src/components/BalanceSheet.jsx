function BalanceSheet({ expenses, members }) {
  const balances = {};

  members.forEach((member) => {
    balances[member] = 0;
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Balance Sheet</h2>
    </div>
  );
}

export default BalanceSheet;