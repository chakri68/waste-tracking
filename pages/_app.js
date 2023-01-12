import "../styles/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/primeflex/primeflex.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
