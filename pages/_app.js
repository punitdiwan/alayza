import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "../Components/Context";
import { GraphQLClient, ClientContext } from 'graphql-hooks'

function MyApp({ Component, pageProps }) {
  const url = process.env.REACT_APP_API_URL;

  const client = new GraphQLClient({
    url: "https://zebaecom.maitretech.com/graphql"
  })

  return (
    <ClientContext.Provider value={client}>
      <AppProvider>
        <Component {...pageProps} />;
      </AppProvider>
    </ClientContext.Provider>
  );
}

export default MyApp;
