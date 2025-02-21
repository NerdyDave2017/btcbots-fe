"use client";
import React, { useState } from "react";
import Hero from "../components/hero";
import Container from "../../components/container";
import { Email } from "@/public/assets/icons";
import Input from "../../components/input";
import Button from "../../components/button";
import { useContactUs } from "@/src/hooks/postRequests";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import { useTranslations } from "next-intl";

const page = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const { mutate: sendMessage, isPending } = useContactUs();

  const t = useTranslations("Contact-us");

  const handleSubmit = () => {
    if (!firstName) return toast.error("First name is required");
    if (!lastName) return toast.error("Last name is required");
    if (!email) return toast.error("Email is required");
    if (!subject) return toast.error("Subject is required");
    if (!comment) return toast.error("Comment is required");

    sendMessage(
      {
        firstName,
        lastName,
        email,
        subject,
        comment,
      },
      {
        onSuccess: () => {
          toast.success("Message sent successfully");
          setFirstName("");
          setLastName("");
          setEmail("");
          setSubject("");
          setComment("");
        },
        onError: (error) => {
          if (isAxiosError(error)) {
            toast.error(error.response?.data.message, {
              position: "top-center",
            });
          } else {
            console.error(error);
            toast.error("An unexpected error occurred", {
              position: "top-center",
            });
          }
        },
      }
    );
  };

  const Form = [
    {
      label: t("5"),
      type: "text",
      value: firstName,
      setValue: setFirstName,
    },
    {
      label: t("6"),
      type: "text",
      value: lastName,
      setValue: setLastName,
    },
    {
      label: t("7"),
      type: "email",
      value: email,
      setValue: setEmail,
    },
    {
      label: t("8"),
      type: "text",
      value: subject,
      setValue: setSubject,
    },
    {
      label: t("9"),
      type: "text",
      value: comment,
      setValue: setComment,
    },
  ];

  return (
    <div className="">
      <Hero title={t("0")} />
      <Container>
        <div className="w-full  flex justify-center gap-10 md:gap-12 xl:gap-[120px] flex-col md:flex-row py-10 md:py-[100px]">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
              <div className="text-[#006fe3] md:text-lg font-light">
                {t("1")}
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-4 flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <Email className="w-6 h-6 text-[#006fe3]" />

                <div className="text-[#090909] md:text-lg font-light">
                  {t("2")}: info@btcbots.us
                </div>
              </div>
            </div>
          </div>

          <div className="md:max-w-[450px]  xl:max-w-[600px] flex-col justify-start items-center gap-11 inline-flex">
            <div className="self-stretch flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch text-[#006fe3] text-[28px] md:text-[32px] xl:text-[40px]">
                {t("3")}
              </div>
              <div className="self-stretch text-[#090909] text-base">
                {t("4")}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
              {Form.map((field, index) => (
                <Input
                  key={index}
                  icon={field.type as "text" | "email" | "password"}
                  label={field.label}
                  setValue={field.setValue}
                  value={field.value}
                />
              ))}
              <Button
                text={t("10")}
                size="lg"
                className="w-full"
                onClick={handleSubmit}
                loading={isPending}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
