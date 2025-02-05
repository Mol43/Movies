import { useState } from "react";

export const Modal = ({ isOpen, onClose, activeTab, setActiveTab, setFormData, handleSignIn, handleCreateAccount }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center text-black justify-center bg-opacity-50 bg-[#000000D6]"
      onClick={onClose}
    >
      <div
        className="bg-white px-[220px] py-[43px] rounded-[58px] shadow-lg w-[885px] h-[497px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center w-[440px] mx-auto mb-4 border border-[#B11226] rounded-[53px]">
          <a
            href="#"
            className={`w-[220px] text-center py-2 ${
              activeTab === "signup"
                ? "bg-[#B11226] rounded-[53px] text-white"
                : "border-[#000000]"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign in
          </a>
          <a
            href="#"
            className={`w-[220px] text-center py-2 ${
              activeTab === "join"
                ? "bg-[#B11226] rounded-[53px] text-white"
                : "border-[#000000]"
            }`}
            onClick={() => setActiveTab("join")}
          >
            Sign up
          </a>
        </div>
        {activeTab === "join" && (
          <form id="signupForm">
            <input
              onChange={(event) =>
                setFormData((oldingiQiymati) => {
                  oldingiQiymati.username = event.target.value;
                  return oldingiQiymati;
                })
              }
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              className="w-full p-2 mt-8 text-[24px] text-[#707070] border-none outline-none rounded"
            />
            <hr className="-mt-3 text-[#707070]" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 mt-8 text-[24px] text-[#707070] border-none outline-none rounded"
            />
            <hr className="-mt-3 text-[#707070]" />
            <div className="flex items-center justify-between">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-2 mt-8 text-[24px] text-[#707070] border-none outline-none rounded"
              />
              <a
                href="#"
                type="button"
                onClick={toggleShowPassword}
                className="ml-2 mt-4"
              >
                <img src="/assets/svgicons/show.svg" alt="Show Password" />
              </a>
            </div>
            <hr className="-mt-3 text-[#707070]" />
            <button
              onClick={handleCreateAccount} type="button"
              className="px-[55px] py-[17px] flex mx-auto text-center bg-[#B11226] mt-[43px] text-white rounded-[53px] hover:bg-red-700 transition-colors duration-200"
            >
              Log in
            </button>
          </form>
        )}
        {activeTab === "signup" && (
          <form id="joinForm">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 mt-8 text-[24px] text-[#707070] border-none outline-none rounded"
            />
            <hr className="-mt-3 text-[#707070]" />
            <div className="flex items-center justify-between">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-2 mt-8 text-[24px] text-[#707070] border-none outline-none rounded"
              />
              <a
                href="#"
                type="button"
                onClick={toggleShowPassword}
                className="ml-2 mt-4"
              >
                <img src="/assets/svgicons/show.svg" alt="Show Password" />
              </a>
            </div>
            <hr className="-mt-3 text-[#707070]" />
            <a href="#" className="flex justify-end text-black">
              Forget password ?
            </a>
            <button
              onClick={handleSignIn} type="button"
              className="px-[55px] py-[17px] flex mx-auto text-center bg-[#B11226] mt-[92px] text-white rounded-[53px] hover:bg-red-700 transition-colors duration-200"
            >
              Log in
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
