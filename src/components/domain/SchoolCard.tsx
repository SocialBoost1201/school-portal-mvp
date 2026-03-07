import React from 'react';
import Link from 'next/link';
import { School } from '@/types/school';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  return (
    <div className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-primary-50 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 ease-out">
      {/* Target Image Size: md:w-1/3 approx */}
      <div className="w-full md:w-72 h-48 md:h-auto relative bg-primary-50 overflow-hidden shrink-0">
        <img 
          src={school.image} 
          alt={school.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-primary-900 border border-white/20 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
            {school.type}
          </span>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sm text-text-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {school.region}（{school.areas.join('、')}）
            </div>
            <h3 className="text-2xl font-bold text-primary-900 leading-tight tracking-tight group-hover:text-accent-600 transition-colors duration-300">
              {school.name}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {school.tags.map((tag, idx) => (
            <Tag key={idx} label={tag} variant="default" />
          ))}
          {school.online && <Tag label="オンライン対応" variant="highlight" />}
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 flex-grow">
          {school.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto border-t border-primary-50 pt-6">
          <Link href={`/schools/${school.slug}`} className="w-full sm:w-auto">
            <Button variant="outline" fullWidth>
              詳細を見る
            </Button>
          </Link>
          <a href={school.officialUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto sm:ml-auto">
            <Button variant="primary" fullWidth className="gap-2">
              <span>公式サイトへ</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
