import { supabase } from '@/utils/supabase/client';

export async function POST(request: Request) {
  try {
    const { answers, score, elapsedTime } = await request.json();
    const { data, error } = await supabase
      .from('quiz_res')
      .insert([{ answers, score, elapsedTime }]);

    if (error) {
      throw error;
    }
    return new Response(JSON.stringify({ success: true, message: 'Quiz answers submitted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error submitting quiz answers:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to submit quiz answers' }), { status: 500 });
  }
}
