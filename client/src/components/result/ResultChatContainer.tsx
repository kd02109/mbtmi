export default function ResultChatContainer({ chat }: { chat: string }) {
  return (
    <div className="w-96 bg-white text-center py-2 px-4 rounded-md my-2 border-2 border-[#E8E8E8] border-solid shadow-md text-lg font-semibold max-md:w-[80%]">
      {chat}
    </div>
  );
}
