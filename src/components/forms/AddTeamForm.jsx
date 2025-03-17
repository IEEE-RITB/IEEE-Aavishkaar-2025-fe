import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Plus, Trash } from "lucide-react";
import { useParams } from "react-router";

const API_URL = "https://aavishkaar2025-be.onrender.com";
// const eventOptions = [
  //   { value: "coding", label: "Coding Event" },
  //   { value: "robotics", label: "Robotics Competition" },
  //   { value: "design", label: "Design Challenge" },
  //   { value: "other", label: "Other" },
  // ];
  
  const { id } = useParams();
  const AddTeamForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    leader: {
      name: "",
      email: "",
      contactNumber: "",
      usn: "",
    },
    members: [{ name: "", usn: "" }],
    description: "",
    event: id, // New state for event selection
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team: [formData]
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({
        teamName: "",
        leader: { name: "", email: "", contactNumber: "", usn: "" },
        members: [{ name: "", usn: "" }],
        description: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index][name] = value;
    setFormData((prevState) => ({
      ...prevState,
      members: updatedMembers,
    }));
  };

  const addMember = () => {
    setFormData((prevState) => ({
      ...prevState,
      members: [...prevState.members, { name: "", usn: "" }],
    }));
  };

  const removeMember = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      members: prevState.members.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-[#0F0F1B] font-sans">
      <div className="container max-w-2xl px-4 py-16 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#8A2BE2] to-[#FF10F0] bg-clip-text text-transparent"
        >
          Create Your Team
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Team Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            <label className="text-[#E0E0FF] text-lg">Team Name</label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full p-3 bg-[#1E1E2D] border-2 border-[#4F33B3]/50 rounded-lg text-[#E0E0FF] focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2]/50 transition-all"
              required
            />
          </motion.div>

          {/* Leader Section */}
          <div className="space-y-6 p-6 bg-[#1A1A2D]/50 rounded-xl border border-[#4F33B3]/30">
            <h2 className="text-2xl font-semibold text-[#8A2BE2]">Team Leader</h2>

            {['name', 'email', 'contactNumber', 'usn'].map((field, idx) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <label className="text-[#E0E0FF] capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={`leader.${field}`}
                  value={formData.leader[field]}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1E1E2D] border-2 border-[#4F33B3]/50 rounded-lg text-[#E0E0FF] focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2]/50 transition-all"
                  required
                />
              </motion.div>
            ))}
          </div>

          {/* Team Members */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#8A2BE2]">Team Members</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={addMember}
                className="flex items-center gap-2 px-4 py-2 bg-[#4F33B3] text-white rounded-lg hover:bg-[#8A2BE2] transition-colors"
              >
                <Plus size={18} /> Add Member
              </motion.button>
            </div>

            {formData.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-[#1A1A2D]/50 rounded-lg border border-[#4F33B3]/30 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  {['name', 'usn'].map((field) => (
                    <div key={field} className="space-y-2">
                      <label className="text-[#E0E0FF] capitalize">{field}</label>
                      <input
                        type="text"
                        name={field}
                        value={member[field]}
                        onChange={(e) => handleMemberChange(index, e)}
                        className="w-full p-3 bg-[#1E1E2D] border-2 border-[#4F33B3]/50 rounded-lg text-[#E0E0FF] focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2]/50 transition-all"
                        required
                      />
                    </div>
                  ))}
                </div>

                {formData.members.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeMember(index)}
                    className="flex items-center gap-2 text-red-400 transition-colors hover:text-red-300"
                  >
                    <Trash size={16} /> Remove Member
                  </button>
                )}
              </motion.div>
            ))}
           </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            <label className="text-[#E0E0FF] text-lg">Select Event</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1E1E2D] border-2 border-[#4F33B3]/50 rounded-lg text-[#E0E0FF] focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2]/50 transition-all"
            >
              <option value="" disabled>
                Select an event
              </option>
              {eventOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </motion.div> */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-[#8A2BE2] to-[#FF10F0] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent animate-spin" />
            ) : (
              <>
                <Send size={20} />
                Submit Team
              </>
            )}
          </motion.button>

          {error && (
            <div className="p-4 text-red-300 rounded-lg bg-red-500/20">
              Error: {error}
            </div>
          )}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 text-green-300 rounded-lg bg-green-500/20"
            >
              Team submitted successfully! 🎉
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddTeamForm;
