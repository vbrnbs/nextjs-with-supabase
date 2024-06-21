export default function ProtectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-screen flex items-center justify-center py-6 font-bold text-white text-center bg-brand">
        !GET YOUR SCORE NOW!
      </div>
      {children}
    </>
  );
}
