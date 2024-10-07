import Layout from "@/components/Layout";
import { MonthProvider } from "@/contexts/Month";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }:AppProps) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return  <MonthProvider>
          
                <Layout>
                  <Component {...pageProps} />
                </Layout>
     </MonthProvider>

}
