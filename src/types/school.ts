export interface School {
  id: string;
  slug: string;
  name: string;
  type: '通信制高校' | 'サポート校' | '技能連携校';
  region: string;
  areas: string[];
  tags: string[];
  attendanceStyle: string;
  online: boolean;
  description: string;
  recommendedFor: string[];
  officialUrl: string;
  image: string;
}
