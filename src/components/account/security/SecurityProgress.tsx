import React from "react";

const SecurityProgress = ({ progress }: { progress: string | number }) => {
  return (
    <div className="bg-white rounded-sm overflow-hidden relative w-full my-2 py-4 md:py-5 px-2">
      <div
        className={` w-full h-[2px] md:h-[3px] bottom-0 left-0 absolute bg-[#D0E1D0]`}
      >
        <div
          className="bg-brand-foreground h-full top-0 left-0 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-accent font-bold text-sm">Proteced</span>
        <span className="text-xs bg-[#bfc9d1] text-accent p-1 rounded-full">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default SecurityProgress;
