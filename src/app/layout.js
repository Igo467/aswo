import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./Context/store";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://www.aswo.com/typo3conf/ext/aswo/Resources/Public/Images/favicon.ico"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div className="wraper">
          {/* <Header /> */}

          <GlobalContextProvider>
            <section>{children}</section>
          </GlobalContextProvider>

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
