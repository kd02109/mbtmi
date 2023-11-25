export default function LoadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full h-full min-h-screen max-w-xl m-auto flex-col items-center  bg-white">
      {children}
    </main>
  );
}
