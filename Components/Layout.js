import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

const Layout = ({ children, data_header }) => {
  return (
    <div>
      <Head>
        <title>Alayza Life Science</title>
        <link rel="icon" type="image/jpg" href="./images/mouse.jpg" />
      </Head>
      <Header />
      {children}
        <Footer data_header={data_header} />
    </div>
  );
};

export default Layout;
