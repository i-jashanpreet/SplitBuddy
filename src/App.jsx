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
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col">
      <div className="max-w-2xl mx-auto w-full text-center flex flex-col flex-1">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-blue-600">
            SplitBuddy
          </h1>
          <p className="text-gray-600 mt-2">
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
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md mb-6 text-center">
              <h2 className="text-2xl font-bold">{groupName}</h2>
              <p className="text-blue-100 mt-1">
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