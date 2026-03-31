import { projectsData } from '@/lib/data';

export default function sitemap() {
  const baseUrl = 'https://r3ds.xyz';

  const projects = projectsData.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    ...projects,
  ];
}