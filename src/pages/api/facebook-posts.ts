import type { APIRoute } from 'astro';

interface FacebookPost {
  message?: string;
  created_time: string;
  type: string;
  permalink_url: string;
  full_picture?: string;
  attachments?: {
    data: Array<{
      media?: {
        image?: {
          src: string;
        };
      };
      type: string;
      url: string;
    }>;
  };
}

export const prerender = false;  // Important: This ensures the API runs at request time

export const GET: APIRoute = async ({ request }) => {
  try {
    const pageId = '107112007853485';
    const accessToken = 'EAARdS5kPdZBIBO7JUKNb6JYEzkquKEjZCn92fWZCUV5NyCdGiZB4vditNKOf8WK3GSZAL2l6Xmm9NoOZBRheq0F7WAcQvJQiVmx2hx07jrA54A5ZCK0LicgkZAmZCaK7GAcOxN3BrZAhYmRDdfcxB9KSchIMLyYguUPblCyZCxqQIfFRhR1qicKEsbOjJUto6v4YdTUQMDIfNFOF1FdKB6bqiflcL1HbnSMp2ZCkraCZBuGLs';

    const params = new URLSearchParams({
      fields: 'message,created_time,permalink_url,full_picture,attachments{media,type,url}',
      access_token: accessToken,
      limit: '10'
    });

    const apiUrl = new URL(`https://graph.facebook.com/v18.0/${pageId}/posts`);
    apiUrl.search = params.toString();

    console.log('Fetching from Facebook API:', apiUrl.toString());
    
    const response = await fetch(apiUrl.toString());
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Facebook API Error Response:', errorData);
      throw new Error(`Facebook API returned ${response.status}: ${errorData}`);
    }

    const data = await response.json();
    
    if (!data.data) {
      console.error('Unexpected Facebook API response format:', data);
      throw new Error('Unexpected Facebook API response format');
    }

    console.log('Successfully fetched Facebook posts:', data.data.length);
    
    // Transform posts into markdown format
    const formattedPosts = data.data.map((post: FacebookPost) => {
      const date = new Date(post.created_time).toLocaleDateString();
      const imageUrl = post.full_picture || 
        (post.attachments?.data[0]?.media?.image?.src);
      
      return {
        content: post.message || '',
        date,
        imageUrl,
        permalink: post.permalink_url,
        markdown: `
${imageUrl ? `![Post Image](${imageUrl})\n\n` : ''}
${post.message ? post.message.replace(/\n/g, '\n\n') : ''}

*Posted on ${date}* • [View on Facebook](${post.permalink_url})
---
`
      };
    });

    return new Response(JSON.stringify({ posts: formattedPosts }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300', // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error('Error in Facebook posts API:', error instanceof Error ? error.message : 'Unknown error');
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch Facebook posts',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
