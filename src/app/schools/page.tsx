'use client';

import React, { useState, useMemo } from 'react';
import { Section } from '@/components/layout/Section';
import FadeUp from '@/components/ui/FadeUp';
import { SchoolCard } from '@/components/domain/SchoolCard';
import schoolsData from '@/data/schools.json';
import { School } from '@/types/school';

export default function SchoolsPage() {
  const [regionFilter, setRegionFilter] = useState('');
  const [keywordFilter, setKeywordFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const schools = schoolsData as School[];

  // All unique tags for building the filter
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    schools.forEach(s => s.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, [schools]);

  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      // keyword
      const matchKeyword = keywordFilter 
        ? (school.name.includes(keywordFilter) || school.description.includes(keywordFilter))
        : true;
      // region
      const matchRegion = regionFilter 
        ? school.region.includes(regionFilter) || school.areas.includes(regionFilter)
        : true;
      // tag
      const matchTag = tagFilter 
        ? school.tags.includes(tagFilter) || (tagFilter === 'オンライン対応' && school.online)
        : true;

      return matchKeyword && matchRegion && matchTag;
    });
  }, [schools, keywordFilter, regionFilter, tagFilter]);

  return (
    <div className="w-full min-h-screen bg-bg-base">
      <Section className="pb-16 pt-24 md:pt-32">
        <FadeUp yOffset={20}>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">学校を探す</h1>
        </FadeUp>
        
        {/* Search & Filter Controls */}
        <FadeUp delay={0.1} yOffset={20}>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-50 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-primary-900 mb-2">キーワード</label>
                <input 
                  type="text" 
                  value={keywordFilter}
                  onChange={e => setKeywordFilter(e.target.value)}
                  placeholder="学校名などで検索" 
                  className="w-full bg-primary-50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent-500 outline-none text-text-main"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-primary-900 mb-2">エリア</label>
                <select 
                  value={regionFilter}
                  onChange={e => setRegionFilter(e.target.value)}
                  className="w-full bg-primary-50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent-500 outline-none text-text-main appearance-none"
                >
                  <option value="">すべてのエリア</option>
                  <option value="関東">関東</option>
                  <option value="関西">関西</option>
                  <option value="北海道">北海道</option>
                  <option value="全国">オンライン全国</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-primary-900 mb-2">特徴</label>
                <select 
                  value={tagFilter}
                  onChange={e => setTagFilter(e.target.value)}
                  className="w-full bg-primary-50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent-500 outline-none text-text-main appearance-none"
                >
                  <option value="">すべての特徴</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                  <option value="オンライン対応">オンライン対応のみ</option>
                </select>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Results */}
        <FadeUp delay={0.2} yOffset={20}>
          <div className="mb-6 flex justify-between items-end border-b border-primary-50 pb-4">
            <h2 className="text-xl font-bold text-primary-900">
              検索結果 <span className="text-accent-600 ml-2">{filteredSchools.length}</span>件
            </h2>
          </div>
          
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {filteredSchools.map((school, i) => (
                <FadeUp key={school.id} delay={0.1 + (i * 0.05)} yOffset={30}>
                  <SchoolCard school={school} />
                </FadeUp>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-text-muted text-lg">条件に一致する学校が見つかりませんでした。</p>
            </div>
          )}
        </FadeUp>
      </Section>
    </div>
  );
}
