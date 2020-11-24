import styled from "styled-components";
import theme from "../../theme";

export const DashboardContent = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;

  div[class^="Box"] {
    width: 100%;
    height: 310px;
    border-radius: 4px;
  }
  .profile {
    .profile-avatar {
      width: 80px;
      height: 80px;
      border: 2px solid ${theme.palette.primary.main};
    }

    h2 {
      color: ${theme.palette.primary.main};
      font-size: 1.1rem;
      margin-top: 10px;
    }
  }
`;

export const AppointmentList = styled.ul`
  width: 100%;
  max-height: 310px;
  overflow: auto;
  margin-top: 20px;

  li {
    width: 100%;
    height: 65px;
    display: flex;
    padding: 0 20px 0 75px;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    transition: all .2s ease;
    cursor: pointer; 


    > div {
      width: 100%;
    }
    p {
      margin: 0;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      background: url("/media/icons/camera.svg") top center no-repeat;
      background-size: cover;
    }

    &:hover {
      background: ${theme.palette.primary.main};
      
      & * {
        color: white;
        fill: white;
      }

      & img {
        filter: brightness(0) invert(1);
      }
    }
  }
`;

export const PendingAppointment = styled.div`
  width: 100%;
  height: 210px;
  background: url("/media/bg_dash.png") top center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;

  padding-left: 30px;

  & * p {
    color: #fff;
    display: flex;
  }
  img {
    margin-right: 10px;
  }
  span {
    display: inline-block;
    margin: 0 20px;
    color: white
  }
  .avatar-therapist {
    margin-right: 10px;
  }
`;
