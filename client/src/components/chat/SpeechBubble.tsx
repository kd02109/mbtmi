import Image from 'next/image';

export default function SpeechBubble({
  name,
  time,
  message,
  image,
}: {
  profile: string;
  name: string;
  time: string;
  message?: string;
  image?: string;
}) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avater">
        <div className="w-10 rounded-lg">
          <Image
            src={`/images/profile.png`}
            alt={name}
            width={46}
            height={46}
          />
        </div>
      </div>
      <div className="chat-header text-black">
        {name}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble bg-white text-black">
        {message && message}
        {image && (
          <Image
            src={image}
            alt={'image'}
            width={120}
            height={100}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
