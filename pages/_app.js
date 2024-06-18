import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/Carousel1.css"
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "../Components/Context";
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '/styles/Header.css'

function MyApp({ Component, pageProps }) {
  const url = process.env.REACT_APP_API_URL;

  const client = new GraphQLClient({
    url: "https://zebaecom.maitretech.com/graphql"
  })
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }

  return (
    <ClientContext.Provider value={client}>
      <AppProvider>
        <Component {...pageProps} />;
      </AppProvider>
    </ClientContext.Provider>
  );
}

export default MyApp;
