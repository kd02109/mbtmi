import Image from 'next/image';

export default function SpeechBubble({
  name,
  time,
  message,
  image,
  profile,
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
            src={profile}
            alt={name}
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="chat-header text-black">
        {name}
        <time className="ml-2 text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble bg-white text-black">
        {message && message}
        {image && (
          <Image
            src={image}
            alt={'image'}
            width={200}
            height={100}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
