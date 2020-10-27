import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 12px;
    font-weight: 300;
    text-decoration: underline;
    color: #828282;
  }
`;

export const StarRatingDiv = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: #f2c94c;
    font-size: 16px;
    font-weight: 700;
    margin-left: 4px;
  }
`;
