import Image from 'next/image';

export default function ResultNotification() {
  return (
    <div className="bg-white w-[90%] h-[5vh] rounded-lg self-center mt-2 flex items-center justify-center relative">
      <Image
        src={'/images/notification.png'}
        alt="notification"
        width={24}
        height={24}
        className="mr-2 absolute left-3"
      />
      <h3 className="text-lg font-semibold">주문하신 붕어빵 나왔습니다!</h3>
    </div>
  );
}
