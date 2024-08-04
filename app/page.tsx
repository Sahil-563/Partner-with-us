import Image from "next/image";
import Link from "next/link";
import heroImg from "../assets/banner.jpg";
import { Button } from "@/components/ui/button";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="h-[100vh]">
        <div className="h-[75%] md:h-[55%] bg-slate-500 relative flex items-center justify-center">
          <Image
            src={heroImg}
            alt="hero image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
          <div className="lg:h-[50%] bg-transparent lg:w-[100%] h-[100%] w-[100%] text-white flex items-center justify-center absolute">
            <div className="px-4 py-4">
              <p className="md:text-5xl text-2xl">
                Partner with QueeFree
                <br />
                at 0% commission for lifetime
              </p>
              <p className="my-4">
                Get ads worth INR 500. Valid for new clinic partners in the
                selected cities.
              </p>
              <div>
                <Button className="bg-blue-500 text-white text-lg hover:bg-blue-700">
                  <Link href="/register"> Register your clinic</Link>
                </Button>
                <Button variant="secondary" className="md:ml-4 text-lg mt-4">
                  Login to view your existing clinics
                </Button>
              </div>
              <p className="mt-2">Need help? Contact +91 9999999999</p>
            </div>
          </div>
        </div>
        <div className="h-auto bg-white absolute md:top-[50%] lg:bottom-[2%] xl:bottom-[12%] md:left-1/4 md:w-1/2 w-full rounded-sm">
          <div className="px-4 py-8 text-center">
            <p className="text-3xl font-medium">
              Get started with online registering
            </p>
            <p className="text-textsecondary py-2">
              Please keep the documents ready for smooth signup
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-0 mt-8 md:mt-0 ml-0 md:ml-4 justify-evenly">
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex  gap-2">
                  <FaRegCheckCircle className="text-green-700" size={20} />
                  <p>Business License</p>
                </div>
                <div className="flex gap-2">
                  <FaRegCheckCircle className="text-green-700" size={20} />
                  <p>Healthcare Provider License</p>
                </div>
                <div className="flex  gap-2">
                  <FaRegCheckCircle className="text-green-700" size={20} />
                  <p>Tax Identification Number (TIN)</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-2">
                  <FaRegCheckCircle className="text-green-700" size={20} />
                  <p>Owner Identification</p>
                </div>
                <div className="flex gap-2">
                  <FaRegCheckCircle className="text-green-700" size={20} />
                  <p>PAN card copy</p>
                </div>
                <div className="flex gap-2">
                  <FaRegCheckCircle className="text-green-700" size={20} />
                  <p>Images of clinic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
