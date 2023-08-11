import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/apis/instance";

import { GlobalStyle } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
