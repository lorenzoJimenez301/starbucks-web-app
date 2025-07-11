import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { FaArrowRight } from "react-icons/fa";
import Spline from "@splinetool/react-spline/next";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="container m-auto font-normal h-[45rem]">
        <article className="flex flex-col sm:flex-row w-full h-full">
          <div className=" w-2/3">
            <header>
              <Navbar className="bg-transparent! sm:p-8 w-max" fluid>
                <NavbarBrand href="https://flowbite-react.com">
                  <img
                    src="/images/starbucks-icon.svg"
                    className="mr-3 h-14 sm:h-14"
                    alt="Flowbite React Logo"
                  />
                </NavbarBrand>
                <div className="flex md:order-2">
                  <NavbarToggle className="cursor-pointer" />
                </div>
                <NavbarCollapse className="uppercase items-center sm:ml-14">
                  <NavbarLink
                    className="text-green-star! border-none textNav font-bold!"
                    href="#"
                  >
                    Menu
                  </NavbarLink>
                  <NavbarLink
                    className="text-green-star! border-none textNav font-bold!"
                    href="#"
                  >
                    Rewards
                  </NavbarLink>
                  <NavbarLink
                    className="text-green-star! border-none textNav font-bold!"
                    href="#"
                  >
                    Gift Card
                  </NavbarLink>
                </NavbarCollapse>
              </Navbar>
            </header>
            <div className="sm:flex sm:flex-col justify-center items-start space-y-4  uppercase font-extrabold h-2/3 ">
              <div>
                <h1 className="text-8xl ">Coffe Time</h1>
                <h2 className="text-8xl ">And More...</h2>
              </div>
              <button className="bg-green-star sm:py-2 sm:px-5 rounded-full w-44 cursor-pointer text-white buttonHero">
                Drink
              </button>
            </div>
          </div>
          <article className="w-2/3 ">
            <Spline scene="https://prod.spline.design/EFaVT-GXz6rC2xv6/scene.splinecode" />
          </article>
        </article>
      </section>
      <section className="bg-green-star flex-grow">
        <article className="container m-auto text-white uppercase flex justify-between items-center h-72 w-full">
          <div className="">
            <div className="w-max relative">
              <ul className="flex space-x-5 text-6xl absolute -top-32">
                <li className="bg-green-star p-4 rounded-full">
                  <BiCoffeeTogo />
                </li>
                <li className="bg-green-star p-4 rounded-full">
                  <MdDeliveryDining />
                </li>
                <li className="bg-green-star p-4 rounded-full">
                  <FaHeart />
                </li>
              </ul>
            </div>
            <div className="w-max flex flex-col items-start justify-center space-y-8">
              <p className="w-80">
                Crave-worthy pairings including our new, best-ever iced coffee.
                Restrictions apply.
              </p>
              <button className="uppercase underline flex justify-center items-center gap-3 cursor-pointer  group">
                See more{" "}
                <FaArrowRight className="group-hover:ml-2 transition-all duration-200" />
              </button>
            </div>
          </div>
          <div>
            <div className="bg-blue-600 w-max h-44 relative">
              <ul className="flex space-x-5 absolute">
                <li className="w-44 h-44 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-bottom"
                    src="/images/Photo 1.jpg"
                  />
                  New Image
                </li>
                <li className="w-44 h-44 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-bottom"
                    src="/images/Photo 2.jpg"
                  />
                  New Location
                </li>
                <li className="w-44 h-44 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-bottom"
                    src="/images/Photo 3.jpg"
                  />
                  Same Flavor
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
