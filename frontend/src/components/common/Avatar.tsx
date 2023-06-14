import React from "react";
import { RiUserLine } from "react-icons/ri";

interface AvatarProps {
  photo: string;
  name: string;
}

const Avatar = ({ photo, name }: AvatarProps) => {
  return (
    <div className="flex items-center">
      {photo ? (
        <img src={photo} alt="User Photo" className="w-8 h-8 rounded-full" />
      ) : (
        <div className="rounded-full bg-gray-600 flex items-center justify-center w-8 h-8">
          <RiUserLine size={20} color="white" />
        </div>
      )}
      <div className="flex flex-col gap-1 ml-2">
        <span className="font-bold text-lg">{name ? name : "User"}</span>
        <span className="text-xs">Admin</span>
      </div>
    </div>
  );
};

export default Avatar;
