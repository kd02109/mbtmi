import { getUserNumber } from '@/api/clientApi';
import Home from '@/components/layout/Home';

export const revalidate = 1200;

export default async function HomePage() {
  const userNumber = await getUserNumber();
  return <Home userNumber={userNumber} />;
}
