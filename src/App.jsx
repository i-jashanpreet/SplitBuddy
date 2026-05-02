import { useState } from "react";
import GroupForm from "./components/GroupForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-blue-600">
            SplitBuddy
          </h1>
          <p className="text-gray-600 mt-2">
            Split expenses easily with friends
          </p>
        </header>

    {!groupName && (
      <GroupForm setGroupName={setGroupName} setMembers={setMembers} />
    )}
    {groupName && (
      <div>
        <ExpenseList expenses={expenses} />
      </div>
    )}
      </div>
    </div>
  );
}

export default App;