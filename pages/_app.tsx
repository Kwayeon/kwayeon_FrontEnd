import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { client } from "@/apis/instance";

import { GlobalStyled } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "antd";

import SignInForm from "@/components/sign";
import Sidebar from "@/components/sidebar/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Kwayeon</title>
        </Head>

        <GlobalStyled />
        <CheckLogin children={<Component {...pageProps} />} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const CheckLogin = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  const unRequiredAuth = ["/sign/in", "/sign/up", "/sign/find/id", "/sign/find/password"];

  const isRequiredAuth = !unRequiredAuth.includes(pathname);

  const { isLoading, error, refetch } = useQuery({
    queryKey: ["/auth/profile"],
    enabled: isRequiredAuth,
  });

  useEffect(() => {
    refetch();
  }, [pathname]);

  useEffect(() => {
    if (isRequiredAuth && error) router.push("/sign/in");
  }, [error]);

  if (!isRequiredAuth && error) return <SignInForm />;
  return (
    <>
      {isLoading || error ? (
        <></>
      ) : (
        <>
          <Sidebar />
          {children}
        </>
      )}
    </>
  );
};
