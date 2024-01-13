import React from 'react';
import { getAllProjectsMetadata } from '@lib/services/projects';

const ProjectsPage = async () => {
  const projects = await getAllProjectsMetadata();

  return (
    <div>
      <pre>
        {JSON.stringify(projects, null, 2)}
      </pre>
    </div>
  );
};

export default ProjectsPage;
