"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Register() {
  //States
  const [clinicName, setClinicName] = useState<string>("");
  const [clinicAddress, setClinicAddress] = useState<string>("");

  const [mobileNumber, setMobileNumber] = useState<number>();
  const [landlineNumber, setLandlineNumber] = useState<number>();

  const [ownerName, setOwnerName] = useState<string>("");
  const [ownerEmail, setOwnerEmail] = useState<string>("");

  const [alternateNumber, setAlternateNumber] = useState<number>();

  const [step, setStep] = useState("step1");
  const [option, setOption] = useState("option1");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOpeningTime, setOpeningTime] = useState<string>("");
  const [selectedClosingTime, setClosingTime] = useState<string>("");

  const options: string[] = [
    "Primary care clinics",
    "Specialized clinics",
    "Sexual health clinics",
    "Mental health clinics",
    "Addiction services clinics",
    "Community health centers",
    "Retail clinics",
    "Rural health clinics",
    "Dialysis clinics",
  ];

  const weekDays: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [selectedWeekDays, setSelectedWeekDays] = useState(weekDays);

  const documentsArray: string[] = [
    "Business License",
    "Healthcare Provider License",
    "Tax Identification Number (TIN)",
    "Owner Identification",
    "PAN card copy",
    "Images of clinic",
  ];

  const [files, setFiles] = useState({});

  //Functions

  const handleOptionChange = (option: string) => {
    setOption(option);
  };
  const handleStepChange = (step: string) => {
    setStep(step);
  };
  const handleCheckboxChange = (
    isChecked: boolean,
    option: string,
    type: string
  ) => {
    if (type === "clinicType") {
      if (isChecked) {
        setSelectedOptions((prev) => [...prev, option]);
      } else {
        setSelectedOptions((prev) => prev.filter((item) => item !== option));
      }
    } else {
      if (!isChecked) {
        setSelectedWeekDays((prev) => prev.filter((item) => item !== option));
      } else {
        setSelectedWeekDays((prev) => [...prev, option]);
      }
    }
  };
  const handleTimeChange = (timeSlot: string, type: "opening" | "closing") => {
    if (type === "opening") {
      setOpeningTime(timeSlot);
    } else {
      setClosingTime(timeSlot);
    }
  };
  const handleChange = (e: any, document: any) => {
    const selectedFile = e.target.files[0];
    setFiles((prevFiles) => ({
      ...prevFiles,
      [document]: selectedFile,
    }));
  };
  const handleCheckChange = (e: any) => {
    if (e.target.checked) {
      setAlternateNumber(mobileNumber);
    } else {
      setAlternateNumber(0);
    }
  };

  //Time slot generation
  const generateTimeSlots = () => {
    const timeSlots = [];
    const periods = ["AM", "PM"];

    for (let period of periods) {
      for (let hour = 1; hour <= 12; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          let hourDisplay = hour === 1 ? 12 : hour - 1;
          let minuteDisplay = minute === 0 ? "00" : minute;
          timeSlots.push(`${hourDisplay}:${minuteDisplay} ${period}`);
        }
      }
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  const renderStepContent = () => {
    switch (step) {
      case "step1":
        return (
          <div className="min-w-[450px]">
            <p className="text-3xl mb-12">Clinic Information</p>
            <Accordion type="single" className="max-w-[500px]" collapsible>
              <AccordionItem
                value="item-1"
                className="min-h-[100px] border-gray-300 border rounded-sm"
              >
                <AccordionTrigger className="px-4 py-4">
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-medium">Clinic Details</p>
                    <p className="text-textsecondary text-sm">
                      Name, Address, Location
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-4">
                    <div>
                      <Input
                        type="name"
                        placeholder="Clinic name"
                        onChange={(e) => {
                          setClinicName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-6">
                      <Input
                        type="name"
                        placeholder="Clinic complete address"
                        onChange={(e) => {
                          setClinicAddress(e.target.value);
                        }}
                      />
                    </div>
                    <p className="mt-6 px-2 text-textprimary text-[16px]">
                      Please place the pin accurately at your clinic’s location
                      on the map
                    </p>
                    <p className="mt-2 px-2 text-textsecondary text-xs">
                      This will help your customers and Zomato riders to locate
                      your store
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="w-[500px]" collapsible>
              <AccordionItem
                value="item-1"
                className="min-h-[100px] mt-[50px] border-gray-300 border rounded-sm"
              >
                <AccordionTrigger className="px-4 py-4">
                  <div className="flex flex-col items-start">
                    <p className="text-2xl">Contact number at clinic</p>
                    <p className="text-textsecondary text-sm">
                      Your customers will call on this number for general
                      enquiries
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-4">
                    <div className="flex w-full  items-center md:space-x-2 ">
                      <div className="relative w-full">
                        <Input
                          type="name"
                          placeholder="Mobile number at clinic"
                          className="pl-10"
                          onChange={(e) => {
                            setMobileNumber(parseInt(e.target.value));
                          }}
                        />
                        <div className="absolute text-center top-[10.5px] left-2">
                          +91
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="bg-blue-500 text-white  hover:bg-blue-700"
                        size={"sm"}
                      >
                        Submit
                      </Button>
                    </div>
                    <div className="text-center mt-4">
                      <p>Or</p>
                    </div>
                    <div className="flex w-full  mt-4 items-center md:space-x-2 ">
                      <div className=" relative w-full">
                        <Input
                          type="text"
                          className="text-center pl-40"
                          placeholder="Landline number"
                        />
                        <div className="absolute text-center top-[10.5px] left-2">
                          +91
                        </div>
                        <div className="absolute text-center top-0 left-10 w-1/4">
                          <Input
                            type="text"
                            placeholder="STD code"
                            className="w-full rounded-none text-center focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="bg-blue-500 text-white  hover:bg-blue-700"
                        size={"sm"}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="w-[500px]" collapsible>
              <AccordionItem
                value="item-1"
                className="min-h-[100px] mt-[50px] border-gray-300 border rounded-sm"
              >
                <AccordionTrigger className="px-4 py-4">
                  <div className="flex flex-col items-start">
                    <p className="text-2xl">Clinic owner details</p>
                    <p className="text-textsecondary text-sm">
                      These will be used to share revenue related communications
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-4">
                    <div className="flex items-center gap-1 mb-2">
                      <input
                        type="checkbox"
                        id="number"
                        name="number"
                        className="cursor-pointer"
                        onChange={(e) => {
                          handleCheckChange(e);
                        }}
                      />
                      <label htmlFor="html">Same as clinic mobile no.</label>
                    </div>
                    <div className="flex w-full  items-center md:space-x-2 ">
                      <div className="relative w-full">
                        <Input
                          type="name"
                          placeholder="Mobile number of owner"
                          value={alternateNumber}
                          className="pl-10"
                        />
                        <div className="absolute text-center top-[10.5px] left-2">
                          +91
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="bg-blue-500 text-white  hover:bg-blue-700"
                        size={"sm"}
                      >
                        Submit
                      </Button>
                    </div>
                    <div className="flex w-full  items-center mt-6 gap-2">
                      <Input
                        type="text"
                        placeholder="Clinic owner full name"
                        className="pl-10"
                      />
                      <Input
                        type="text"
                        placeholder="Clinic owner email"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );
      case "step2":
        return (
          <div className="min-w-[450px]">
            <p className="text-3xl mb-12">Clinic Types & Timings</p>
            <Accordion type="single" className="max-w-[500px]" collapsible>
              <AccordionItem
                value="item-1"
                className="min-h-[100px] border-gray-300 border rounded-sm"
              >
                <AccordionTrigger className="px-4 py-4">
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-medium">Establishment type</p>
                    <p className="text-textsecondary text-sm">
                      Select most relevant category for your clinic type
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-4">
                    <RadioGroup>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="option-one"
                          id="option-one"
                          className="text-customBlue"
                          onClick={() => {
                            handleOptionChange("option1");
                          }}
                        />
                        <Label htmlFor="option-one" className="text-lg">
                          Home Visits & In-Clinic Treatments
                        </Label>
                      </div>
                      <p className="ml-6 text-textsecondary">
                        Select this option when you have a place for pateints
                        for clinic and also want to activate home visits to
                        treat pateints
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <RadioGroupItem
                          value="option-two"
                          id="option-two"
                          className="text-customBlue"
                          onClick={() => {
                            handleOptionChange("option2");
                          }}
                        />
                        <Label htmlFor="option-two" className="text-lg">
                          In-Clinic Only
                        </Label>
                      </div>
                      <p className="ml-6 text-textsecondary">
                        Select this option when you have home visits to treat
                        pateints
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <RadioGroupItem
                          value="option-three"
                          id="option-three"
                          className="text-customBlue"
                          onClick={() => {
                            handleOptionChange("option3");
                          }}
                        />
                        <Label htmlFor="option-three" className="text-lg">
                          Home Visits Only
                        </Label>
                      </div>
                      <p className="ml-6 text-textsecondary">
                        Select this option when you have a clinic for pateints
                      </p>
                    </RadioGroup>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="w-[500px]" collapsible>
              <AccordionItem
                value="item-1"
                className="min-h-[100px] mt-[50px] border-gray-300 border rounded-sm"
              >
                <AccordionTrigger className="px-4 py-4">
                  <div className="flex flex-col items-start">
                    <p className="text-2xl">Type of clinic</p>
                    <p className="text-textsecondary text-sm">
                      Select options which best describe you.
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-4 grid grid-cols-3 gap-4">
                    {options?.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2 "
                      >
                        <Checkbox
                          className="data-[state=checked]:bg-customBlue"
                          onCheckedChange={(isChecked: boolean) => {
                            handleCheckboxChange(
                              isChecked,
                              option,
                              "clinicType"
                            );
                          }}
                        />
                        <label
                          htmlFor={option}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" className="w-[500px]" collapsible>
              <AccordionItem
                value="item-1"
                className="min-h-[100px] mt-[50px] border-gray-300 border rounded-sm"
              >
                <AccordionTrigger className="px-4 py-4">
                  <div className="flex flex-col items-start">
                    <p className="text-2xl">Clinic operational hours</p>
                    <p className="text-textsecondary text-sm">
                      Mark clinic opening and closing hours
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-4">
                    <div className="w-full grid grid-cols-2 gap-10">
                      <div className="flex flex-col items-center">
                        <p className="text-textsecondary mb-2">Opens at</p>
                        <div>
                          <Select
                            onValueChange={(timeSlot) =>
                              handleTimeChange(timeSlot, "opening")
                            }
                          >
                            <SelectTrigger className="w-[130px]">
                              <SelectValue
                                className="placeholder:text-center"
                                placeholder="-- : --"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {timeSlots.map((timeSlot, index) => (
                                  <SelectItem key={index} value={timeSlot}>
                                    {timeSlot}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-textsecondary mb-2">Closes at</p>
                        <div>
                          <Select
                            onValueChange={(timeSlot) =>
                              handleTimeChange(timeSlot, "closing")
                            }
                          >
                            <SelectTrigger className="w-[130px]">
                              <SelectValue
                                className="placeholder:text-center"
                                placeholder="-- : --"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {timeSlots.map((timeSlot, index) => (
                                  <SelectItem key={index} value={timeSlot}>
                                    {timeSlot}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg">Mark open days</p>
                      <p className="text-xs text-textsecondary">
                        Don’t forget to uncheck your off-day
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 w-full gap-10">
                      {weekDays?.map((day, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-2 mb-2 "
                          >
                            <Checkbox
                              defaultChecked={true}
                              className="data-[state=checked]:bg-customBlue"
                              onCheckedChange={(isChecked: boolean) => {
                                handleCheckboxChange(
                                  isChecked,
                                  day,
                                  "OpeningDays"
                                );
                              }}
                            />
                            <label
                              htmlFor={day}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {day}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );
      case "step3":
        return (
          <div className="w-full">
            <p className="text-3xl mb-2">Upload Images</p>
            <p className=" mb-6 ml-2 text-sm text-textsecondary">
              Preferred documents upload type should be in .pdf and .docs
            </p>
            <div className="px-4 py-4 h-full w-full border ">
              {documentsArray?.map((eachDocument) => (
                <div
                  key={eachDocument}
                  className="grid w-full max-w-sm items-center gap-1.5 mb-6"
                >
                  <label htmlFor={eachDocument}>{eachDocument}</label>
                  <Input
                    id={eachDocument}
                    type="file"
                    onChange={(e) => handleChange(e, eachDocument)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full top-0">
        <Header />
        <Separator />
      </div>
      <div className="w-full flex justify-center gap-10 flex-wrap my-8 h-auto">
        <div className="w-[240px] h-[350px] bg-white shadow-each-corner rounded-md ">
          <p className="px-4 py-2 text-lg font-medium">
            1. Create your
            <br /> Clinic page
          </p>
          <Separator />
          <div className="my-6 relative ">
            <div
              className={cn(
                "w-0.5",
                "h-14",
                "rounded-sm",
                "absolute",
                "bg-customBlue",
                step === "step1"
                  ? "top-0"
                  : step === "step2"
                  ? "top-20"
                  : "top-40"
              )}
            ></div>

            <div>
              <div
                className="flex gap-4 mx-3 items-center cursor-pointer"
                onClick={() => {
                  handleStepChange("step1");
                }}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full text-white text-center flex-shrink-0 flex items-center justify-center",
                    step === "step1" ? "bg-customBlue" : "bg-customGray"
                  )}
                >
                  <span className="text-xs text-center">1</span>
                </div>
                <div className="text-sm">
                  <p>Clinic Information</p>
                  <p className="text-textsecondary text-xs">
                    Clinic name, address, contact no., owner details
                  </p>
                </div>
              </div>
              <div
                className="flex gap-4 mx-3 items-center mt-8 cursor-pointer"
                onClick={() => {
                  handleStepChange("step2");
                }}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full text-white text-center flex-shrink-0 flex items-center justify-center",
                    step === "step2" ? "bg-customBlue" : "bg-customGray"
                  )}
                >
                  <span className="text-xs text-center">2</span>
                </div>
                <div className="text-sm">
                  <p>Clinic Type & Timings</p>
                  <p className="text-textsecondary text-xs">
                    Establishment & cuisine type, opening hours
                  </p>
                </div>
              </div>
              <div
                className="flex gap-4 mx-3 items-center mt-8 cursor-pointer"
                onClick={() => {
                  handleStepChange("step3");
                }}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full text-white text-center flex-shrink-0 flex items-center justify-center",
                    step === "step3" ? "bg-customBlue" : "bg-customGray"
                  )}
                >
                  <span className="text-xs text-center">3</span>
                </div>
                <div className="text-sm">
                  <p>Upload Images</p>
                  <p className="text-textsecondary text-xs">
                    Clinic, medicine, clinic images
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[450px] ">{renderStepContent()}</div>
      </div>

      <div className="h-20 "></div>
      <div className=" fixed w-full bottom-0">
        <Navigation />
      </div>
    </div>
  );
}
