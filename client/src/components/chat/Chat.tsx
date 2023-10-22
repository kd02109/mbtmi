export default function Chat({ message }: { message: string }) {
  return (
    <div className="chat-end chat">
      <div className="chat-bubble text-black bg-yellow-400 break-words">
        {message}
      </div>
    </div>
  );
}
