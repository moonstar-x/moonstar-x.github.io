import React from 'react';
import { getAllWorkMetadata } from '@lib/services/work';

const WorkPage = async () => {
  const work = await getAllWorkMetadata();

  return (
    <div>
      <pre>
        {JSON.stringify(work, null, 2)}
      </pre>
    </div>
  );
};

export default WorkPage;
