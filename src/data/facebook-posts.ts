export interface FacebookPost {
  message?: string;
  created_time: string;
  permalink_url: string;
  full_picture?: string;
}

export const facebookPosts: FacebookPost[] = [
  // Add your Facebook posts here
  {
    message: "Welcome to DCCP Baguio!\nWe are excited to announce...",
    created_time: "2024-01-01T12:00:00+0000",
    permalink_url: "https://facebook.com/dccp/posts/123",
    full_picture: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=Welcome+to+DCCP"
  }
];
