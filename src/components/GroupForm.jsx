import { useState } from "react";

function GroupForm({ setGroupName, setMembers }) {
  const [name, setName] = useState("");
  const [memberInput, setMemberInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !memberInput) return;

    const memberList = memberInput.split(",").map((m) => m.trim());

    setGroupName(name);
    setMembers(memberList);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-xl font-bold mb-4">Create Group</h2>

      <input
        type="text"
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <input
        type="text"
        placeholder="Enter members (comma separated)"
        value={memberInput}
        onChange={(e) => setMemberInput(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </form>
  );
}

export default GroupForm;