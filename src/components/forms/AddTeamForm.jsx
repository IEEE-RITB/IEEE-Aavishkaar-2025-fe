import { useState } from "react";
import { Send } from "lucide-react";

const AddTeamForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    leader: {
      name: "",
      email: "",
      contactNumber: "",
      usn: "",
    },
    members: [
      {
        name: "",
        usn: "",
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is nested (e.g., leader.name)
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      // Handle non-nested fields (e.g., teamName)
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle changes for member fields
  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index][name] = value;

    setFormData((prevState) => ({
      ...prevState,
      members: updatedMembers,
    }));
  };

  // Add a new member field
  const addMember = () => {
    setFormData((prevState) => ({
      ...prevState,
      members: [...prevState.members, { name: "", usn: "" }],
    }));
  };

  // Remove a member field
  const removeMember = (index) => {
    const updatedMembers = formData.members.filter((_, i) => i !== index);
    setFormData((prevState) => ({
      ...prevState,
      members: updatedMembers,
    }));
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Add a team member</span>
        </h1>

        <div className="flex flex-col mt-12 items-center">
          <div className="w-1/2 bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-neon-pink/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="teamName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="leader"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Leader
                </label>
                <div className="bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-neon-pink/30 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="leader.name"
                      value={formData.leader.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="leader.email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="leader.email"
                      name="leader.email"
                      value={formData.leader.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="flex justify-between space-x-4">
                    <div className="w-full">
                      <label
                        htmlFor="leader.contactNumber"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="leader.contactNumber"
                        name="leader.contactNumber"
                        value={formData.leader.contactNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="leader.usn"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        USN
                      </label>
                      <input
                        type="text"
                        id="leader.usn"
                        name="leader.usn"
                        value={formData.leader.usn}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="members"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Members
                </label>
                {formData.members.map((member, index) => (
                  <div
                    key={index}
                    className="mb-4 bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-neon-pink/30"
                  >
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor={`member-${index}-name`}
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id={`member-${index}-name`}
                          name="name"
                          value={member.name}
                          onChange={(e) => handleMemberChange(index, e)}
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`member-${index}-usn`}
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          USN
                        </label>
                        <input
                          type="text"
                          id={`member-${index}-usn`}
                          name="usn"
                          value={member.usn}
                          onChange={(e) => handleMemberChange(index, e)}
                          className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                          required
                        />
                        <div className="flex justify-end space-x-4 mt-2">
                          {/* Show "Remove Member" button only if there is more than one member */}
                          {formData.members.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeMember(index)}
                              className="text-sm text-red-600 hover:text-red-800"
                            >
                              Remove Member
                            </button>
                          )}
                          {/* Show "Add Member" button only for the last member */}
                          {index === formData.members.length - 1 && (
                            <button
                              type="button"
                              onClick={addMember}
                              className="text-sm text-blue-600 hover:text-blue-800"
                            >
                              Add Member
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="neon-button w-full flex items-center justify-center space-x-2"
              >
                <span>Submit</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamForm;
