export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full min-h-screen max-h-screen max-w-xl m-auto flex-col items-center  bg-white">
      {children}
    </main>
  );
}
