import React, { memo } from "react";
import { Page } from "../../styles/components/Page";
import Footer from "./Footer";
import Header from "./Header";

const PageWrapper = ({ noFooter, children }) => {
  return (
    <Page>

      <Header color="dark" elevation={3}/>
      {children}
      {!noFooter && <Footer />}
    </Page>
  );
};

export default memo(PageWrapper);
