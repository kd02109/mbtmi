export default function NewCircle({ number }: { number: number }) {
  return (
    <div className="w-8 h-8  rounded-full flex justify-center items-center bg-red-400 font-bold text-white">
      {number}
    </div>
  );
}
