"use client";
import React from "react";
import Hero from "../components/hero";
import Container from "../../components/container";
import { Email } from "@/public/assets/icons";
import Input from "../../components/input";
import Button from "../../components/button";

const page = () => {
  const Form = [
    {
      label: "First Name",
      type: "text",
      value: "",
      setValue: () => {},
    },
    {
      label: "Last Name",
      type: "text",
      value: "",
      setValue: () => {},
    },
    {
      label: "Email",
      type: "email",
      value: "",
      setValue: () => {},
    },
    {
      label: "Subject",
      type: "text",
      value: "",
      setValue: () => {},
    },
    {
      label: "Comment / Question",
      type: "text",
      value: "",
      setValue: () => {},
    },
  ];

  return (
    <div className="">
      <Hero title="Contact Us" />
      <Container>
        <div className="w-full  flex justify-center gap-10 md:gap-12 xl:gap-[120px] flex-col md:flex-row py-10 md:py-[100px]">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
              <div className="text-[#006fe3] md:text-lg font-light">
                Contact information
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-4 flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <Email className="w-6 h-6 text-[#006fe3]" />

                <div className="text-[#090909] md:text-lg font-light">
                  Email: info@btcbots.us
                </div>
              </div>
            </div>
          </div>

          <div className="md:max-w-[450px]  xl:max-w-[600px] flex-col justify-start items-center gap-11 inline-flex">
            <div className="self-stretch flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch text-[#006fe3] text-[28px] md:text-[32px] xl:text-[40px]">
                Contact form
              </div>
              <div className="self-stretch text-[#090909] text-base">
                If you would like to send us a question or comment, please fill
                out the form below.
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
              <Button text="Send Message" size="lg" className="w-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
