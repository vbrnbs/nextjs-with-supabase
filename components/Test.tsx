'use client'

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const [selectedVideoId, setSelectedVideoId] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select();
      console.log(data)
      setNotes(data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleSelectVideo = async () => {
    try {
      // Send a POST request to the API endpoint with the selected video ID
      const response = await fetch('/api/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoId: selectedVideoId }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.body.videoId)
        setCurrentImage(data.body.videoId);
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to select video');
      }
    } catch (error) {
      // Handle error or show error message to the user
      console.error('Error selecting video:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <select value={selectedVideoId} onChange={(e) => setSelectedVideoId(e.target.value)} className='bg-black mr-3'>
          <option value="">Select a video</option>
          {notes && notes.map((note: any) => (
            <option key={note.id} value={note.image}>
              {note.title}
            </option>
          ))}
        </select>
        <button onClick={handleSelectVideo} className='px-2 rounded-md outline'>Select Video</button>
      </div>
      {currentImage && <video src={currentImage} width="920" controls autoPlay />}
    </>
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