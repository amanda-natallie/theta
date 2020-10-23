import Link from "next/link";
import React from "react";
import { IconButton } from "../../styles/components/Button";
import theme from "../../styles/theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import PlaySvgIcon from "../icons/PlaySvgIcon";
import styled from "styled-components";

const BackButton = ({ link, bordered }: interfaceConstant.BackButtonProps) => {

const LocalWrapper = styled.span`
  & * {
    box-sizing: unset;
  }

  & a {
    margin: 0;
    border: ${bordered ? "8px solid white" : 0};
  }

  & a:hover {
    box-shadow: 1px 4px 12px rgba(118, 66, 255, 0.7);
  }

  & svg {
    margin: 3px 0 0 -6px;
    transform: rotateY(180deg);
  }
`;

  return (
    <LocalWrapper>
      <Link passHref href={link}>
        <IconButton color="white" bg={theme.palette.primary.main}>
          <PlaySvgIcon width="16" height="19" />
        </IconButton>
      </Link>
    </LocalWrapper>
  );
};

export default BackButton;
