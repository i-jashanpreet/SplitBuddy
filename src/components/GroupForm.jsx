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
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
    <form
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-bold mb-4 mt-4 text-gray-800">Create Group</h1>
      <div className="mb-4 mt-9">
      <label className="block text-left text-sm font-medium text-gray-700 mb-1 ">Group Name</label>
      <input
        type="text"
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      </div>
      <label className="block text-left text-sm font-medium text-gray-700 mb-1">Add Member</label>
      <input
        type="text"
        placeholder="Enter members (comma separated)"
        value={memberInput}
        onChange={(e) => setMemberInput(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-5"
      >
        Create
      </button>
    </form>
    </div>
  );
}

export default GroupForm;