import Footer from "./Footer";
import Navbar from "./Navbar";
import BackToTheTop from "./BackToTop";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <BackToTheTop />
      <Footer />
    </div>
  );
}
