"use client";
import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
`;

export const StyledFooter = styled.footer`
  background: #f7f7f8;
  border-top: 1px solid #e9e9e9;

  .footer-container {
    padding: 6.3125rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;

    .footer-item-one {
      p {
        font-size: 0.875rem;
        line-height: 175%;
        letter-spacing: 0.48px;
        color: #7a7a7a;
      }

      div.contact-data {
        ${flexCenter}
        gap:9.52px;
        margin-top: 1.125rem;

        &:nth-child(3) {
          margin-top: 1.8125rem;
        }

        svg {
          color: var(--red-50);
        }
      }
    }

    .footer-item-2 {
      p {
        font-family: "Raleway", serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
      }

      div.email-input {
        position: relative;
        margin-top: 1.0875rem;

        input {
          outline: none;
          border: 1px solid #e9e9e9;
          border-radius: 0.3125rem;
          background: #ffffff;
          padding: 1rem 0.8438rem;
          font-family: "Poppins";
          font-weight: 400;
          font-size: 0.875rem;

          width: 100%;

          &::placeholder {
            color: #7a7a7a;
          }
        }

        svg {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }

      .socials {
        ${flexCenter}
        gap: 4px;
        margin-top: 1.5rem;
      }

      .food-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(73px, 73px));
        gap: 0.75rem;
        margin-top: 1.5rem;
      }
    }
  }

  div.copyright {
    border-top: 1px solid #e9e9e9;
    padding: 1.2125rem;

    p {
      text-align: center;
      font-size: 0.875rem;
      line-height: 120%;
    }

    span {
      color: var(--red-50);
    }
  }
`;
