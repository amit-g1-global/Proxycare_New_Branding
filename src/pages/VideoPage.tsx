import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface YouTubeVideo {
  id: string;
  title: string;
  date: string;
  thumbnailUrl: string;
}

const MOCK_INSTAGRAM = [
  { id: 4, title: 'Community highlights & events', date: 'Sep 21, 2026' },
  { id: 5, title: 'Behind the scenes at FastTrack', date: 'Sep 15, 2026' },
  { id: 6, title: 'A day with a dedicated assistant', date: 'Sep 10, 2026' },
];

// Configuration
const YOUTUBE_API_KEY = 'AIzaSyD0iVyu1VQqZildTW6nZMi1hoIrdMap10A';
const YOUTUBE_CHANNEL_ID = 'UC1HKRNh1Z7wbG-F3F0MX0Ug';

export default function VideoPage() {
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>([]);
  const [isLoadingYoutube, setIsLoadingYoutube] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchYouTubeVideos() {
      if (!YOUTUBE_CHANNEL_ID) {
        // Fallback to mock data if Channel ID is not yet provided
        setYoutubeVideos([
          { id: 'mock1', title: 'Understanding Proxycare Coordination', date: 'Oct 12, 2026', thumbnailUrl: '' },
          { id: 'mock2', title: 'How to organize your medical records', date: 'Oct 05, 2026', thumbnailUrl: '' },
          { id: 'mock3', title: 'Emergency support explained', date: 'Sep 28, 2026', thumbnailUrl: '' },
        ]);
        setIsLoadingYoutube(false);
        return;
      }

      try {
        // YouTube quota optimization: Use the channel's "Uploads" playlist ID (replace UC with UU)
        const uploadsPlaylistId = YOUTUBE_CHANNEL_ID.replace(/^UC/, 'UU');
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${YOUTUBE_API_KEY}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch YouTube videos');
        
        const data = await response.json();
        const formattedVideos = data.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          date: new Date(item.snippet.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
          thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url || '',
        }));
        
        setYoutubeVideos(formattedVideos);
      } catch (err) {
        console.error('YouTube API Error:', err);
      } finally {
        setIsLoadingYoutube(false);
      }
    }

    fetchYouTubeVideos();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main style={{ flex: 1, background: '#faf6f0', padding: '160px 0 80px' }}>
        <div className="pc-container">
          
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h1 className="pc-h2" style={{ marginTop: 16 }}>Follow Our <span style={{ color: '#1147a8' }}>Journey</span></h1>
            <p className="pc-sub" style={{ marginTop: 12 }}>Stay connected with Proxycare. Watch our guides and keep up with our latest updates.</p>
          </div>

          {/* YouTube Section */}
          <div style={{ marginBottom: 80 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
              <div>
                <h2 style={{ fontSize: 28, fontWeight: 600, color: '#0d2137', margin: 0, fontFamily: '"Playfair Display", serif' }}>Latest Videos</h2>
                <p style={{ margin: '8px 0 0', color: '#6f6f6f' }}>Educational content and guides from our team.</p>
              </div>
              <a href={YOUTUBE_CHANNEL_ID ? `https://youtube.com/channel/${YOUTUBE_CHANNEL_ID}` : "https://youtube.com"} target="_blank" rel="noopener noreferrer" className="pc-btn-primary" style={{ padding: '12px 24px', textDecoration: 'none' }}>
                Subscribe on YouTube
              </a>
            </div>
            
            <div className="pc-video-grid">
              {isLoadingYoutube ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: '#6f6f6f' }}>Loading videos...</div>
              ) : youtubeVideos.length === 0 ? (
                <div style={{ 
                  gridColumn: '1 / -1', 
                  textAlign: 'center', 
                  padding: '40px 0'
                }}>
                  <h2 style={{ fontSize: 36, fontWeight: 600, color: '#0d2137', marginBottom: 16, fontFamily: '"Playfair Display", serif' }}>New videos coming soon</h2>
                  <p style={{ color: '#6f6f6f', margin: 0, maxWidth: 600, marginInline: 'auto', lineHeight: 1.5 }}>
                    We are working on helpful new videos for you and your family.<br />
                    Subscribe to our channel to get notified the moment we upload them!
                  </p>
                </div>
              ) : (
                youtubeVideos.map((video) => (
                  <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="pc-video-card">
                      <div 
                        className="pc-video-thumbnail yt-mock"
                        style={video.thumbnailUrl ? { backgroundImage: `url(${video.thumbnailUrl})` } : {}}
                      >
                        <div className="pc-play-button-mock">▶</div>
                      </div>
                      <div className="pc-video-info">
                        <div className="pc-video-title">{video.title}</div>
                        <div className="pc-video-date">{video.date} • YOUTUBE</div>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>
          </div>

          {/* Instagram Section (Hidden for now) */}
          {/* 
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
              <div>
                <h2 style={{ fontSize: 28, fontWeight: 600, color: '#0d2137', margin: 0, fontFamily: '"Playfair Display", serif' }}>Instagram Feed</h2>
                <p style={{ margin: '8px 0 0', color: '#6f6f6f' }}>Stories of hope and community highlights.</p>
              </div>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="pc-btn-primary" style={{ padding: '12px 24px', textDecoration: 'none', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', border: 'none' }}>
                Follow on Instagram
              </a>
            </div>
            
            <div className="pc-video-grid">
              {MOCK_INSTAGRAM.map((post) => (
                <div key={post.id} className="pc-video-card">
                  <div className="pc-video-thumbnail insta-mock">
                  </div>
                  <div className="pc-video-info">
                    <div className="pc-video-title">{post.title}</div>
                    <div className="pc-video-date">{post.date} • INSTAGRAM</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}

        </div>
      </main>

      <Footer />
    </div>
  );
}
