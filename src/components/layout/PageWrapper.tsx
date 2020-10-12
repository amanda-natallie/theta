import React, { memo } from "react";
import { Page } from "../../styles/components/Page";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import Footer from "./Footer";
import Header from "./Header";

const PageWrapper = ({ noFooter, noPadding, children }: interfaceConstant.PageProps) => {
  return (
    <Page noPadding={noPadding}>

      <Header color="dark" elevation={3}/>
      {children}
      {!noFooter && <Footer />}
    </Page>
  );
};

export default memo(PageWrapper);
