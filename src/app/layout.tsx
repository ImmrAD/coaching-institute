import { Header } from "@/components/header-2";
import "./globals.css";

export const metadata = {
	title: "Durga & P K Classes | Best JEE, NEET, MHT CET Coaching in PCMC",
	description:
		"Durga & P K Classes provides JEE coaching in PCMC, NEET coaching in PCMC, MHT CET classes and 8th to 10th foundation coaching with personal mentoring and weekly tests.",
	keywords: [
		"JEE coaching in PCMC",
		"Best NEET coaching in PCMC",
		"MHT CET classes in PCMC",
		"8th to 10th coaching in PCMC"
	]
};

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
