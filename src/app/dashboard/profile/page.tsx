"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { ProfileUserIcon, WriteIcon } from "@/public/assets/icons";
import Modal from "@/src/app/components/modal";
import useDisclosure from "@/src/hooks/useDisclosure";
import { BOT_INTENT } from "@/src/lib";
import Loader from "../../components/loader";
import { useFetchUser } from "@/src/hooks/fetchRequests";
import { useDeleteAccount } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { QueryCache } from "@tanstack/react-query";
import Upload from "./upload";

const page = () => {
  const router = useRouter();

  const [file, setFile] = useState("");

  const { isOpen, onClose, onOpen, onToggle, setOpen } = useDisclosure();

  const { mutate, isSuccess, isError, error, isPending } = useDeleteAccount();
  const { data: user, isLoading, isSuccess: userSuccess } = useFetchUser();

  const queryCache = new QueryCache();

  const handleDeletion = async () => {
    mutate();
  };

  useEffect(() => {
    if (isSuccess) {
      deleteCookie("auth_token");
      queryCache.clear();
      toast.success("Account deleted successfully");
      router.push("/dashboard/home");
    }
    if (isError) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        console.error(error);
        toast.error("An unexpected error occurred");
      }
    }
  }, [isSuccess, isError]);

  return (
    <div className="w-full">
      <Header text="Profile" showArrow={false} />

      <div className="px-5">
        {isLoading && !userSuccess && (
          <div className="w-full max-w-[550px] mx-auto p-6 bg-gray-200 rounded-2xl flex justify-between items-start gap-6 flexanimate-pulse">
            <div className="relative w-16 h-16 bg-gray-300 rounded-full flex-col justify-center items-center inline-flex">
              <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex-col justify-center items-end space-y-5 inline-flex">
              <div className="h-8 bg-gray-300 rounded w-32"></div>
              <div className="h-8 bg-gray-300 rounded w-40"></div>
              <div className="h-8 bg-gray-300 rounded w-48"></div>
            </div>
          </div>
        )}

        {!isLoading && userSuccess && (
          <div className="w-full max-w-[550px] mx-auto p-6 bg-[#eaf0f6] rounded-2xl flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-between items-start inline-flex">
              <Upload file={file} user={user!} setFile={setFile} />
              <div className="flex-col justify-center items-end gap-[21px] inline-flex">
                <div className="flex-col justify-center items-end gap-3 flex">
                  <p className="text-[#3c3c43]/60 text-sm font-normal">Name</p>
                  <p className="text-[#090909] text-base font-normal">
                    {user?.name ?? ""}
                  </p>
                </div>
                <div className="flex-col justify-center items-end gap-3 flex">
                  <p className="text-[#3c3c43]/60 text-sm font-normal">Email</p>
                  <p className="text-[#090909] text-base font-normal">
                    {user?.email ?? ""}
                  </p>
                </div>
                {/* <div className="flex-col justify-center items-end gap-4 flex">
                  <div className="justify-center items-center gap-2 inline-flex">
                    <p className="text-[#3c3c43]/60 text-sm font-normal">
                      Password
                    </p>
                    <div className="w-5 h-5 p-[3.33px] justify-center items-center flex">
                      <WriteIcon className="w-[13.33px] h-[13.33px] relative text-main cursor-pointer" />
                    </div>
                  </div>
                  <input
                    type="password"
                    className="text-[#090909] text-base font-normal bg-transparent outline-none text-right"
                    value={"********"}
                    disabled
                  />
                </div> */}
              </div>
            </div>
            <div
              onClick={onOpen}
              className="justify-between items-start inline-flex cursor-pointer"
            >
              <p className="text-[#e9362b] text-base font-normal">
                Delete Account
              </p>
            </div>
          </div>
        )}
      </div>

      <Modal
        closeModal={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
        onToggle={onToggle}
      >
        <div className="p-6 bg-[#eaf0f6] rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4 text-text-">
            Confirm Deletion
          </h2>
          <p className="text-[#3c3c43]/60 mb-6">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-4 border border-main rounded-full text-main"
            >
              Cancel
            </button>
            <button
              onClick={handleDeletion}
              disabled={isPending}
              className="px-6 py-4 bg-main text-text-dark rounded-full"
            >
              {isPending ? <Loader /> : "Delete"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default page;
