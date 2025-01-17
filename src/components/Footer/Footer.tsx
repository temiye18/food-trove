import { Container } from "@/ui";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Logo, Facebook, Twitter, Dribble, Instagram } from "@/assets/svgs";
import { companyLinks, categoryLinks } from "@/constants";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { StyledFooter } from "./Footer.styled";
import FooterLink from "./FooterLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <Container>
        <div className="footer-container">
          <div className="footer-item-one">
            <Image src={Logo} width={146.09} height={54.87} alt="logo" />
            <p>
              FoodTrove is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>

            <div className="contact-data">
              <GrLocation />{" "}
              <p>
                51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
                USA.
              </p>
            </div>

            <div className="contact-data">
              <MdOutlineMarkEmailRead /> <p>example@email.com</p>
            </div>

            <div className="contact-data">
              <FiPhone /> <p>+91 123 4567890</p>
            </div>
          </div>

          <FooterLink heading="Company" links={companyLinks} />

          <FooterLink heading="Category" links={categoryLinks} />

          <div className="footer-item-2">
            <p>Subscribe Our Newsletter</p>
            <div className="email-input">
              <input type="email" placeholder="Enter your email" />
              <IoIosSend size={17.68} />
            </div>

            <div className="socials">
              <Image
                src={Facebook}
                alt="facebook icon"
                width={35}
                height={35}
              />
              <Image src={Twitter} alt="twitter icon" width={35} height={35} />
              <Image src={Dribble} alt="dribble icon" width={35} height={35} />
              <Image
                src={Instagram}
                alt="instagram icon"
                width={35}
                height={35}
              />
            </div>

            <div className="food-gallery">
              <Image
                src="/images/food_one.png"
                alt="food picture"
                width={73.59}
                height={73.59}
              />
              <Image
                src="/images/food_two.png"
                alt="food picture"
                width={73.59}
                height={73.59}
              />
              <Image
                src="/images/food_three.png"
                alt="food picture"
                width={73.59}
                height={73.59}
              />
              <Image
                src="/images/food_four.png"
                alt="food picture"
                width={73.59}
                height={73.59}
              />
              <Image
                src="/images/food_five.png"
                alt="food picture"
                width={73.59}
                height={73.59}
              />
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {currentYear} <span>FoodTrove</span>, All rights reserved.
          </p>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
