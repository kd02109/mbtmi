import Image from 'next/image';

export default function ResultNotification() {
  return (
    <div className="bg-white w-[90%] h-[7vh] rounded-lg self-center mt-4 flex items-center justify-center relative">
      <Image
        src={'/images/notification.png'}
        alt="notification"
        width={36}
        height={36}
        className="mr-2 absolute left-3"
      />
      <h3 className="text-lg font-semibold">AI가 분석한 당신의 결과는 ?!</h3>
    </div>
  );
}
