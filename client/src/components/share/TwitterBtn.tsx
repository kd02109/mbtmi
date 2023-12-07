import ShareBtn from '@/components/share/ShareBtn';
import Twitter from '@/components/svg/Twitter';

export default function TwitterBtn({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const openWidnow = (url: string) => {
    window.open(url, '_blank');
  };
  const shareToTwitter = () => {
    const sharedLink =
      'text=' + encodeURIComponent(title + ' \n ') + encodeURIComponent(url);
    openWidnow(`https://twitter.com/intent/tweet?${sharedLink}`);
  };
  return (
    <ShareBtn onClick={shareToTwitter} title="X">
      <Twitter width="30" height="30" />
    </ShareBtn>
  );
}
