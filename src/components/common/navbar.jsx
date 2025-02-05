import { Container } from "./container";
import { useState } from "react";
import { Modal } from "./modal";
import { createAccount, signIn } from "../../utils/api/api";
import { USERS_ENDPOINT } from "../../constants";

export const Navbar = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user-data")) || "";
    } catch (e) {
      return "";
    }
  });

  const handleCreateAccount = async () => {
    const result = await createAccount(USERS_ENDPOINT, formData);

    if (result.status) {
      localStorage.setItem("is-logged", result.status);
      localStorage.setItem("user-data", JSON.stringify(formData));
      window.location.href = "/film";
    }
  };

  const handleSignIn = async () => {
    try {
      const result = await signIn(USERS_ENDPOINT, formData);

      if (result && result.status) {
        localStorage.setItem("is-logged", result.status);
        localStorage.setItem("user-data", JSON.stringify(result.user));
        window.location.href = "/film";
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const tapBarSingup = () => {
    setActiveTab("signup");
    setModalOpen(true);
  };

  const tapBarJoin = () => {
    setActiveTab("join");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-[#B11226]">
      <Container className="flex items-center justify-between py-[7px]">
        <img src="/assets/svgicons/logo.svg" alt="" />
        {localStorage.getItem("is-logged") == "true" ? (
          <div className="flex items-center">
            <span className="text-white text-[24px] mr-2">{user.username}</span>
            <img
              src="/assets/svgicons/avatar.svg"
              alt="User Avatar"
              className="w-8 h-8 "
            />
          </div>
        ) : (
          <div className="flex gap-[25px]">
            <a
              href="#"
              className="h-[36px] px-[29px] border border-black flex items-center justify-center text-[24px] hover:bg-black hover:text-white transition-colors duration-200"
              onClick={tapBarSingup}
            >
              Sign up
            </a>
            <a
              href="#"
              className="h-[36px] px-[29px] border border-black flex items-center justify-center text-[24px] hover:bg-black hover:text-white transition-colors duration-200"
              onClick={tapBarJoin}
            >
              Join
            </a>
          </div>
        )}
      </Container>
      <Modal
        isOpen={ModalOpen}
        onClose={closeModal}
        activeTab={activeTab}
        setFormData={setFormData}
        handleSignIn={handleSignIn}
        handleCreateAccount={handleCreateAccount}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};
