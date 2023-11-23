import Image from 'next/image';

export default function ChatImage({ src }: { src: string }) {
  return (
    <div className="chat-end chat">
      <div className="chat-bubble text-black bg-yellow-400 break-words">
        <Image src={src} alt="image" width={200} height={120} />
      </div>
    </div>
  );
}
