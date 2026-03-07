import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-primary-700 pb-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-bold tracking-tight text-white">
              通信制ナビ
            </span>
          </Link>
          <p className="text-primary-100/80 leading-relaxed text-sm max-w-sm">
            新しい学び方を、自分に合う学校から。<br/>
            新入学・転入学を考える保護者と生徒のための、安心できる学校案内サイトです。
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">コンテンツ</h3>
          <ul className="space-y-3 text-sm text-primary-100/80">
            <li><Link href="/schools" className="hover:text-white transition-colors">学校を探す</Link></li>
            <li><span className="opacity-50 cursor-not-allowed">通信制高校とは</span></li>
            <li><span className="opacity-50 cursor-not-allowed">サポート校とは</span></li>
            <li><Link href="/guide" className="hover:text-white transition-colors">転入学ガイド</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">運営・学校関係者様へ</h3>
          <ul className="space-y-3 text-sm text-primary-100/80">
            <li><Link href="/for-schools" className="hover:text-accent-500 text-accent-100 transition-colors">学校掲載について</Link></li>
            <li><span className="opacity-50 cursor-not-allowed">運営会社</span></li>
            <li><span className="opacity-50 cursor-not-allowed">利用規約</span></li>
            <li><span className="opacity-50 cursor-not-allowed">プライバシーポリシー</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-100/60">
        <p>&copy; {new Date().getFullYear()} 通信制ナビ All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">※本ページは掲載イメージを含む先行デモです</p>
      </div>
    </footer>
  );
}
