import Page from "@/components/Test";

export default async function ProtectedPage() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
        <h1>Admin Dashboard</h1>
        <Page />

      <div>
        {/* <button onClick={() => handlePlayVideo(videoUrl)}>Play Video 1</button>
        <button onClick={() => handlePlayVideo('/videos/video2.mp4')}>Play Video 2</button> */}
        {/* Add more buttons or controls as needed */}
      </div>

      <div>

    </div>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Shipleys
          </a>
        </p>
      </footer>
    </div>
  );
}
