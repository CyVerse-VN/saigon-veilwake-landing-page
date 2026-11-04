import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Caveat } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varabond · Saigon: Veilwake — Khám phá một Sài Gòn bạn chưa từng thấy",
  description:
    "Trải nghiệm du lịch tương tác đô thị kết hợp AR và di sản văn hóa Sài Gòn cùng linh vật Vara. Biến những chuyến tham quan thành hành trình phiêu lưu khám phá văn hóa, lưu giữ kỷ niệm và đánh thức những bí ẩn AR ẩn sau thành phố.",
  keywords: [
    "Varabond",
    "Saigon: Veilwake",
    "Vara",
    "du lịch tương tác",
    "khám phá Sài Gòn",
    "AR du lịch",
    "Bưu điện Trung tâm Sài Gòn",
    "Nhà thờ Đức Bà",
    "HIST 2026",
  ],
  authors: [{ name: "Varabond · Saigon: Veilwake Team" }],
  icons: {
    icon: "/assets/logo_emblem.png",
    shortcut: "/assets/logo_emblem.png",
    apple: "/assets/logo_emblem.png",
  },
  openGraph: {
    title: "Saigon: Veilwake — Interactive Travel & Cultural AR",
    description:
      "Biến những chuyến tham quan thành hành trình phiêu lưu tương tác — khám phá văn hóa, lưu giữ kỷ niệm và đánh thức những bí ẩn AR ẩn sau thành phố.",
    siteName: "Saigon: Veilwake",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${playfair.variable} ${caveat.variable}`}>
      <body className="antialiased min-h-screen bg-page text-deep-blue">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
