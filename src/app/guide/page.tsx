import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import FadeUp from '@/components/ui/FadeUp';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '転入学・編入学ガイド',
  description: '通信制高校・サポート校への「転入学（転校）」と「編入学（再入学）」の違いや、失敗しない学校選びの手順を解説。今の学校が合わないと感じたら、無理なくやり直せるステップをチェック。',
};

export default function GuidePage() {
  return (
    <div className="w-full bg-bg-base">
      {/* 1. ファーストビュー */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-primary-900 overflow-hidden text-center flex flex-col justify-center min-h-[60vh] md:min-h-0">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_guide.png" 
            alt="Student on bright campus" 
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
              転入学・編入学ガイド
            </span>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight mb-6 md:mb-8">
              今の学校が合わないと感じたら。<br className="hidden md:block" />
              無理なくやり直せるステップを。
            </h1>
            <p className="text-sm md:text-lg text-primary-50/90 mb-10 text-balance leading-relaxed">
              通信制高校・サポート校への「転入学（転校）」と「編入学（再入学）」。<br className="hidden md:block" />
              それぞれの違いや、失敗しない学校選びの手順をわかりやすく解説します。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. 転入学と編入学の違い */}
      <Section bg="white">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">「転入学」と「編入学」の違い</h2>
            <p className="text-text-muted">まずは自分の状況がどちらに当てはまるか確認しましょう。</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 転入学 */}
            <div className="bg-primary-50 rounded-3xl p-8 border border-primary-100 relative">
              <div className="absolute top-0 right-0 bg-accent-500 text-white text-sm font-bold py-1 px-4 rounded-bl-xl rounded-tr-3xl">
                高校に在籍中の方
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4 mt-2">転入学（転校）</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                現在、別の高校（全日制・定時制・通信制）に在籍している生徒が、別の学校へ移動すること。「転校」とも呼ばれます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-text-muted">
                  <span className="text-accent-500 font-bold mt-0.5">✔</span>
                  <strong>空白期間なし:</strong> 休学や退学をしていないため、同年代と一緒にストレートで卒業が可能です。
                </li>
                <li className="flex items-start gap-3 text-sm text-text-muted">
                  <span className="text-accent-500 font-bold mt-0.5">✔</span>
                  <strong>単位等の引き継ぎ:</strong> 前の学校で修得した単位や在籍期間をそのまま引き継げます。
                </li>
              </ul>
            </div>

            {/* 編入学 */}
            <div className="bg-primary-50 rounded-3xl p-8 border border-primary-100 relative">
              <div className="absolute top-0 right-0 bg-primary-700 text-white text-sm font-bold py-1 px-4 rounded-bl-xl rounded-tr-3xl">
                高校を中退された方
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4 mt-2">編入学（再入学）</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                高校をすでに中途退学した（学校に在籍していない）方が、再び高校に入学し直すことです。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-text-muted">
                  <span className="text-primary-700 font-bold mt-0.5">✔</span>
                  <strong>入学時期に注意:</strong> 学校によって編入学を受け入れている時期（4月や10月など）が異なります。
                </li>
                <li className="flex items-start gap-3 text-sm text-text-muted">
                  <span className="text-primary-700 font-bold mt-0.5">✔</span>
                  <strong>単位等の引き継ぎ:</strong> 退学前に修得済みの単位があれば、その分を引き継ぐことができます。
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* 3. 転校の手順 */}
      <Section bg="gray">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">転校までの5つのステップ</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              転入学（転校）をスムーズに進めるための基本的な流れをご紹介します。最も重要なのは、焦らずに自分に合う環境をじっくり見極めることです。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { 
                  title: "情報収集・学校比較", 
                  desc: "当サイトなどのポータルサイトを利用し、通える範囲の通信制高校やサポート校をリストアップします。資料請求も活用しましょう。" 
                },
                { 
                  title: "学校説明会・見学への参加", 
                  desc: "気になった学校の個別相談やオープンキャンパスに足を運び、学校の雰囲気や先生の対応、通いやすさを直接確かめます。" 
                },
                { 
                  title: "出願意思の決定・現在の学校に相談", 
                  desc: "転校先が決まったら、現在の高校の担任の先生に「転学したい」旨を伝え、必要な書類（在籍証明書や成績証明書など）の発行を依頼します。" 
                },
                { 
                  title: "出願・選考（面接・作文など）", 
                  desc: "新しい学校へ必要書類を提出します。多くの通信制高校では学力テストよりも、書類選考や面接、作文によって「やり直したい意志」を確認します。" 
                },
                { 
                  title: "入学手続き・登校スタート", 
                  desc: "合格後、学費の納入やオリエンテーションを経て正式に転入学となります。自分のペースでゆっくりと新しい学校生活を始めましょう。" 
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-primary-50">
                  <div className="shrink-0 md:w-32 flex flex-col items-center justify-center border-r border-primary-100 pr-6">
                    <span className="text-accent-500 font-black text-sm tracking-widest mb-1">STEP</span>
                    <span className="text-4xl font-bold text-primary-900">0{i + 1}</span>
                  </div>
                  <div className="grow pt-1">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{step.title}</h3>
                    <p className="text-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-primary-50 p-6 rounded-2xl text-center border-l-4 border-accent-500">
              <p className="font-semibold text-primary-900 text-sm md:text-base leading-relaxed">
                ⚠️ 注意ポイント： 転校の手続き（特に書類準備）には時間がかかる場合があります。転校を考え始めたら、早めに現在の学校へ相談することをお勧めします。また「退学届け」を出してしまうと編入学扱いになってしまうため、必ず「転学届け」を提出するようにしてください。
              </p>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* 4. CTA */}
      <Section bg="white">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center border border-primary-100 bg-primary-50 p-12 rounded-3xl shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 tracking-tight">
              さっそく、あなたに合う学校を探してみましょう
            </h2>
            <p className="text-text-muted mb-10 text-balance">
              通信制ナビなら、希望のエリアや「オンライン対応」「不登校対応」などの特徴から、全国の学校をスムーズに検索できます。
            </p>
            <div className="flex justify-center">
              <Link href="/schools">
                <Button variant="primary" size="lg" className="w-full md:w-auto md:px-16">
                  学校を条件から探す
                </Button>
              </Link>
            </div>
          </div>
        </FadeUp>
      </Section>
    </div>
  );
}
