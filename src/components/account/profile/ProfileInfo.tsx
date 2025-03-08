import React from "react";
import ProfileInfoItem from "./ProfileInfoItem";
import { FaLock, FaPencilAlt } from "react-icons/fa";
import ProfileMenuContextWapper from "./ProfileMenuContextWapper";
import { findCurrentUser } from "@/data/user";
import { countryNameFinder } from "@/lib/helpers";
import moment from "moment";
interface ProfileInfoItemProps {
  label: string;
  value: string;
  editable: boolean;
  type?: "password" | "phone" | "name";
}
const ProfileInfoItemLg = ({
  label,
  value,
  editable,
  type,
}: ProfileInfoItemProps) => {
  return (
    <div className="px-3 py-2 flex items-center justify-between profile-info-item">
      <span className="text-sm text-secondary-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-secondary-foreground">
          {value}
        </span>

        {editable && (
          <ProfileMenuContextWapper type={type!}>
            <button disabled={!editable} className="p-1">
              <FaPencilAlt className="w-3 h-3 text-accent" />
            </button>
          </ProfileMenuContextWapper>
        )}

        {!editable && <FaLock className="w-3 h-3 text-accent" />}
      </div>
    </div>
  );
};

const ProfileInfo = async () => {
  const user = await findCurrentUser();

  return (
    <div className="px-0 md:px-3">
      <div className="hidden md:block bg-white px-4  py-2 my-5">
        <div className="py-3">
          <h4 className="text-secondary-foreground font-3xl font-semibold uppercase">
            Personal profile
          </h4>
          <span className="text-sm font-semibold text-secondary-foreground">
            Fill in the empty fields to take advantage of the enhanced features
            of the website!
          </span>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 profile-info">
            <div className="bg-[#4682B4] px-3 py-2">
              <span className="text-sm text-white font-semibold uppercase">
                Account info
              </span>
            </div>
            <ProfileInfoItemLg
              label="Account number"
              value={user!.playerId}
              editable={false}
            />
            <ProfileInfoItemLg
              label="Password"
              value="******"
              editable={true}
              type="password"
            />
            <ProfileInfoItemLg
              label="Registration date"
              value={moment(user!.createdAt).format("l")}
              editable={false}
            />
            <ProfileInfoItemLg
              label="Full Name"
              value={user!.firstName + user!.lastName}
              type="name"
              editable={true}
            />

            <ProfileInfoItemLg
              label="Country"
              value={countryNameFinder(user!.wallet!.currencyCode)!}
              editable={false}
            />
          </div>
          <div className="flex-1 profile-info">
            <div className="bg-[#4682B4] px-3 py-2">
              <span className="text-sm text-white font-semibold uppercase">
                Contact details
              </span>
            </div>
            <ProfileInfoItemLg
              label="Phone"
              value={user!.phone}
              editable={true}
              type="phone"
            />

            <ProfileInfoItemLg
              label="Email"
              value={user!.email}
              editable={false}
            />
          </div>
        </div>
      </div>

      <div className="block md:hidden pt-2 pb-5 bg-[#213f61]">
        <ul className="flex flex-col gap-3">
          <ProfileInfoItem label="Account Number" value="505046728" />
          <ProfileInfoItem label="Password" value="*******" />
          <ProfileInfoItem label="Registration date" value="16/05/2024" />
          <ProfileInfoItem label="Phone" value="01735156550" />
          <ProfileInfoItem label="email" value="epti060@gmail.com" />
          <ProfileInfoItem label="First Name" value="San Bin" />
          <ProfileInfoItem label="Surname Name" value="San Bin" />
          <ProfileInfoItem label="Country" value="Bangladesh" />
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
