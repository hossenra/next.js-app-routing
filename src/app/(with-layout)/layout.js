import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-4xl">{children}</div>
      <Footer />
    </div>
  );
}
