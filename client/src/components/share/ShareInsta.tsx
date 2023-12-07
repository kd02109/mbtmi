import ShareBtn from '@/components/share/ShareBtn';
import Insta from '@/components/svg/Insta';

export default function ShareInsta() {
  return (
    <ShareBtn
      onClick={() => {
        console.log('hi');
      }}
      title="인스타그램">
      <Insta width="30" height="30" />
    </ShareBtn>
  );
}
