/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import PageHeader from "@/components/PageHeader";
import useCurrentUser from "@/hook/useCurrentUser";
import * as React from "react";
import { useState } from "react";

function InviteFriend() {
  const user = useCurrentUser();
  console.log({ user });
  const [inviteLink, setInviteLink] = useState(
    `www.livvbet.com/login?r=${user?.referId}`
  );

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <PageHeader label="Invite Friends" />
      <div className=" h-screen bg-zinc-900">
        <div className="flex relative flex-col grow w-full bg-[radial-gradient(circle_closest-corner,rgb(28,28,28)_0px,rgb(26,26,26)_100%)] min-h-[800px]">
          <div className="flex relative flex-col grow justify-center items-center p-2.5 w-full">
            <div className="flex relative flex-col px-8 py-5 w-full text-center bg-white rounded-lg max-w-[500px] shadow-[rgba(0,0,0,0.7)_0px_0px_40px_0px] text-neutral-700">
              <div className="flex flex-col gap-6 px-16 py-11 max-sm:px-5 max-sm:py-8">
                <div className="flex justify-center mb-2.5">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 24 24"
                    fill="rgb(59, 59, 59)"
                    className="text-6xl"
                  >
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h1v6c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2v-6h1c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 8h-1v-2h1v2zm-2 0h-3V8h3v4zm-5 0H8V8h5v4zm-7 0H4V8h2v4zm0 2v6H7v-6h3zm5 6h-3v-6h3v6zm0-8V8h1v4h-1zm4 8h-3v-6h3v6z" />
                  </svg>
                </div>
                <h1 className="m-0 text-2xl font-bold leading-7 text-neutral-700">
                  Invite Friends & Earn Rewards
                </h1>
                <div className="flex flex-col gap-4 text-left">
                  <h3 className="m-0 text-lg font-semibold text-center text-neutral-700">
                    Benefits of Inviting Friends:
                  </h3>
                  <ul className="flex flex-col gap-3 p-0 m-0">
                    <li className="flex gap-2.5 items-center text-sm leading-5">
                      <span className="text-base text-green-500 font-[bold]">
                        ✓
                      </span>
                      <span>Earn up to 50% bonus for each successful referral</span>
                    </li>
                    <li className="flex gap-2.5 items-center text-sm leading-5">
                      <span className="text-base text-green-500 font-[bold]">
                        ✓
                      </span>
                      <span>Your friends get up to 50% welcome bonus</span>
                    </li>
                    <li className="flex gap-2.5 items-center text-sm leading-5">
                      <span className="text-base text-green-500 font-[bold]">
                        ✓
                      </span>
                      <span>Unlock exclusive VIP features together</span>
                    </li>
                    <li className="flex gap-2.5 items-center text-sm leading-5">
                      <span className="text-base text-green-500 font-[bold]">
                        ✓
                      </span>
                      <span>Build your network and earn more rewards</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="invite-link-input"
                    className="m-0 text-base font-semibold text-neutral-700"
                  >
                    Your Invitation Link:
                  </label>
                  <div className="flex gap-2.5 items-center max-sm:flex-col">
                    <input
                      id="invite-link-input"
                      type="text"
                      aria-label="Your invitation link"
                      aria-describedby="invite-link-description"
                      className="flex-1 px-4 py-3 text-sm bg-gray-50 rounded-md border-2 border border-solid cursor-text text-neutral-700 max-sm:w-full"
                      value={inviteLink}
                      readOnly
                      onClick={(event) => {
                        (event.target as HTMLInputElement).select();
                      }}
                    />
                    <button
                      className="builder-6a4b72cbb97b4be9a332fd4cc31f135a px-5 py-3 text-sm font-semibold rounded-md transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease] min-w-[80px] text-[white] max-sm:w-full"
                      role="button"
                      aria-label={
                        copied
                          ? "Link copied to clipboard"
                          : "Copy invitation link to clipboard"
                      }
                      aria-pressed={copied}
                      tabIndex={0}
                      onClick={() => copyToClipboard()}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          copyToClipboard();
                        }
                      }}
                      style={{
                        backgroundColor: copied ? "#22c55e" : "rgb(59, 59, 59)",
                      }}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <div
                    id="invite-link-description"
                    className="m-0 text-xs text-gray-500"
                  >
                    Click the input field to select the link, or use the copy
                    button
                  </div>
                  {copied && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="m-0 text-xs font-medium text-green-500"
                    >
                      Link copied to clipboard!
                    </p>
                  )}
                </div>
                <div className="p-5 mt-2.5 rounded-md border border-solid bg-slate-50 border-slate-200">
                  <p className="m-0 text-sm italic leading-5 text-neutral-700">
                    Share this link with your friends via social media, email,
                    or messaging apps to start earning rewards together!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default InviteFriend;
