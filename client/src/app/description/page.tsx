import Footer from '@/components/layout/Footer';
import DescriptionSwiper from '@/components/swiper/DescriptionSwiper';

export default function DescriptionPage() {
  return (
    <main className="flex w-full min-h-screen max-w-xl m-auto flex-col items-center py-8 px-4 bg-bgChating">
      <DescriptionSwiper />
      <Footer />
    </main>
  );
}
