import { AppShell, darkTheme } from "ui";
import Header from "../source/shared/header/header";
import { ThemeProvider } from "next-themes";

import "../styles/global.scss";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <AppShell header={<Header />}>
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: 'transparent',
              color: '#fff',
              border: "1px solid #8f8f8f",
              backdropFilter: 'blur(10px)'
            }}}
        />
      </AppShell>
    </ThemeProvider>
  );
}

export default MyApp;
