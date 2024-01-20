import React from 'react';
import { Avatar } from '@components/ui/avatar';

export interface Props {
  name: string
  bio: string
  location: string
  avatar: string
}

export const AuthorCard: React.FC<Props> = ({ name, bio, location, avatar }) => {
  return (
    <div className="flex flex-row gap-[2rem]">
      <div>
        <Avatar src={avatar} size="lg" circle />
      </div>

      <div className="flex flex-col gap-[0.5rem] flex-1">
        <h5>
          {name}
        </h5>

        <p className="text-justify">
          {bio}
        </p>

        <p className="text-gray-500">
          {location}
        </p>
      </div>
    </div>
  );
};
