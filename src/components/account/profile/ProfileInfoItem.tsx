import React from "react";

interface ProfileInfoItemProps {
  label: string;
  value: string;
}
const ProfileInfoItem = ({ label, value }: ProfileInfoItemProps) => {
  return (
    <li className="flex justify-between items-center py-1 px-2">
      <span className="text-sm text-[#2E2E2E]">{label}</span>
      <span className="text-sm text-[#1A1A1A] font-semibold">{value}</span>
    </li>
  );
};

export default ProfileInfoItem;
