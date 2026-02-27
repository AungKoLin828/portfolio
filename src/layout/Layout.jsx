import Menu from "../components/Menu";
import BackToTop from "../components/BackToTop";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Menu />
      <main className="pt-20">{children}</main>
      <BackToTop />
    </div>
  );
}
