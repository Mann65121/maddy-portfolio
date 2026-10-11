export type ProjectCategory = 'all' | 'ai-ml' | 'systems' | 'fullstack';

export interface ProjectMetric {
  label: string;
  value: string;
  sourceNote?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tags: string[];
  summary: string;
  problemSolved: string;
  architectureDetails: string[];
  verifiedFeatures: string[];
  metrics: ProjectMetric[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    aiMl?: string[];
    tools?: string[];
  };
  role: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  thumbnail?: string;
  diagramAsset?: string;
  verificationStatus: 'Code Verified' | 'Benchmark Verified' | 'Deployed Live';
  isFeatured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  status: 'Current' | 'Completed';
  summary: string;
  keyContributions: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  coursework: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  organizer: string;
  year: string;
  description: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; highlight?: boolean }[];
}
