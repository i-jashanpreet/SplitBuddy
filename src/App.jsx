import { useState } from "react";
import GroupForm from "./components/GroupForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BalanceSheet from "./components/BalanceSheet";

function App() {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="min-h-screen bg-yellow-400 py-8 px-4 flex flex-col font-sans">
      <div className="max-w-2xl mx-auto w-full text-center flex flex-col flex-1">
        <header className="mb-8 mt-4">
          <h1 className="text-5xl font-black text-black tracking-tight uppercase drop-shadow-sm">
            SplitBuddy
          </h1>
          <p className="text-gray-900 mt-3 font-bold text-lg tracking-wide">
            Split expenses easily with friends
          </p>
        </header>

        {!groupName && (
          <div className="flex-1 flex flex-col justify-center pb-20">
            <GroupForm setGroupName={setGroupName} setMembers={setMembers} />
          </div>
        )}

        {groupName && (
          <div className="text-left flex-1">
            <div className="bg-black text-yellow-400 p-6 rounded-2xl shadow-xl mb-6 text-center border-4 border-black">
              <h2 className="text-3xl font-black uppercase tracking-wide">{groupName}</h2>
              <p className="text-gray-300 mt-2 font-medium">
                Members: {members.join(", ")}
              </p>
            </div>

            <ExpenseForm members={members} addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
            <BalanceSheet expenses={expenses} members={members} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;