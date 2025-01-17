import { type FooterLinkType } from "@/interfaces/i-footer-link";
import Link from "next/link";
import { StyledFooterLink } from "./FooterLink.styled";

interface FooterLinkProps {
  heading: string;
  links: FooterLinkType[];
}
const FooterLink: React.FC<FooterLinkProps> = ({ heading, links }) => {
  return (
    <StyledFooterLink>
      <p>{heading}</p>

      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </StyledFooterLink>
  );
};

export default FooterLink;
