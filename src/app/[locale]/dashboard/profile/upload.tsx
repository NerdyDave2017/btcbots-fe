import React, { useEffect, useState } from "react";
import { useUploadProfileImage } from "@/src/hooks/postRequests";
import { UserData } from "@/src/types";
import { useDropzone } from "react-dropzone";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import { ProfileUserIcon, WriteIcon } from "@/public/assets/icons";
import Image from "next/image";
import { Spinner } from "@/public/assets/icons";
import avatar from "@/public/assets/icons/avatar.svg";

const Upload = ({
  user,
  file,
  setFile,
}: {
  user: UserData;
  file: string;
  setFile: (file: string) => void;
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([] as any);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
    },
  });

  const {
    data,
    mutate: UploadProfileImage,
    isError,
    isSuccess,
    error,
    isPending,
  } = useUploadProfileImage(user?._id ?? "");

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      upload();
    }
  }, [uploadedFiles]);

  const upload = async () => {
    if (!user) return;

    // check file format - should be image only
    if (!uploadedFiles[0].type.includes("image")) {
      toast.error("Only image files are allowed");
      return;
    }

    let formData = new FormData();
    formData.append("file", uploadedFiles[0]);
    UploadProfileImage(formData, {
      onSuccess: (res) => {
        toast.success("Image uploaded successfully", {
          position: "top-center",
        });
        setFile(res);
      },
      onError: (error: Error) => {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message);
        } else {
          console.error(error);
          toast.error("An unexpected error occurred");
        }
      },
    });
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <div className=" relative w-16 h-16  bg-[#f4f6f8] rounded-full flex-col justify-center items-center inline-flex">
        {user ? (
          <Image
            alt=""
            className="w-16 md:w-20 rounded-full"
            src={file || (user ? user!.avatar : avatar) || avatar}
            width={100}
            height={100}
          />
        ) : (
          <Image
            alt=""
            className="w-10  rounded-full"
            src={avatar}
            width={100}
            height={100}
          />
        )}

        {isPending && (
          <div className="absolute w-16 h-16 rounded-full text-white flex-col justify-center items-center inline-flex">
            <Spinner />
          </div>
        )}

        <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 self-stretch p-1 bg-[#deeaf6] rounded-full justify-center items-center inline-flex">
          <WriteIcon className="cursor-pointer" />
        </div>
      </div>

      <ul className="w-3/4 text-sm font-light mt-3 text-wrap">
        {uploadedFiles.map((file: any) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Upload;
