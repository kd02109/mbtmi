export default function ResultSection({
  title,
  children,
  classname,
}: {
  title: string;
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <section
      className={`my-28 w-full flex flex-col justify-center items-center`}>
      <h3
        className={`text-bgBrown font-bold text-2xl mb-4 w-[85%] text-center`}>
        {title}
      </h3>
      {children}
    </section>
  );
}
