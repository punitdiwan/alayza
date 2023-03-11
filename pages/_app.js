import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "../Components/Context";


function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
    </AppProvider>
  );
}

export default MyApp;
