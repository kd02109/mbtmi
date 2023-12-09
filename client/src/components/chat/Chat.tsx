import Image from 'next/image';
type Prop = {
  time?: string;
  message?: string;
  image?: string;
};

export default function Chat({ message, image, time }: Prop) {
  return (
    <div className="chat-end chat">
      <div className="chat-header text-black">
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className="chat-bubble text-black bg-yellow-400 break-words">
        {message && message}
        {image && (
          <Image
            src={image}
            alt={'image'}
            width={230}
            height={100}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
