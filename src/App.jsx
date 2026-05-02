import { useState } from "react";
import GroupForm from "./components/GroupForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BalanceSheet from "./components/BalanceSheet";

function App() {
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
      </div>
    </div>
  );
}

export default App