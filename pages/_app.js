import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {

  useEffect(() => {
    document.title = "Star Wars"
  })

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
