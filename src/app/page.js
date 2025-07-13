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
    <main className="flex flex-col min-w-sm">
      <section className="container m-auto">
        <article className="flex flex-col md:flex-row justify-between bg-[url('/images/background.jpg')] bg-cover md:bg-none h-[40rem] sm:h-[45rem]">
          <div className="h-full w-full bg-black/60 md:bg-white">
            <header>
              <Navbar
                className="p-5 sm:p-8 w-full md:w-max bg-green-star! md:bg-transparent!"
                fluid
              >
                <NavbarBrand href="https://flowbite-react.com">
                  <img
                    src="/images/starbucks-icon.svg"
                    className="mr-3 h-14 sm:h-16"
                    alt="Flowbite React Logo"
                  />
                </NavbarBrand>
                <div className="flex md:order-2">
                  <NavbarToggle className="cursor-pointer text-white!" />
                </div>
                <NavbarCollapse className="uppercase items-center bg-green-star! md:bg-transparent! hidden! md:block! md:pl-10">
                  <NavbarLink
                    className="md:text-green-star! text-white! border-none textNav font-bold! relative"
                    href="#"
                  >
                    Menu
                  </NavbarLink>
                  <NavbarLink
                    className="md:text-green-star! text-white! border-none textNav font-bold! relative"
                    href="#"
                  >
                    Rewards
                  </NavbarLink>
                  <NavbarLink
                    className="md:text-green-star! text-white! border-none textNav font-bold! relative"
                    href="#"
                  >
                    Gift Card
                  </NavbarLink>
                </NavbarCollapse>
                <NavbarCollapse className="uppercase items-center sm:ml-14 absolute! md:hidden! bg-green-star! top-[5rem] md:top-0 w-full! left-0 right-0">
                  <NavbarLink
                    className="md:text-green-star! text-white! border-none textNav font-bold! relative"
                    href="#"
                  >
                    Menu
                  </NavbarLink>
                  <NavbarLink
                    className="md:text-green-star! text-white! border-none textNav font-bold! relative"
                    href="#"
                  >
                    Rewards
                  </NavbarLink>
                  <NavbarLink
                    className="md:text-green-star! text-white! border-none textNav font-bold! relative"
                    href="#"
                  >
                    Gift Card
                  </NavbarLink>
                </NavbarCollapse>
              </Navbar>
            </header>
            <div className="h-full flex flex-col items-center md:items-start md:justify-start justify-center text-white md:text-black md:pt-36 min-w-max">
              <div className="flex flex-col gap-5 justify-center items-start font-extrabold md:mb-10 ">
                <div>
                  <h1 className="text-5xl sm:text-8xl">Coffe Time</h1>
                  <h2 className="text-5xl sm:text-8xl">And More...</h2>
                </div>
                <button className="bg-green-star sm:py-2 sm:px-5 rounded-full px-1 py-2 w-24 sm:w-44 cursor-pointer text-white buttonHero z-20 relative">
                  Drink
                </button>
              </div>
            </div>
          </div>
          <article className="h-full w-full hidden md:block">
            <Spline scene="https://prod.spline.design/EFaVT-GXz6rC2xv6/scene.splinecode" />
          </article>
        </article>
      </section>
      <section className="bg-green-star flex-grow min-w-sm py-20">
        <article className="container m-auto text-white uppercase flex flex-col sm:flex-row justify-between items-center h-max sm:h-72 w-full px-32 md:px-0  gap-32 sm:gap-0">
          <div>
            <div className="w-max relative">
              <ul className="sm:flex space-x-5 text-5xl absolute hidden -top-32">
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
            <div>
              <ul className="flex flex-col sm:flex-row space-x-5 font-bold">
                <li className="flex flex-col items-center space-y-5">
                  <div className="w-44 h-max overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-44 object-cover object-bottom hover:scale-110 transition duration-300"
                      src="/images/Photo 1.jpg"
                    />
                  </div>
                  <p>New Image</p>
                </li>
                <li className="w-44 h-max overflow-hidden flex flex-col items-center space-y-5">
                  <div className="w-44 h-max overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-44 object-cover object-bottom rounded-2xl hover:scale-110 transition duration-300"
                      src="/images/Photo 2.jpg"
                    />
                  </div>
                  <p>New Location</p>
                </li>
                <li className="w-44 h-max overflow-hidden flex flex-col items-center space-y-5">
                  <div className="w-44 h-max overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-44 object-cover object-bottom rounded-2xl hover:scale-110 transition duration-300"
                      src="/images/Photo 3.jpg"
                    />
                  </div>
                  <p>Same Flavor</p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
