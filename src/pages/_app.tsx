import Layout from "@/components/Layout";
import { ChartProvider } from "@/contexts/Month";
import { ShowModal } from "@/contexts/Modal";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useState } from "react";
export default function App({ Component, pageProps }:AppProps) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return  <ChartProvider>
          <ShowModal.Provider value={{ isModalOpen, setModalOpen }}>
                  <Layout>
                  <Component {...pageProps} />
                </Layout>
          </ShowModal.Provider>
     </ChartProvider>
}
