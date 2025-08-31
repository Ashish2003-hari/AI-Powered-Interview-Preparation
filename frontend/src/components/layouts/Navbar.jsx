// import React from 'react';
// import ProfileInfoCard from "../Cards/ProfileInfoCard";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//     return (
//         <div className="h-16 bg-white border boredr-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
//             <div className="container mx-auto flex items-center justify-between gap-5">
//                 <Link to="/dashboard">
//                   <h2 className="text-lg md:text-xl font-medium text-black leading-5 ">
//                     Interview Prep Portal
//                   </h2>
//                 </Link>
//                 <ProfileInfoCard />
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useState } from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import Modal from "../Modal"; 
import ProfileSettings from "../../pages/Auth/ProfileSettings"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <>
      <div className="h-16 bg-gray-900 border-b border-gray-700 backdrop-blur-[2px] px-4 md:px-6 sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Left: Logo + Title */}
          <Link to="/dashboard" className="flex items-center gap-3">
            <img
              src="/logo.jpg"   // 👈 Put logo inside public/
              alt="App Logo"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-xl md:text-xl font-medium text-white">
              Interview Prep Portal
            </h2>
          </Link>

          {/* Right: Profile Picture / Info */}
          <div className="flex items-center">
            <ProfileInfoCard openProfileModal={openProfileModal} />
          </div>
        </div>
      </div>

      {/* Modal for updating profile */}
      <Modal
        isOpen={isProfileModalOpen}
        onClose={closeProfileModal}
        title="Update Profile Picture"
      >
        <ProfileSettings
          onSuccess={() => {
            closeProfileModal();
          }}
        />
      </Modal>
    </>
  );
};

export default Navbar;

