'use client';
import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clsx from 'clsx';
import { Button } from '@components/ui/button';
import { Icon } from '@components/ui/icon';
import { ClipboardIcon } from '@components/ui/icon/library/ClipboardIcon';
import { TwitterIcon } from '@components/ui/icon/library/TwitterIcon';
import { FacebookIcon } from '@components/ui/icon/library/FacebookIcon';
import { LinkedInIcon } from '@components/ui/icon/library/LinkedInIcon';
import { str } from '@lib/services/strings';

const createFacebookShareUrl = (url: string): string => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
};

const createLinkedInShareUrl = (url: string): string => {
  return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
};

const createTwitterShareUrl = (url: string): string => {
  return `https://x.com/intent/tweet?url=${url}&text=`;
};

export interface Props {
  url?: string
  className?: string
}

export const ShareCard: React.FC<Props> = ({ url, className }) => {
  const [shareUrl, setShareUrl] = useState<string>(url ?? '#');

  useEffect(() => {
    setShareUrl(url ?? window?.location?.href ?? '#');
  }, []);

  return (
    <div className={clsx('p-[1rem] border-solid border border-gray-400 rounded-[4px]', className)}>
      <h5 className="mb-[0.5rem]">
        {str('ui.share_card.title')}
      </h5>

      <p className="text-gray-600 mb-[1rem]">
        {str('ui.share_card.subtitle')}
      </p>

      <div className="flex flex-col tablet:flex-row tablet:justify-center desktop:justify-start gap-[1rem] flex-wrap">
        <CopyToClipboard text={shareUrl}>
          <Button
            color="white"
            size="sm"
            icon={<Icon icon={ClipboardIcon} color="primary" />}
          >
            {str('ui.share_card.buttons.clipboard')}
          </Button>
        </CopyToClipboard>

        <Button
          color="primary"
          size="sm"
          className="!bg-brands-twitter"
          icon={<Icon icon={TwitterIcon} color="white" />}
          href={createTwitterShareUrl(shareUrl)}
          target="_blank"
        >
          {str('ui.share_card.buttons.twitter')}
        </Button>

        <Button
          color="primary"
          size="sm"
          className="!bg-brands-facebook"
          icon={<Icon icon={FacebookIcon} color="white" />}
          href={createFacebookShareUrl(shareUrl)}
          target="_blank"
        >
          {str('ui.share_card.buttons.facebook')}
        </Button>

        <Button
          color="primary"
          size="sm"
          className="!bg-brands-linkedin"
          icon={<Icon icon={LinkedInIcon} color="white" />}
          href={createLinkedInShareUrl(shareUrl)}
          target="_blank"
        >
          {str('ui.share_card.buttons.linkedin')}
        </Button>
      </div>
    </div>
  );
};
