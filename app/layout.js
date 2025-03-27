import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/globals.scss";
import Navbar from "@/app/components/navbar";
import ScrollToTop from "@/app/components/helper/scroll-to-top";
import Footer from "@/app/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Abdullah al rafi - Full-stack web Developer",
  description:
    "This is the portfolio of Abdullah al rafi. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[105rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
