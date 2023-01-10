import styled, { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";

import { Footer, Header, Navbar } from "../components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #151515;
    font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      {
        loading ? (
          <AppLoading>
            <AppLoadingContents>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                alt=""
                width={290}
                height={290}
              />
            </AppLoadingContents>
          </AppLoading>
        ) : (
          <>
            <Header />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>
        )
      }
    </>
  )
}


const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: contain;
  }
`;