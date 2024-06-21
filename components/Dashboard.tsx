"use client";

import { createClient } from "@/utils/supabase/client";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [notes, setNotes] = useState<any[] | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [command, setCommand] = useState("");
  const supabase = createClient();

  const [selectedVideoId, setSelectedVideoId] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("videos").select();
      setNotes(data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleSelectVideo = async (command: string) => {
    console.log(command);
    const response = await fetch("/api/stream", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ videoId: selectedVideoId, command: command }),
    });

    if (response.ok) {
      console.log(`${selectedVideoId} sent successfully`);
      setCurrentImage(selectedVideoId);
    } else {
      console.error("Failed to send control command");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center w-screen lg:w-full bg-brand lg:rounded-lg text-white">
      <div className="flex w-full justify-between p-4">
        <select
          value={selectedVideoId}
          onChange={(e) => setSelectedVideoId(e.target.value)}
          className="mr-3 border rounded p-2 bg-slate-300/20"
        >
          <option value="">Select a video</option>
          {notes &&
            notes.map((note: any) => (
              <option key={note.id} value={note.image}>
                {note.title}
              </option>
            ))}
        </select>

        <div className="flex gap-4 bg-slate-300/10 rounded px-2 py-0 animate-pulse *:transform *:transition *:ease-in-out">
          <button
            className="hover:scale-150"
            onClick={() => setCommand("play")}
          >
            <PlayIcon size={20} />
          </button>
          <button
            className="hover:scale-150"
            onClick={() => setCommand("pause")}
          >
            <PauseIcon size={20} />
          </button>
          {/* <button className="active:underline" onClick={() => setCommand('fullscreen')}>Fullscreen</button> */}
          <button
            className="px-2 rounded-md outline shadow hover:scale-110 *:hover:animate-bounce"
            onClick={() => handleSelectVideo(command)}
          >
            <p className="font-bold">GO!</p>
          </button>
        </div>
      </div>
      {currentImage && <video className="pb-4" src={currentImage} width="920" autoPlay />}
    </div>
  );
}

// import { createClient } from '@/utils/supabase/client'
// import { useEffect, useState } from 'react'

// export default function Page() {
//   const [notes, setNotes] = useState<any[] | null>(null)
//   const [currentImage, setCurrentImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const supabase = createClient()

//   const [selectedVideoId, setSelectedVideoId] = useState('');

//   const handleSelectVideo = async () => {
//     try {
//       // Send a POST request to the API endpoint with the selected video ID
//       const response = await fetch('/api/select-video', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ videoId: selectedVideoId }),
//       });

//       // Handle success or show notification to the user
//       if (response.ok) {
//         alert('Video selected successfully');
//       } else {
//         const data = await response.json();
//         throw new Error(data.message || 'Failed to select video');
//       }
//     } catch (error) {
//       // Handle error or show error message to the user
//       console.error('Error selecting video:', error);
//       // alert(error.message || 'Failed to select video');
//     }
//   };

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await supabase.from('notes').select()
//       setNotes(data)
//       setLoading(false);
//     }
//     getData()
//   }, [])

//   const handleClick = (image: string) => {
//     setCurrentImage(image)
//     console.log('image', image)
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {notes && notes.map((note: any) => (
//         <div key={note.id}>
//           <button onClick={() => handleClick(note.image) }>{note.title}</button>
//           {/* <p>{note.image}</p> */}
//         </div>
//       ))}
//       {currentImage && <video src={currentImage} controls autoPlay />}
//       <div>
//       <h1>Admin Dashboard</h1>
//       <select value={selectedVideoId} onChange={(e) => setSelectedVideoId(e.target.value)}>
//         <option value="">Select a video</option>
//         <option value="video1">Video 1</option>
//         <option value="video2">Video 2</option>
//         {/* Add more options dynamically based on available videos */}
//       </select>
//       <button onClick={handleSelectVideo}>Select Video</button>
//     </div>
//     </>
//   )
// }
