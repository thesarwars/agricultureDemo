"use client";

import { Button, Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterSitemapLinks() {
  return (
    <Footer>
      <div className="w-full ms-64">
        <div className="grid w-full gap-36 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Contact us for more details" />
            <Button className="bg-agGreen mb-6">Read More</Button>
            <Footer.LinkGroup>
              <Footer.Link href="#">FAQ</Footer.Link>
              <Footer.Link href="#">Support</Footer.Link>
              <Footer.Link href="#">Useful Links</Footer.Link>
            </Footer.LinkGroup>
            <div className="mt-4 flex space-x-6 sm:mt-4 ">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
          <div className="w-52">
            <Footer.Title
              title="Department of Agricultural Extension
Government Of the People's Republic of Bangladesh"/>
          </div>
          <div>
            <Footer.Title title="Sign Up for Updates"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#"><Button className="bg-agGreen mb-6">Subscribe</Button></Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
