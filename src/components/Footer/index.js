import React from "react";
import { Container, Grid, Icon, Icons, List, Social } from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Grid>
        <div>
          <List>
            <li>About Us</li>
            <li>Feedback</li>
            <li>Community</li>
          </List>
        </div>
        <div>
          <List>
            <li>Trust, Safety & Security</li>
            <li>Help & Support</li>
            <li>Upwork Foundation</li>
          </List>
        </div>
        <div>
          <List>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>CA Notice at Collection</li>
            <li>Cookie Settings</li>
          </List>
        </div>
        <div>
          <List>
            <li>Accessibility</li>
            <li>Desktop App</li>
            <li>Cookie Policy</li>
            <li>Enterprise Solutions</li>
          </List>
        </div>
      </Grid>
      <Social>
        <Icons>
          Follow Us
          <Icon>
            <FaFacebookF />
          </Icon>
          <Icon>
            <FaLinkedinIn />
          </Icon>
          <Icon>
            <FaTwitter />
          </Icon>
          <Icon>
            <FaYoutube />
          </Icon>
          <Icon>
            <FaInstagram />
          </Icon>
        </Icons>
        <Icons>
          Mobile app
          <Icon>
            <FaApple />
          </Icon>
          <Icon>
            <FaAndroid />
          </Icon>
        </Icons>
      </Social>
      <div>© 2015 - 2023 Topwork Global Inc.</div>
    </Container>
  );
};

export default Footer;
