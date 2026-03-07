import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import FadeUp from '@/components/ui/FadeUp';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import schoolsData from '@/data/schools.json';
import { School } from '@/types/school';

// Next.js config for SSG dynamic params
export function generateStaticParams() {
  return schoolsData.map((school) => ({
    slug: school.slug,
  }));
}

export default async function SchoolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const school = (schoolsData as School[]).find((s) => s.slug === resolvedParams.slug);

  if (!school) {
    notFound();
  }

  return (
    <div className="w-full bg-bg-base">
      <FadeUp>
        <div className="w-full h-80 relative bg-primary-900">
          <Image
            src={school.image}
            alt={school.name}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base to-transparent" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 h-full flex items-end pb-12">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white text-primary-900 text-sm font-bold tracking-wide mb-4 shadow-sm">
                {school.type}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-primary-900 mb-4 tracking-tight">{school.name}</h1>
              <div className="flex items-center gap-2 text-primary-700 font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {school.areas.join('、')}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <Section containerSize="narrow" bg="transparent" className="-mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-14 lg:p-16 shadow-card border border-primary-50">
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {school.tags.map((tag) => (
                <Tag key={tag} label={tag} variant="default" />
              ))}
              {school.online && <Tag label="オンライン対応" variant="highlight" />}
            </div>

            <div className="prose prose-lg prose-slate max-w-none text-text-muted mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">学校の概要</h2>
              <p className="leading-relaxed whitespace-pre-line">{school.description}</p>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl mb-12">
              <h2 className="text-xl font-bold text-primary-900 mb-6 tracking-tight">こんな方にオススメ</h2>
              <ul className="space-y-4">
                {school.recommendedFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted">
                    <span className="text-accent-500 font-bold mt-1">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">基本情報</h2>
            <div className="border border-primary-100 rounded-xl overflow-hidden mb-12">
              <table className="w-full text-left text-sm md:text-base">
                <tbody>
                  <tr className="border-b border-primary-100">
                    <th className="bg-primary-50 py-4 px-6 w-1/3 font-semibold text-primary-900">通学スタイル</th>
                    <td className="py-4 px-6 text-text-muted">{school.attendanceStyle}</td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <th className="bg-primary-50 py-4 px-6 font-semibold text-primary-900">オンライン学習</th>
                    <td className="py-4 px-6 text-text-muted">{school.online ? '対応あり' : 'なし（通学メイン）'}</td>
                  </tr>
                  <tr>
                    <th className="bg-primary-50 py-4 px-6 font-semibold text-primary-900">キャンパス・エリア</th>
                    <td className="py-4 px-6 text-text-muted">{school.areas.join('、')}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a href={school.officialUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" fullWidth>
                  公式サイトを見る
                </Button>
              </a>
              <Link href="/schools" className="w-full sm:w-auto">
                <Button variant="ghost" size="lg" fullWidth>
                  一覧へ戻る
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>
    </div>
  );
}
