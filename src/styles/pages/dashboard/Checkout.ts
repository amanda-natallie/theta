import styled from "styled-components";

export const Checkout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 202px);

  .checkout-box {
    max-width: 550px;
    justify-content: center;

     span {
      display: block;
      text-align: center;
    }
    p {
      margin: 10px;
      img {
        margin-right: 10px;
      }
      font-size: 1rem;
    }
  }
`;
