import React from "react";
import classes from "./Contact.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { CgPentagonTopRight } from "react-icons/cg";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";

const Contact = () => {
  return (
    <div>
      <div className={classes.contact}>
        <div className={classes["contact-top"]}>
          <div className={classes["contact-top-text"]}>
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              <br /> sed diam nonummy nibh euismod tincidunt ut laoreet
            </p>
            <button>Home ⨠ Contact Us</button>
          </div>
        </div>

        <div className={classes["contact-middle"]}>
          <div className={classes["contact-address"]}>
            <h1>
              Let's Start <br /> Something Great!
            </h1>
            <p className={classes["contact-address-text"]}>
              Proactively customize cross-media schemas rather than high-payoff
              <br />
              the customer service. Uniquely enable extensible niche.
            </p>
            <div className={classes["contact-address-info"]}>
              <div className={classes["contact-address-icon-1"]}>
                <IoLocationOutline color="white" size={20} />
              </div>
              <p>
                Akshya Nagar 1<sup>st</sup> Block 1<sup>st</sup> Cross, <br />
                Rammurthy Nagar, <br />
                Bangalore-560016
              </p>
            </div>
            <div className={classes["contact-address-info"]}>
              <div className={classes["contact-address-icon"]}>
                <ImMobile color="white" size={20} />
              </div>
              <p>+91 12345 67890</p>
            </div>
            <div className={classes["contact-address-info"]}>
              <div className={classes["contact-address-icon"]}>
                <MdOutlineEmail color="white" size={20} />
              </div>
              <p>info@company.com</p>
            </div>
          </div>
          <div className={classes["enquiry-form"]}>
            <h2>Need Help?</h2>
            <p>
              Proactively fashion world-class leadership vis-a-vis <br />
              enterprise e-services. Great strong leadership.
            </p>
            <form>
              <div className={classes["icon-div"]}>
                <i>
                  <FiUser color="grey" />
                </i>

                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className={classes["icon-div"]}>
                <i>
                  <MdOutlineEmail color="grey" />
                </i>

                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className={classes["icon-div"]}>
                <i>
                  <CgPentagonTopRight color="grey" />
                </i>

                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className={classes["icon-div"]}>
                <i>
                  <PiPencilSimpleLineDuotone color="grey" />
                </i>
                <textarea
                  name="message"
                  rows="6"
                  cols="20"
                  placeholder="Your message"
                />
              </div>
              <button type="submit">SEND INQUIRY</button>
            </form>
          </div>
        </div>

        <div className={classes["contact-bottom"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.626698800674!2d73.81907752501266!3d18.500560932589057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfebabe7ae85%3A0x3ea0f311fed26903!2sSIDDHARTH%20TOWER%2C%20Paschimanagri%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1703143813318!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="google-map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
