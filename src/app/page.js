import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


export default function Home() {
  return (
    <main>
      <header>
        <Navbar className="bg-transparent!" fluid>
          <NavbarBrand href="https://flowbite-react.com">
            <img
              src="/images/starbucks-icon.svg"
              className="mr-3 h-14 sm:h-9"
              alt="Flowbite React Logo"
            />
          </NavbarBrand>
          <div className="flex md:order-2">
            <NavbarToggle className="cursor-pointer" />
          </div>
          <NavbarCollapse className="uppercase">
            <NavbarLink className="text-green-star! border-none hover:text-white! pl-5" href="#">Menu</NavbarLink>
            <NavbarLink className="text-green-star! border-none hover:text-white! pl-5" href="#">Rewards</NavbarLink>
            <NavbarLink className="text-green-star! border-none hover:text-white! pl-5" href="#">Gift Card</NavbarLink>
            <NavbarLink className="text-green-star! border-none hover:text-white!" href="#"><Button className="cursor-pointer uppercase text-black! hover:text-white! outline-1 outline-black hover:outline-white bg-transparent!" pill>Find Store</Button></NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </header>
      <section></section>
    </main>
  );
}
