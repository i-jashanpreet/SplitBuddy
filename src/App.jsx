import { useState } from "react";
import GroupForm from "./components/GroupForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BalanceSheet from "./components/BalanceSheet";

function App() {
  return (
    <div>
      <GroupForm />
      <ExpenseForm />
      <ExpenseList />
      <BalanceSheet />
    </div>
  )
}

export default App