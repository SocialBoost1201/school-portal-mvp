import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/layout/Section';
import FadeUp from '@/components/ui/FadeUp';
import { SchoolCard } from '@/components/domain/SchoolCard';
import schoolsData from '@/data/schools.json';
import { School } from '@/types/school';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '学校を探す・比較する',
  description: '全国の通信制高校・サポート校を、エリアや特徴から絞り込んで比較できます。不登校支援・オンライン対応・進学サポートなど、あなたに合う学校をわかりやすく探せます。',
};

export default function HomePage() {
  const featuredSchools = (schoolsData as School[]).slice(0, 3);

  return (
    <div className="w-full">
      {/* 1. ファーストビュー (Hero) */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-primary-900 overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_top.png" 
            alt="Students on campus" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <FadeUp yOffset={30} duration={0.8}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide mb-6">
              新入学・転入学を考える保護者と生徒のための学校案内サイト
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-8 text-balance">
              通信制高校・サポート校を、<br className="hidden md:block" />
              わかりやすく比較
            </h1>
            <p className="text-base md:text-lg text-primary-50/90 mb-16 max-w-2xl mx-auto text-balance leading-relaxed">
              今の自分にぴったりの学び方を。<br className="hidden sm:block" />全国の学校情報から、あなたに合う学校を安心して探せます。
            </p>
          </FadeUp>

          {/* 検索UI (Mock) */}
          <FadeUp delay={0.2} yOffset={30} duration={0.8}>
            <div className="w-full max-w-3xl border border-primary-100 bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-card flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col text-left">
                <label className="text-xs font-bold text-primary-900 mb-1 pl-1">エリア</label>
                <select className="w-full bg-primary-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent-500 outline-none text-text-main appearance-none">
                  <option>全国から探す</option>
                  <option>関東</option>
                  <option>関西</option>
                </select>
              </div>
              <div className="flex-1 flex flex-col text-left">
                <label className="text-xs font-bold text-primary-900 mb-1 pl-1">キーワード</label>
                <input 
                  type="text" 
                  placeholder="学校名・特徴など" 
                  className="w-full bg-primary-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent-500 outline-none text-text-main"
                />
              </div>
              <div className="flex items-end md:w-auto w-full mt-2 md:mt-0">
                <Link href="/schools" className="w-full">
                  <Button variant="primary" fullWidth className="h-[46px]">
                    学校を探す
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/schools" className="text-sm font-bold text-white/80 hover:text-white underline underline-offset-8 decoration-white/30 hover:decoration-white transition-all">
                すべての学校を見る
              </Link>
              <span className="hidden sm:block text-white/20">|</span>
              <Link href="/for-schools" className="text-sm font-bold text-accent-100 hover:text-white underline underline-offset-8 decoration-accent-500/50 hover:decoration-accent-500 transition-all">
                学校掲載のご相談
              </Link>
            </div>
          </FadeUp>
        </div>
        
        {/* 背景の装飾オブジェクト */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] left-[-10%] w-[40%] aspect-square rounded-full bg-accent-100/40 blur-3xl" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] aspect-square rounded-full bg-blue-100/40 blur-3xl" />
        </div>
      </section>

      {/* 2. 悩み訴求セクション */}
      <Section bg="white">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">こんなお悩みはありませんか</h2>
            <p className="text-text-muted">学校選びで迷うのは当然のことです。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-700">親</span>
                保護者の方のお悩み
              </h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✔</span>
                  今の学校が合わず、この先が不安
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✔</span>
                  通信制高校とサポート校の違いがわからない
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✔</span>
                  安心して相談できる学校を見つけたい
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent-600">子</span>
                生徒の方のお悩み
              </h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✔</span>
                  自分に合う通い方がわからない
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✔</span>
                  無理なく続けられる学校を探したい
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">✔</span>
                  転校や新しい環境に不安がある
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* 3. このサイトでできること */}
      <Section bg="gray">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">学校選びを、もっとわかりやすく</h2>
            <p className="text-text-muted">通信制ナビが、あなたの学校選びをサポートします。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "通信制高校を探せる", desc: "全国の通信制高校から、希望の条件で絞り込み。" },
              { title: "サポート校を探せる", desc: "手厚いフォローが特徴のサポート校情報も網羅。" },
              { title: "特徴を比較しやすい", desc: "通学スタイルや対応エリアがひと目でわかります。" },
              { title: "公式サイトに進める", desc: "気になる学校が見つかったら、直接公式サイトへ。" },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-card flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      {/* 4. 学校を探す導線 (注目の学校) */}
      <Section bg="white">
        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">注目の学校をチェック</h2>
              <p className="text-text-muted">多様な学び方を提供する、全国のおすすめ校の一部をご紹介します。</p>
            </div>
            <Link href="/schools" className="shrink-0">
              <Button variant="outline">すべての学校を見る →</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {featuredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/schools">
              <Button variant="primary" size="lg" className="w-full md:w-auto md:px-16">
                希望の条件で学校を探す
              </Button>
            </Link>
          </div>
        </FadeUp>
      </Section>

      {/* 5. 通信制高校とサポート校の違い */}
      <Section bg="gray">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">違いがわかると、学校選びはもっとしやすい</h2>
            <p className="text-text-muted">通信制高校とサポート校、それぞれの役割を知りましょう。</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card max-w-5xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 relative">
              <div className="absolute hidden md:block w-px h-full bg-primary-100 left-1/2 top-0" />
              
              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4 border-b-2 border-primary-500 pb-2 inline-block">通信制高校</h3>
                <p className="text-text-muted mb-6">
                  高校卒業資格を取得するための学校です。レポート提出、スクーリング（面接指導）、単位認定試験を経て単位を修得します。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm"><span className="text-primary-500 font-bold">・</span>高卒資格が付与される</li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-primary-500 font-bold">・</span>自学自習が基本（登校日数は少なめ）</li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-primary-500 font-bold">・</span>学費が比較的安価</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2 inline-block">サポート校</h3>
                <p className="text-text-muted mb-6">
                  通信制高校の卒業を支援するための学習塾や予備校のような教育機関です。単独では高校卒業資格は得られません。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm"><span className="text-accent-500 font-bold">・</span>通信制高校と「同時入学」する</li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-accent-500 font-bold">・</span>登校日数やカリキュラムが柔軟</li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-accent-500 font-bold">・</span>進学支援やメンタルケアなどの手厚い個別指導</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-primary-50 p-6 rounded-xl text-center">
              <p className="font-semibold text-primary-900">
                💡 自主的に学べる人は「通信制高校」のみ、手厚いサポートが必要な人は「通信制高校 ＋ サポート校」という選び方が一般的です。
              </p>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* 6. 選び方ガイド */}
      <Section bg="white">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">学校選びで大切にしたいポイント</h2>
            <p className="text-text-muted">自分に合う学校を見つけるための、5つのチェックポイント。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🏫", title: "通学スタイル", desc: "週何日通うか、オンラインのみか。自分のペースを見つけましょう。" },
              { icon: "🤝", title: "不登校支援", desc: "メンタルケアや、心理カウンセラーの有無など、安心できる環境か。" },
              { icon: "🎓", title: "進学重視", desc: "大学進学を見据えた専用コースや、予備校連携があるか。" },
              { icon: "💻", title: "オンライン対応", desc: "自宅からでも充実した学習やコミュニケーションが可能か。" },
              { icon: "📍", title: "地域と設備", desc: "通いやすい場所か、キャンパスの雰囲気が自分に合っているか。" },
              { icon: "🎨", title: "専門スキルの習得", desc: "IT、美容、スポーツなど、やりたいことに打ち込めるコースがあるか。" }
            ].map((point, i) => (
              <div key={i} className="border border-primary-100 p-6 rounded-2xl hover:border-primary-500 transition-colors">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-sm text-text-muted">{point.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      {/* 7. 掲載募集導線 */}
      <Section bg="gray">
        <FadeUp>
          <div className="bg-primary-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-primary-100 text-xs font-bold tracking-wide mb-6">
                学校関係者様へ
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">学校掲載をご希望の方へ</h2>
              <p className="text-primary-100/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                保護者や生徒に、学校の魅力をわかりやすく届けませんか。<br />
                通信制ナビは、新しい出会いをつくるプラットフォームです。
              </p>
              <Link href="/for-schools">
                <Button variant="white" size="lg" className="w-full md:w-auto md:px-12">
                  掲載に関するご案内を見る
                </Button>
              </Link>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* 8. FAQ風セクション */}
      <Section bg="white" className="pb-32">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">よくある質問</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "通信制高校とサポート校の違いは何ですか？",
                a: "通信制高校は高校単位を取得し卒業資格を得るための学校です。サポート校は、その通信制高校の卒業を確実にするため、日々の学習や高校生活をフォローする塾のような存在です。単独では高卒資格は得られません。"
              },
              {
                q: "転入学・編入学でも探せますか？",
                a: "はい、可能です。多くの学校が随時または定期的に転入学（転校）・編入学を受け入れています。各学校情報の「転入学対応」のタグをご参照ください。"
              },
              {
                q: "自分に合うコースが見つかるか不安です。",
                a: "当サイトでは「通学スタイル」や「特徴タグ」で学校を絞り込むことができます。まずは無理のない通学ペースの学校や、興味のある分野のコースがある学校を探してみてください。"
              }
            ].map((faq, i) => (
              <div key={i} className="border border-primary-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-900 flex gap-3 text-lg mb-3">
                  <span className="text-accent-500">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-text-muted flex gap-3 pl-1">
                  <span className="text-primary-300 font-bold">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>
    </div>
  );
}
