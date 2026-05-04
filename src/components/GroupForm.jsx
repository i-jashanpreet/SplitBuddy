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
    <div className="bg-white p-8 rounded-2xl shadow-2xl mb-6 border-4 border-black">
    <form
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-black mb-6 mt-2 text-black uppercase tracking-wide">Create Group</h1>
      <div className="mb-6 mt-6">
      <label className="block text-left text-sm font-bold text-black mb-2 uppercase tracking-wider">Group Name</label>
      <input
        type="text"
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border-2 border-black rounded-lg mb-4 focus:ring-4 focus:ring-yellow-400 focus:outline-none transition-all font-medium text-black placeholder-gray-500"
      />
      </div>
      <label className="block text-left text-sm font-bold text-black mb-2 uppercase tracking-wider">Add Member</label>
      <input
        type="text"
        placeholder="Enter members (comma separated)"
        value={memberInput}
        onChange={(e) => setMemberInput(e.target.value)}
        className="w-full p-3 border-2 border-black rounded-lg mb-4 focus:ring-4 focus:ring-yellow-400 focus:outline-none transition-all font-medium text-black placeholder-gray-500"
      />

      <button
        type="submit"
        className="bg-black hover:bg-gray-800 text-yellow-400 font-black px-6 py-4 rounded-xl mt-6 w-full uppercase tracking-widest transition-colors shadow-lg"
      >
        Create
      </button>
    </form>
    </div>
  );
}

export default GroupForm;