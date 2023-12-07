'use client';

import ShareBtn from '@/components/share/ShareBtn';
import FaceBook from '@/components/svg/FaceBook';

export default function FaceBookBtn({ url }: { url: string }) {
  const openWidnow = (url: string) => {
    window.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(url);
    openWidnow(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };
  return (
    <ShareBtn onClick={shareToFacebook} title="페이스북">
      <FaceBook width="30" height="30" />
    </ShareBtn>
  );
}
