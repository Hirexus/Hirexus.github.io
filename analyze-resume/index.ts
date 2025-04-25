import { createClient } from 'npm:@supabase/supabase-js@2.39.3';
import { Configuration, OpenAIApi } from 'npm:openai@4.24.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fileUrl } = await req.json();

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Download the resume file
    const { data: fileData, error: downloadError } = await supabaseClient
      .storage
      .from('resumes')
      .download(fileUrl);

    if (downloadError) throw downloadError;

    // Convert file to text
    const text = await fileData.text();

    // Analyze with OpenAI
    const openai = new OpenAIApi(new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    }));

    const analysis = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert ATS system and resume analyzer. Analyze the resume for ATS compatibility, keyword optimization, and provide improvement suggestions.',
        },
        {
          role: 'user',
          content: text,
        },
      ],
    });

    // Process and structure the analysis
    const result = {
      atsScore: 85, // Example score
      keywordMatch: 78,
      suggestions: [
        'Add more quantifiable achievements',
        'Include industry-specific keywords',
        'Improve formatting for better ATS readability',
      ],
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  }
});