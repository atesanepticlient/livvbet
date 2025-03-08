import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";
interface SecurityCardProps {
  lable: string;
  des: string;
  enable: boolean;
  icon: React.ReactNode;
  action?: () => void;
}
const SecurityCard = ({
  lable,
  des,
  enable,
  icon,
  action,
}: SecurityCardProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center h-[200px] p-2 md:p-2 rounded-md relative",
        `${enable ? "bg-[#f3fde3]" : "bg-white"}`
      )}
    >
      <div>
        {icon}
        <span
          className={cn(
            "font-bold font-sm md:text-base block text-center",
            `${enable ? "text-brand-foreground " : "text-accent "}`
          )}
        >
          {lable}
        </span>

        <span className="text-xs text-accent">{des}</span>
        {!enable && (
          <Button
            onClick={action}
            size="sm"
            className="mx-auto bg-brand-foreground text-white rounded-sm hover:bg-brand-foreground/90 capitalize block"
          >
            Enable
          </Button>
        )}

        <div className="absolute top-2 right-2">
          {enable && (
            <GoCheckCircleFill className="w-4 h-4 md:w-5 md:h-5  text-emerald-600" />
          )}

          {!enable && (
            <IoIosCloseCircle className="w-4 h-4 md:w-5 md:h-5   text-red-700" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
