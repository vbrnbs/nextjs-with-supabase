import { supabase } from "../../../utils/supabase/client"

export async function POST(request: Request) {
    try {
      const video = await request.json();
      const { data, error } = await supabase
        .from('player')
        .upsert({ image: video.videoId, command: video.command });
  
      return Response.json({ success: true, message: `${video} with command: ${video.command}` });
    } catch (error) {
      console.error('Error:', error);
      return Response.json({ success: false, message: 'An unexpected error occurred' });
    }
  }
