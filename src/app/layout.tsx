import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "通信制ナビ | 通信制高校・サポート校をわかりやすく比較",
    template: "%s | 通信制ナビ",
  },
  description: "全国の通信制高校・サポート校・技能連携校を一覧で比較できるポータルサイト。転入学・編入学を検討中の保護者・生徒に向けて、エリアや特徴タグから合う学校を安心して探せます。",
  openGraph: {
    title: "通信制ナビ | 通信制高校・サポート校をわかりやすく比較",
    description: "全国の通信制高校・サポート校を比較できる学校案内ポータル。転入学・不登校支援・オンライン対応など特徴から絞り込んで探せます。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "通信制ナビ | 通信制高校・サポート校をわかりやすく比較",
    description: "転入学・不登校支援・オンライン対応など、全国の通信制高校・サポート校を特徴から比較できます。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent-100 selection:text-primary-900 bg-bg-base text-text-main`}
      >
        <LenisProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
