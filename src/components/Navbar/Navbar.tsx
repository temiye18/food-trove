import { Container } from "@/ui";
import Image from "next/image";
import { Hamburger, Logo } from "@/assets/svgs";
import { RxCaretDown } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { StyledHeader } from "./Navbar.styled";
import Link from "next/link";

const Navbar = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="navbar-one">
          <nav>
            <Image src={Hamburger} width={35} height={35} alt="menu bar" />

            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="drop-down">
                <span>Category</span> <RxCaretDown />
              </li>
              <li className="drop-down">
                <span>Products</span> <RxCaretDown />
              </li>
              <li className="drop-down">
                <span>Pages</span> <RxCaretDown />
              </li>
              <li className="drop-down">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
            <div className="contact">
              <FiPhone />
              <p>+123 ( 456 ) ( 7890 )</p>
            </div>
          </nav>
        </div>

        <div className="navbar-two">
          <Image src={Logo} width={146.09} height={54.87} alt="logo" />

          <div className="input-box">
            <div className="sub-input">
              <input type="text" placeholder="Search For Items..." />
              <div className="category">
                <span>All Categories</span>
                <GoChevronDown size={12} />
              </div>
            </div>
            <button>
              <IoSearch />
            </button>
          </div>

          <nav>
            <ul>
              <li>
                <Link href="/profile">
                  <BsPerson size={21} />
                  <span>Account</span>
                </Link>
              </li>
              <li>
                <Link href="/wishlist">
                  <MdFavoriteBorder size={21} />
                  <span>Wishlist</span>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <MdOutlineShoppingCart size={21} />
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Navbar;
