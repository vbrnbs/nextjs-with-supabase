'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState, useContext } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
      setLoading(false);
    }
    getData()
  }, [])

  const handleClick = (image: string) => {
    setCurrentImage(image)
    console.log('image', image)
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {notes && notes.map((note: any) => (
        <div key={note.id}>
          <button onClick={() => handleClick(note.image) }>{note.title}</button>
          {/* <p>{note.image}</p> */}
        </div>
      ))}
      {currentImage && <video src={currentImage} controls autoPlay />}


    </>
  )
}