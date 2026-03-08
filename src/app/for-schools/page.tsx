import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import FadeUp from '@/components/ui/FadeUp';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '学校掲載・お申し込み',
  description: '通信制高校・サポート校の掲載に関する情報。比較検討層の保護者・生徒に、貴校の魅力をわかりやすく届けます。まずはお気軽にご相談ください。',
};

export default function ForSchoolsPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. ファーストビュー */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-primary-900 overflow-hidden text-center flex flex-col justify-center min-h-[70vh] md:min-h-0">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_for_schools.png" 
            alt="School administrators reviewing data" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
        </div>
        
        <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none opacity-40 z-0">
          <div className="absolute top-[10%] left-[-10%] w-[50%] aspect-square rounded-full bg-accent-500 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] aspect-square rounded-full bg-white blur-[150px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeUp yOffset={30}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide mb-6">
              学校関係者様へ
            </span>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight mb-6 md:mb-8">
              通信制高校・サポート校の魅力を、<br className="hidden md:block" />
              保護者・生徒へわかりやすく届けませんか
            </h1>
            <p className="text-sm md:text-lg text-primary-50/90 mb-10 text-balance leading-relaxed">
              「通信制ナビ」は、新しい学び方を探す生徒と、多様な教育を提供する学校をつなぐ、<br className="hidden md:block" />
              次世代の学校ポータルサイトです。
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button variant="white" size="lg" className="w-full sm:w-auto md:px-12">
                掲載について相談する
              </Button>
              <Button variant="whiteOutline" size="lg" className="w-full sm:w-auto md:px-12">
                資料請求のご相談
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. 掲載メリット */}
      <Section bg="white">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">通信制ナビに掲載するメリット</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "比較検討層へダイレクトに届く",
                desc: "「そろそろ転校を考えたい」「新入学で通信制を検討している」という意欲の高いユーザーが多く訪れます。"
              },
              {
                title: "学校の強みを整理して伝えられる",
                desc: "一律のフォーマットではなく、「タグ」や「オススメポイント」で学校独自の色をわかりやすく表現できます。"
              },
              {
                title: "公式サイトへの強力な導線",
                desc: "ポータル内で完結させるのではなく、学校の公式Webサイトへ送客することを第一の目的に設計されています。"
              },
              {
                title: "保護者の「安心感」を醸成",
                desc: "洗練されたクリーンなUI設計により、教育機関としての信頼度を高めた状態で情報をお届けします。"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-primary-50 p-8 rounded-2xl border border-primary-100 text-center">
                <div className="w-12 h-12 bg-white text-accent-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-sm">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      {/* 3. 想定ユーザー */}
      <Section bg="gray">
        <FadeUp>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 leading-tight">
                「今の学校が合わない」と<br />悩む層へアプローチ
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                本サイトは、以下のようなユーザーをメインのターゲットとしてコンテンツを最適化しています。
              </p>
              <ul className="space-y-4">
                {[
                  "通信制への転入学を検討し始めた保護者",
                  "自分のペースで通える学校を探す中学生",
                  "特定の分野（IT・美容等）を極めたい生徒",
                  "不登校の悩みを抱え、新しい環境を求めるご家庭"
                ].map((user, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-900 font-medium bg-white p-4 rounded-xl shadow-sm">
                    <span className="text-accent-500 font-bold">✔</span>
                    {user}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-3xl shadow-card aspect-4/3">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop" 
                  alt="通信制高校で学ぶ生徒のイメージ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* 4. 掲載内容と流れ */}
      <Section bg="white">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">掲載から効果創出までの流れ</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute hidden md:block w-1 bg-primary-50 h-full left-1/2 transform -translate-x-1/2 top-0" />
            
            {[
              { title: "お問い合わせ・ご連絡", desc: "まずは本ページのお問い合わせフォームよりご連絡ください。ご不明な点はメッセージに記載いただければ大丈夫です。" },
              { title: "オンラインヒアリング", desc: "オンラインにて、貴校の魅力や特徴、募集の課題などをお伺いします。30分〜1時間程度が目安です。" },
              { title: "掲載情報の整理・ライティング", desc: "お伺いした内容をもとに、保護者・生徒に響く形で学校情報を整理・ライティングします。内容はご確認いただいてから公開します。" },
              { title: "掲載開始", desc: "内容をご確認いただき、問題がなければ掲載ページを公開します。公開後も修正・追加のご要望にはご対応します。" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                <div className={`w-full md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end text-left md:text-right' : 'md:justify-start md:order-2 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-card border border-primary-50 max-w-sm w-full">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      <span className="text-accent-500 mr-2">STEP {i + 1}</span>
                      <br className="md:hidden" />
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted">{step.desc}</p>
                  </div>
                </div>
                {/* Center node */}
                <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-accent-500 border-4 border-white items-center justify-center shadow-sm`} />
              </div>
            ))}
          </div>
        </FadeUp>
      </Section>

      {/* 6. CTA */}
      <Section bg="gray">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center border border-primary-100 bg-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">まずは、お気軽にご相談ください</h2>
            <p className="text-text-muted mb-10">
              掲載に関するご質問や、媒体資料のご請求を承っております。<br />
              貴校の生徒募集にどのように貢献できるか、具体的にご提案させていただきます。
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button variant="primary" size="lg" className="w-full sm:w-auto md:px-12">
                お問い合わせフォームへ
              </Button>
              <Link href="/">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto md:px-12">
                  トップページへ戻る
                </Button>
              </Link>
            </div>
          </div>
        </FadeUp>
      </Section>
    </div>
  );
}
