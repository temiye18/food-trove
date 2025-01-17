"use client";

import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);

  div.navbar-one {
    padding: 1rem 0;
    nav {
      ${flexCenter}
      justify-content: space-between;

      img {
        cursor: pointer;
      }

      ul {
        ${flexCenter}
        gap: 3.9375rem;

        li {
          cursor: pointer;
        }
        li a,
        li span {
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 150%;
          color: var(--black);
        }

        li.drop-down {
          ${flexCenter}
        }
      }

      div.contact {
        ${flexCenter}
        gap: .3125rem
      }
    }
  }

  div.navbar-two {
    ${flexCenter}
    justify-content: space-between;
    padding: 1.25rem 0;

    .input-box {
      ${flexCenter};

      .sub-input {
        ${flexCenter}
        border: 1px solid #64b496;
        border-right: none;
        border-radius: 5px 0 0 5px;
      }

      input {
        width: 400px;
        padding: 0.875rem 1rem;
        font-family: "Poppins";
        font-weight: 400;
        font-size: 0.8125rem;
        border: none;
        outline: none;
        border-radius: 5px 0 0 5px;

        &::placeholder {
          color: #7a7a7a;
        }
      }

      .category {
        ${flexCenter}
        gap: .75rem;
        padding: 0.875rem 0.875rem;
        border-left: 1px solid #64b496;

        span {
          font-size: 0.8125rem;
          color: #212529;
        }

        svg {
          color: #212529;
        }
      }

      button {
        all: unset;
        text-align: center;
        cursor: pointer;
        padding: 0.8125rem 1rem;
        background-color: var(--red-50);
        border-radius: 0 0.3125rem 0.3125rem 0;
        color: var(--white);
      }
    }

    ul {
      ${flexCenter}
      gap: 1.85rem;

      li a {
        ${flexCenter}
        gap: .3125rem;
        color: var(--black);
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 100%;
      }
    }
  }
`;
