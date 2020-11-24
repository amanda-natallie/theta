import React from "react";
import PageWrapper from "../../components/layout/PageWrapper";
import BackButton from "../../components/general/BackButton";
import { FlexBox } from "../../styles/components/FlexBox";
import { CardBox } from "../../styles/components/Box";
import { TitleInfo } from "../../styles/components/TitleInfo";
import { TextInformation } from "../../styles/components/TextInformation";
import { Container, Grid } from "@material-ui/core";
import { Title } from "../../styles/components/Typography";
import { Divider } from "../../styles/components/Divider";
import { HeaderWithBackButtonWrapper } from "../../styles/pages/Support";
import Link from "next/link";

const information = () => {
  return (
    <>
      <PageWrapper>
        <Container
          maxWidth="lg"
          style={{ justifyContent: "space-between", marginTop: "20px" }}
        >
          <Grid container>
            <HeaderWithBackButtonWrapper>
              <BackButton link="/" />
              <Title>Suporte</Title>
              <div />
            </HeaderWithBackButtonWrapper>
          </Grid>
          <Link passHref href="/suporte/nosso-projeto">
            <CardBox>
              <TextInformation>
                <image style={{ margin: "2px" }}>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M18.6453 34.576C15.0305 32.3432 11.6702 29.7105 8.62582 26.726C6.47664 24.5951 4.83528 21.9932 3.82718 19.1192C2.02593 13.5141 4.1227 7.10834 9.97676 5.20663C13.0667 4.23626 16.4272 4.83194 19.0112 6.80807C21.5961 4.83415 24.9555 4.23866 28.0456 5.20663C33.8996 7.10834 36.0105 13.5141 34.2092 19.1192C33.2093 21.9905 31.5777 24.5922 29.4387 26.726C26.3916 29.7073 23.0317 32.3397 19.4193 34.576L19.0252 34.8333L18.6453 34.576Z"
                      fill="#7643FF"
                    />
                    <path
                      d="M19.0166 34.8327L18.6447 34.5753C15.0254 32.3428 11.6604 29.7101 8.61113 26.7254C6.45175 24.5975 4.80062 21.9953 3.78434 19.1185C1.99716 13.5135 4.09393 7.10772 9.94799 5.206C13.0379 4.23563 16.4427 4.83177 19.0166 6.82445V34.8327Z"
                      fill="#7643FF"
                    />
                    <path
                      d="M28.8636 15.8321C28.5455 15.8116 28.2493 15.6527 28.0444 15.3925C27.8394 15.1323 27.7437 14.7937 27.7797 14.4561C27.8142 13.344 27.1814 12.3318 26.2056 11.938C25.5868 11.7691 25.2121 11.099 25.3669 10.4381C25.5138 9.78788 26.1227 9.38358 26.7346 9.52993C26.8119 9.54275 26.8863 9.57074 26.954 9.61249C28.9105 10.3654 30.1772 12.3918 30.0764 14.6074C30.0732 14.9433 29.9423 15.2633 29.7136 15.4942C29.485 15.7251 29.1782 15.847 28.8636 15.8321Z"
                      fill="#7643FF"
                    />
                  </svg>
                </image>
                <FlexBox column>
                  <TitleInfo>Oque é nosso Projeto</TitleInfo>
                  <TitleInfo>
                    <h1>Conheça um pouco mais sobre o ThetaHealing Brasil.</h1>
                  </TitleInfo>
                </FlexBox>
              </TextInformation>
              <image>
                <svg
                  width="71"
                  height="28"
                  viewBox="0 0 71 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9569 0.00175858C28.2451 0.00175858 27.6628 0.58411 27.6628 1.29587V13.3311C27.6628 14.9488 27.0157 16.5017 25.851 17.6664C24.6863 18.8311 23.1334 19.4782 21.5157 19.4782H16.2746C15.5628 19.4782 14.9805 20.0605 14.9805 20.7723C14.9805 21.4841 15.5628 22.0664 16.2746 22.0664H21.5157C23.8451 22.0664 26.0451 21.1605 27.6628 19.5429C29.2804 17.9252 30.1863 15.7252 30.1863 13.3958V1.3606C30.251 0.584133 29.6686 0.00175858 28.9569 0.00175858Z"
                    fill="#7643FF"
                  />
                  <path
                    d="M28.9571 0.00266838C28.6336 0.00266838 28.3101 0.132104 28.0512 0.390926L21.3218 7.12029C20.8042 7.63793 20.8042 8.41443 21.3218 8.93208C21.8395 9.44972 22.616 9.44972 23.1336 8.93208L28.9571 3.10857L34.7806 8.93208C35.2983 9.44972 36.0748 9.44972 36.5924 8.93208C37.1101 8.41443 37.1101 7.63793 36.5924 7.12029L29.863 0.390926C29.6042 0.132104 29.2807 0.00266838 28.9571 0.00266838Z"
                    fill="#7643FF"
                  />
                </svg>
              </image>
            </CardBox>
          </Link>
          <Divider height="10px" />
          <Link passHref href="/suporte/termos-e-condicoes">
            <CardBox className="box-link">
              <TextInformation>
                <image style={{ margin: "2px" }}>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M29.6835 3.66797H14.3183C8.745 3.66797 5.5 6.9313 5.5 12.523V31.4613C5.5 37.1446 8.745 40.3346 14.3183 40.3346H29.6835C35.3467 40.3346 38.5 37.1446 38.5 31.4613V12.523C38.5 6.9313 35.3467 3.66797 29.6835 3.66797Z"
                      fill="#7643FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8138 12.1914V12.2097C14.0237 12.2097 13.3838 12.8514 13.3838 13.6397C13.3838 14.4281 14.0237 15.0697 14.8138 15.0697H20.2937C21.0838 15.0697 21.7255 14.4281 21.7255 13.6196C21.7255 12.8331 21.0838 12.1914 20.2937 12.1914H14.8138ZM29.1872 23.3565H14.8138C14.0237 23.3565 13.3838 22.7148 13.3838 21.9265C13.3838 21.1381 14.0237 20.4946 14.8138 20.4946H29.1872C29.9755 20.4946 30.6172 21.1381 30.6172 21.9265C30.6172 22.7148 29.9755 23.3565 29.1872 23.3565ZM29.1871 31.7347H14.8138C14.2637 31.808 13.7321 31.533 13.4387 31.0747C13.1454 30.598 13.1454 29.993 13.4387 29.5347C13.7321 29.058 14.2637 28.8014 14.8138 28.8564H29.1871C29.9186 28.9297 30.4704 29.553 30.4704 30.3047C30.4704 31.0362 29.9186 31.6614 29.1871 31.7347Z"
                      fill="#7643FF"
                    />
                  </svg>
                </image>
                <FlexBox column>
                  <TitleInfo>Termos e condições </TitleInfo>
                  <TitleInfo>
                    <h1>Leia os nossos termos de uso e privacidade</h1>
                  </TitleInfo>
                </FlexBox>
              </TextInformation>
              <image>
                <svg
                  width="71"
                  height="28"
                  viewBox="0 0 71 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9569 0.00175858C28.2451 0.00175858 27.6628 0.58411 27.6628 1.29587V13.3311C27.6628 14.9488 27.0157 16.5017 25.851 17.6664C24.6863 18.8311 23.1334 19.4782 21.5157 19.4782H16.2746C15.5628 19.4782 14.9805 20.0605 14.9805 20.7723C14.9805 21.4841 15.5628 22.0664 16.2746 22.0664H21.5157C23.8451 22.0664 26.0451 21.1605 27.6628 19.5429C29.2804 17.9252 30.1863 15.7252 30.1863 13.3958V1.3606C30.251 0.584133 29.6686 0.00175858 28.9569 0.00175858Z"
                    fill="#7643FF"
                  />
                  <path
                    d="M28.9571 0.00266838C28.6336 0.00266838 28.3101 0.132104 28.0512 0.390926L21.3218 7.12029C20.8042 7.63793 20.8042 8.41443 21.3218 8.93208C21.8395 9.44972 22.616 9.44972 23.1336 8.93208L28.9571 3.10857L34.7806 8.93208C35.2983 9.44972 36.0748 9.44972 36.5924 8.93208C37.1101 8.41443 37.1101 7.63793 36.5924 7.12029L29.863 0.390926C29.6042 0.132104 29.2807 0.00266838 28.9571 0.00266838Z"
                    fill="#7643FF"
                  />
                </svg>
              </image>
            </CardBox>
          </Link>
          <Divider height="10px" />
          <Link passHref href="/suporte/perguntas-frequentes">
            <CardBox className="box-link">
              <TextInformation>
                <image style={{ margin: "2px" }}>
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M38.5 21C38.5 30.667 30.6652 38.5 21 38.5C11.3348 38.5 3.5 30.667 3.5 21C3.5 11.3365 11.3348 3.5 21 3.5C30.6652 3.5 38.5 11.3365 38.5 21Z"
                      fill="#7643FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.5234 22.1022C22.5234 22.9457 21.8357 23.6334 20.9922 23.6334C20.1487 23.6334 19.4609 22.9457 19.4609 22.1022V14.3672C19.4609 13.5237 20.1487 12.8359 20.9922 12.8359C21.8357 12.8359 22.5234 13.5237 22.5234 14.3672V22.1022ZM19.4696 27.6546C19.4696 26.8111 20.1539 26.1233 20.9921 26.1233C21.8548 26.1233 22.5408 26.8111 22.5408 27.6546C22.5408 28.4981 21.8548 29.1858 21.0096 29.1858C20.1609 29.1858 19.4696 28.4981 19.4696 27.6546Z"
                      fill="#7643FF"
                    />
                  </svg>
                </image>
                <FlexBox column>
                  <TitleInfo>Perguntas frequentes</TitleInfo>
                  <TitleInfo>
                    <h1>Tire todas as suas duvidas no nosso FAQ</h1>
                  </TitleInfo>
                </FlexBox>
              </TextInformation>

              <image>
                <svg
                  width="71"
                  height="28"
                  viewBox="0 0 71 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9569 0.00175858C28.2451 0.00175858 27.6628 0.58411 27.6628 1.29587V13.3311C27.6628 14.9488 27.0157 16.5017 25.851 17.6664C24.6863 18.8311 23.1334 19.4782 21.5157 19.4782H16.2746C15.5628 19.4782 14.9805 20.0605 14.9805 20.7723C14.9805 21.4841 15.5628 22.0664 16.2746 22.0664H21.5157C23.8451 22.0664 26.0451 21.1605 27.6628 19.5429C29.2804 17.9252 30.1863 15.7252 30.1863 13.3958V1.3606C30.251 0.584133 29.6686 0.00175858 28.9569 0.00175858Z"
                    fill="#7643FF"
                  />
                  <path
                    d="M28.9571 0.00266838C28.6336 0.00266838 28.3101 0.132104 28.0512 0.390926L21.3218 7.12029C20.8042 7.63793 20.8042 8.41443 21.3218 8.93208C21.8395 9.44972 22.616 9.44972 23.1336 8.93208L28.9571 3.10857L34.7806 8.93208C35.2983 9.44972 36.0748 9.44972 36.5924 8.93208C37.1101 8.41443 37.1101 7.63793 36.5924 7.12029L29.863 0.390926C29.6042 0.132104 29.2807 0.00266838 28.9571 0.00266838Z"
                    fill="#7643FF"
                  />
                </svg>
              </image>
            </CardBox>
          </Link>
          <Divider height="10px" />
          <Link passHref href="/suporte/fale-conosco">
            <CardBox className="box-link">
              <TextInformation>
                <image style={{ margin: "2px" }}>
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M38.5 21C38.5 30.667 30.6652 38.5 21 38.5C11.3348 38.5 3.5 30.667 3.5 21C3.5 11.3365 11.3348 3.5 21 3.5C30.6652 3.5 38.5 11.3365 38.5 21Z"
                      fill="#7643FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.161 18.9062C12.0042 18.9062 11.0645 19.846 11.0645 20.9992C11.0645 22.1542 12.0042 23.0957 13.161 23.0957C14.3177 23.0957 15.2575 22.1542 15.2575 20.9992C15.2575 19.846 14.3177 18.9062 13.161 18.9062ZM20.9993 18.9062C19.8426 18.9062 18.9028 19.846 18.9028 20.9992C18.9028 22.1542 19.8426 23.0957 20.9993 23.0957C22.1561 23.0957 23.0958 22.1542 23.0958 20.9992C23.0958 19.846 22.1561 18.9062 20.9993 18.9062ZM26.7418 20.9992C26.7418 19.846 27.6816 18.9062 28.8383 18.9062C29.9951 18.9062 30.9348 19.846 30.9348 20.9992C30.9348 22.1542 29.9951 23.0957 28.8383 23.0957C27.6816 23.0957 26.7418 22.1542 26.7418 20.9992Z"
                      fill="#7643FF"
                    />
                  </svg>
                </image>

                <FlexBox column>
                  <TitleInfo>Fale conosco</TitleInfo>
                  <TitleInfo>
                    <h1>Entre em contato conosco quando quiser</h1>
                  </TitleInfo>
                </FlexBox>
              </TextInformation>
              <image>
                <svg
                  width="71"
                  height="28"
                  viewBox="0 0 71 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9569 0.00175858C28.2451 0.00175858 27.6628 0.58411 27.6628 1.29587V13.3311C27.6628 14.9488 27.0157 16.5017 25.851 17.6664C24.6863 18.8311 23.1334 19.4782 21.5157 19.4782H16.2746C15.5628 19.4782 14.9805 20.0605 14.9805 20.7723C14.9805 21.4841 15.5628 22.0664 16.2746 22.0664H21.5157C23.8451 22.0664 26.0451 21.1605 27.6628 19.5429C29.2804 17.9252 30.1863 15.7252 30.1863 13.3958V1.3606C30.251 0.584133 29.6686 0.00175858 28.9569 0.00175858Z"
                    fill="#7643FF"
                  />
                  <path
                    d="M28.9571 0.00266838C28.6336 0.00266838 28.3101 0.132104 28.0512 0.390926L21.3218 7.12029C20.8042 7.63793 20.8042 8.41443 21.3218 8.93208C21.8395 9.44972 22.616 9.44972 23.1336 8.93208L28.9571 3.10857L34.7806 8.93208C35.2983 9.44972 36.0748 9.44972 36.5924 8.93208C37.1101 8.41443 37.1101 7.63793 36.5924 7.12029L29.863 0.390926C29.6042 0.132104 29.2807 0.00266838 28.9571 0.00266838Z"
                    fill="#7643FF"
                  />
                </svg>
              </image>
            </CardBox>
          </Link>
        </Container>
      </PageWrapper>
    </>
  );
};
export default information;
