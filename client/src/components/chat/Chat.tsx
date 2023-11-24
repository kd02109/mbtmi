import Image from 'next/image';
type Prop = {
  time: string;
  message?: string;
  image?: string;
};

export default function Chat({ message, image }: Prop) {
  return (
    <div className="chat-end chat">
      <div className="chat-bubble text-black bg-yellow-400 break-words">
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
