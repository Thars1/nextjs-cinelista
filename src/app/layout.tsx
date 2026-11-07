import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header/index"
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Cinelista",
  description: "No Cinelista, você vai encotnrar os títulos mais populares e avalialas em só lugar",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
                <Footer/>
</body>
    </html>
  );
}
