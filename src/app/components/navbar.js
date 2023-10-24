"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function NavbarWithDropdown() {
    const router = usePathname()
    const navlinks = [
        {path: '/', label: 'Home'},
        {path: '/contact', label: 'Contact'},
        {path: '/service', label: 'Services'},
    ]
  return (
    <Navbar fluid rounded className="bg-nav-gray">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9 ms-5"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex gap-11 items-center">
        <div className="flex md:order-2 mr-8">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link href="#" className="text-gray-50">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about"><span className="text-gray-50 hover:text-yellow-600">About</span></Navbar.Link>
          <Navbar.Link href="#" className="text-gray-50">Services</Navbar.Link>
          <Navbar.Link href="#" className="text-gray-50">Pricing</Navbar.Link>*/}
          {/* <Navbar.Link href="/pricing"><div className={`text-sm font-medium ${router === '/pricing'?"border-b-2 border-agGreen text-gray-50":"text-gray-100"}`}>Pricing</div></Navbar.Link> */}
          {navlinks.map(({path, label})=>(
            <Navbar.Link key={path} href={path} passHref><div className={`text-sm font-medium ${router === path?"border-b-2 border-gap-5 border-agGreen text-gray-50 bg-bgGray px-2 py-0.25 rounded-sm":"text-gray-50"}`}>{label}</div></Navbar.Link>
          ))}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
