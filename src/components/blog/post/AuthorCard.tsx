import React from 'react';
import { Avatar } from '@components/ui/avatar';
import { BlogData } from '@lib/services/data';

interface Props {
  author: BlogData['author']
}

export const AuthorCard: React.FC<Props> = ({ author }) => {
  return (
    <div className="flex flex-row gap-[2rem]">
      <div>
        <Avatar src={author.avatar} size="lg" circle />
      </div>

      <div className="flex flex-col gap-[0.5rem] flex-1">
        <h5>
          {author.name}
        </h5>

        <p className="text-justify">
          {author.bio}
        </p>

        <p className="text-gray-500">
          {author.location}
        </p>
      </div>
    </div>
  );
};
