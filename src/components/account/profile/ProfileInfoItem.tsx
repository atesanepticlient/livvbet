import React from "react";

interface ProfileInfoItemProps {
  label: string;
  value: string;
}
const ProfileInfoItem = ({ label, value }: ProfileInfoItemProps) => {
  return (
    <li className="flex justify-between items-center py-1 px-2">
      <span className="text-sm text-muted">{label}</span>
      <span className="text-sm text-white font-semibold">{value}</span>
    </li>
  );
};

export default ProfileInfoItem;
