import Menu from "../components/Menu";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Menu />
      <main className="pt-20 page-content">{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
}
