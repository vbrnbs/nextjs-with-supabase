import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'

export default async function Page() {
const supabase = createClient()
const { data: notes } = await supabase.from('notes').select()

return(
    <div>
            {notes && notes.map((note) => (
                    <div key={note.id}>
                    {/* <h2>{note.title}</h2>
                    <p>{note.image}</p> */}
                    <Image 
                        src={note.image} 
                        alt={note.title}
                        layout="fill"
                        objectFit="contain"
                    />

                    </div>
            ))}
    </div>
)
  
//   <pre>{JSON.stringify(notes, null, 2)}</pre>
}