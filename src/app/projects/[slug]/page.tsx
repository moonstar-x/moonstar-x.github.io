import React from 'react';
import { getAllProjectsSlugs, getProjectBySlug } from '@lib/services/projects';

interface Params {
  slug: string
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const slugs = await getAllProjectsSlugs();

  return slugs.map((slug) => {
    return { slug };
  });
};

interface Props {
  params: Params
}

const ProjectPage: React.FC<Props> = async ({ params }) => {
  const { metadata, content } = await getProjectBySlug(params.slug);

  return (
    <div>
      PROJECT

      <pre>
        {JSON.stringify(metadata, null, 2)}
      </pre>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ProjectPage;
