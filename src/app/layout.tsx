import { Header } from "@/components/header-2";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-28">{children}</main>
      </body>
    </html>
  );
}
