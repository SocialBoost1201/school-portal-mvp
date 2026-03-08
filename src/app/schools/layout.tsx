import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '学校一覧・検索',
  description: '全国の通信制高校・サポート校の一覧ページです。希望するエリアや、不登校支援・オンライン対応などの特徴タグ、気になるキーワードから、あなたにぴったりの学校を検索・比較できます。',
};

export default function SchoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
