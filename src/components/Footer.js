import React from "react";
import classes from "./Footer.module.css";
import { FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={classes.footer}>
          <div className={classes["footer-up"]}>
            <div className={classes.social}>
              <h5>FOLLOW US. </h5>
              <div className={classes["social-icons"]}>
                <div>
                  <FaLinkedinIn color="black" />
                </div>
                <div>
                  <FaTelegramPlane color="black" />
                </div>
                <div>
                  <FaTwitter color="black" />
                </div>
              </div>
              <div className={classes.website}>
                <div>
                  <IoIosGlobe color="black" />
                </div>
                <p>https://company.com</p>
              </div>
            </div>

            <div className={classes.services}>
              <h5>OUR SERVICES.</h5>
              <div className={classes["services-sections"]}>
                <div className={classes["services-1"]}>
                  <p>⨠ Lorem ipsum dolor</p>
                  <p>⨠ Lorem ipsum dolor</p>
                  <p>⨠ Lorem ipsum dolor</p>
                  <p>⨠ Lorem ipsum dolor</p>
                </div>
                <div className={classes["services-2"]}>
                  <p>⨠ Lorem ipsum dolor</p>
                  <p>⨠ Lorem ipsum dolor</p>
                  <p>⨠ Lorem ipsum dolor</p>
                  <p>⨠ Lorem ipsum dolor</p>
                </div>
              </div>
            </div>

            <div className={classes["get-intouch"]}>
              <h5>GET IN TOUCH.</h5>
              <div className={classes.address}>
                <i>
                  <IoLocationOutline />
                </i>
                <p>
                  Akshya Nagar 1st Block 1st Cross, <br /> Rammurthy Nagar,
                  <br />
                  Bangalore-560016
                </p>
              </div>
              <div className={classes["horizontal-line"]}></div>
              <div className={classes.address}>
                <i>
                  <ImMobile />
                </i>
                <p className={classes.phoneno}>Phone : +91 12345 67890</p>
              </div>
              <div className={classes.address}>
                <i>
                  <MdOutlineEmail />
                </i>
                <p className={classes.email}>Email : info@company.com</p>
              </div>
            </div>
          </div>

          <div className={classes["footer-down"]}>
            <p>Copyright &copy; 2023, iAssureIT All Rights Reserved</p>
            <p>
              Designed & Developed By{" "}
              <span>IAssure Information Technologies Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
