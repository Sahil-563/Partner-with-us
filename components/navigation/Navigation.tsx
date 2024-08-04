import React from "react";
import { Button } from "@/components/ui/button";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
export default function Navigation() {
  return (
    <>
      <div className="w-full h-20 bg-white shadow-top-only">
        <div className="flex justify-evenly items-center w-full h-full">
          {" "}
          <Button className="bg-white text-black text-lg hover:bg-blue-100 border border-blue-500">
            <span className="text-center">
              <FaCaretLeft className="inline-block align-middle text-blue-500" />
              <span className="inline-block align-middle text-blue-500">
                Go Back
              </span>
            </span>
          </Button>
          <Button className="bg-blue-500 text-white text-lg hover:bg-blue-700">
            <span className="text-center">
              <span className="inline-block align-middle">Next</span>
              <FaCaretRight className="inline-block align-middle" />
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}
