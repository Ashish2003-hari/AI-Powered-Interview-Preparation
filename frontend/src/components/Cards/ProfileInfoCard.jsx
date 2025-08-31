import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const ProfileInfoCard = ({ openProfileModal }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 cursor-pointer hover:scale-105 transition-transform"
            onClick={openProfileModal}
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full bg-gray-600 border-2 border-yellow-400 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition-transform"
            onClick={openProfileModal}
          >
            {user.name ? user.name[0].toUpperCase() : "?"}
          </div>
        )}
        <div>
          <div className="text-base text-white font-semibold">
            {user.name || ""}
          </div>
          <button
            className="text-yellow-400 text-sm font-medium cursor-pointer hover:text-yellow-300 hover:underline transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
