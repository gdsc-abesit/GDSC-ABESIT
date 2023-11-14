import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from "next-themes";


export default function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider attribute="class">
      <NextNProgress />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
