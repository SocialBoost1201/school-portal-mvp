import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* text-logo */}
          <span className="text-xl font-bold tracking-tight text-primary-900">
            通信制ナビ
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/schools" className="text-sm font-medium text-text-muted hover:text-primary-700 transition-colors">
            学校を探す
          </Link>
          <Link href="/guide" className="text-sm font-medium text-text-muted hover:text-primary-700 transition-colors">
            転入学ガイド
          </Link>
          <Link href="/for-schools" className="text-sm font-medium text-accent-600 hover:text-accent-500 transition-colors">
            掲載募集
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="primary" size="sm">
            ご相談・お問い合わせ
          </Button>
        </div>

        {/* Mobile menu button (placeholder) */}
        <button className="md:hidden p-2 text-text-muted">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
