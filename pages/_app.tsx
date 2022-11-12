import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      enableColorScheme={true}
      storageKey="theme"
      defaultTheme="light"
    >
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </ThemeProvider>
  );
}

export default MyApp;
