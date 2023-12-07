export default function ShareBtn({
  children,
  title,
  onClick,
}: {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button className="p-2 flex justify-center items-center" onClick={onClick}>
      <div className="flex min-w-[140px] p-2  justify-between items-center border-2 rounded-lg shadow-md">
        {children}
        <span className="ml-2 font-bold">{title}</span>
      </div>
    </button>
  );
}
