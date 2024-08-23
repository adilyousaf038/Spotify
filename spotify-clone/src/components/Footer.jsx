import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full md:py-16 sm:py-10 md:px-6 sm:px-5 px-4 space-y-10">
      <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-1 items-start gap-7">
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide ">
            Company
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              About
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Jobs
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              For the Record
            </li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide ">
            Communities
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              For Artists
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Developers
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Advertising
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Investors
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Vendors
            </li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide ">
            Useful links
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Support
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Free Mobile App
            </li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide ">
            Spotify Plans
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Premium Individual
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Premium Duo
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Premium Family
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Premium Student
            </li>
            <li className="hover:text-neutral-50 hover:underline ease-in-out duration-7 cursor-pointer">
              Premium Free
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-3 flex items-end justify-end">
          <ul className="flex items-center gap-x-6">
            <li className="w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100 cursor-pointer">
              <FaTwitter />
            </li>
            <li className="w-10 h-10 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-full flex items-center justify-center text-neutral-100 text-base ease-in-out duration-100 cursor-pointer">
              <FaFacebook />
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[1px] bg-neutral-700/40"></div>

      <p className="text-sm text-neutral-400 font-normal">
        &copy; 2024 Spotify ADIL
      </p>
    </div>
  );
};

export default Footer;
