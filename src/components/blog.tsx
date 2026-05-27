import COLOR from '../../constants/color'
import { useState, useEffect } from 'react'

interface BlogPost {
  id: number
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  author: string
  readTime: string
}

interface YouTubeResource {
  id: number
  title?: string
  channel: string
  videoId: string
  description: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Power of Mindful Living: Transform Your Daily Routine',
    date: 'May 15, 2024',
    category: 'Wellness',
    author: 'Felicia Coach',
    readTime: '6 min read',
    excerpt: 'Discover how integrating mindfulness into your daily routine can lead to lasting wellness benefits and improved mental clarity.',
    content: 'Mindfulness is more than just meditation. It\'s about being fully present in every moment. Learn practical techniques you can implement today...',
  },
  {
    id: 2,
    title: 'Building Confidence: A Step-by-Step Guide',
    date: 'May 10, 2024',
    category: 'Personal Growth',
    author: 'Felicia Coach',
    readTime: '5 min read',
    excerpt: 'Confidence is built, not born. Explore evidence-based strategies to strengthen your self-belief and unlock your potential.',
    content: 'Confidence comes from self-awareness and consistent action. In this guide, we\'ll walk through proven methods...',
  },
  {
    id: 3,
    title: 'Work-Life Balance: Creating Harmony in Chaos',
    date: 'May 5, 2024',
    category: 'Lifestyle',
    author: 'Felicia Coach',
    readTime: '7 min read',
    excerpt: 'Struggling to balance work and personal life? Learn actionable strategies to create sustainable harmony and reduce burnout.',
    content: 'Finding balance is essential for long-term success. Here are the key pillars of work-life harmony...',
  },
  {
    id: 4,
    title: 'Goal Setting That Actually Works',
    date: 'April 28, 2024',
    category: 'Personal Growth',
    author: 'Felicia Coach',
    readTime: '8 min read',
    excerpt: 'Most people set goals but fail to achieve them. Discover the framework that turns dreams into reality.',
    content: 'Setting effective goals requires more than wishful thinking. Learn the SMART framework and beyond...',
  },
  {
    id: 5,
    title: 'Emotional Intelligence: Your Secret to Success',
    date: 'April 20, 2024',
    category: 'Wellness',
    author: 'Felicia Coach',
    readTime: '6 min read',
    excerpt: 'High IQ doesn\'t guarantee success. Emotional intelligence is the key skill employers and loved ones value most.',
    content: 'Emotional intelligence impacts every relationship and opportunity. Here\'s how to develop it...',
  },
  {
    id: 6,
    title: 'Overcoming Self-Doubt: Reclaim Your Power',
    date: 'April 12, 2024',
    category: 'Personal Growth',
    author: 'Felicia Coach',
    readTime: '7 min read',
    excerpt: 'Self-doubt can hold you back. Learn powerful techniques to silence the inner critic and embrace your capabilities.',
    content: 'Self-doubt is a common barrier. We\'ll explore cognitive reframing and other powerful tools...',
  },
]

const youtubeResources: YouTubeResource[] = [
  {
    id: 1,
    videoId: 'fOlCOuxwc_4',
    channel: 'Your wellness matters',
    description: 'Start your day with intention. This beginner-friendly mindfulness routine takes just 10 minutes.',
    category: 'Mindfulness',
  },
  {
    id: 2,
    videoId: '_1IU6TfhXPg',
    channel: 'Your wellness matters',
    description: 'A comprehensive challenge to rebuild your confidence and transform how you see yourself.',
    category: 'Personal Growth',
  },
  {
    id: 3,
    videoId: 'GU9BpwURvl0',
    channel: 'Your wellness matters',
    description: 'Explore the research-backed strategies that genuinely improve mental and emotional well-being.',
    category: 'Wellness',
  },
  {
    id: 4,
    videoId: 'Ze3hO0DEk_A',
    channel: 'Your wellness matters',
    description: 'Learn practical stress relief techniques you can use anywhere, anytime.',
    category: 'Wellness',
  },
  {
    id: 5,
    videoId: '6MpGh-2GYFw',
    channel: 'Your wellness matters',
    description: 'A complete masterclass on goal setting, planning, and execution for lasting success.',
    category: 'Personal Growth',
  },
  {
    id: 6,
    videoId: 'ONNnFwSbFto',
    channel: 'Your wellness matters',
    description: 'Develop the emotional skills that drive success in relationships and careers.',
    category: 'Wellness',
  },
]

// Function to fetch YouTube video title from video ID
const fetchYouTubeTitle = async (videoId: string): Promise<string> => {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    )
    if (response.ok) {
      const data = await response.json()
      return data.title
    }
  } catch (error) {
    console.error('Error fetching YouTube title:', error)
  }
  return ''
}

function Blog() {
  const [videoTitles, setVideoTitles] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    // Fetch titles for all videos with missing titles
    youtubeResources.forEach((video) => {
      if (!video.title && video.videoId) {
        fetchYouTubeTitle(video.videoId).then((title) => {
          if (title) {
            setVideoTitles((prev) => ({
              ...prev,
              [video.videoId]: title,
            }))
          }
        })
      }
    })
  }, [])

  // Merge fetched titles with existing titles
  const videosWithTitles = youtubeResources.map((video) => ({
    ...video,
    title: video.title || videoTitles[video.videoId] || 'Loading...',
  }))
  return (
    <div>
      {/* Blog Posts Section */}
      <section className="py-5" style={{ backgroundColor: '#f7f3ea', color: COLOR.scondary }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: '0.24em', color: COLOR.primary }}>
              Insights & Articles
            </p>
            <h1 className="display-5 fw-bold mb-3">Wellness & Personal Growth Blog</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '620px' }}>
              Expert insights, practical tips, and inspiring stories to support your wellness journey and personal transformation.
            </p>
          </div>

          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <div className="h-100 p-4 rounded-4" style={{ backgroundColor: '#ffffff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column' }}>
                  <div className="mb-3">
                    <span className="badge rounded-pill px-3 py-1 mb-2" style={{ backgroundColor: `${COLOR.primary}20`, color: COLOR.primary }}>
                      {post.category}
                    </span>
                    <p className="text-muted mb-0 small">{post.date} • {post.readTime}</p>
                  </div>
                  
                  <h4 className="fw-bold mb-3" style={{ color: COLOR.scondary, lineHeight: '1.5' }}>
                    {post.title}
                  </h4>
                  
                  <p className="text-muted mb-4 flex-grow-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="d-flex justify-content-between align-items-center pt-3" style={{ borderTop: `1px solid ${COLOR.primary}20` }}>
                    <small className="text-muted">By {post.author}</small>
                    <button className="btn btn-sm px-3" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Resources Section */}
      <section className="py-5" style={{ backgroundColor: '#ffffff', color: COLOR.scondary }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold mb-2" style={{ letterSpacing: '0.24em', color: COLOR.primary }}>
              Video Resources
            </p>
            <h2 className="display-5 fw-bold mb-3">Learn from Our YouTube Channel</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '620px' }}>
              Subscribe to our channel for free wellness tips, guided meditations, and personal growth lessons.
            </p>
          </div>

          <div className="row g-4">
            {videosWithTitles.map((video) => (
              <div key={video.id} className="col-md-6 col-lg-4">
                <div className="h-100 rounded-4 overflow-hidden" style={{ backgroundColor: '#f9f7f1', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.08)', display: 'flex', flexDirection: 'column' }}>
                  {/* YouTube Embed */}
                  <div style={{ position: 'relative', backgroundColor: '#000', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="mb-2">
                      <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: `${COLOR.primary}20`, color: COLOR.primary }}>
                        {video.category}
                      </span>
                    </div>

                    <h5 className="fw-bold mb-2" style={{ color: COLOR.scondary, lineHeight: '1.4' }}>
                      {video.title}
                    </h5>

                    <p className="text-muted small mb-3 flex-grow-1">
                      {video.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center pt-3" style={{ borderTop: `1px solid ${COLOR.primary}20` }}>
                      <small className="text-muted">{video.channel}</small>
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm px-3"
                        style={{ backgroundColor: COLOR.primary, color: '#fff', textDecoration: 'none' }}
                      >
                        Watch →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Channel Subscription CTA */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="p-5 rounded-4 text-center" style={{ backgroundColor: '#f7f3ea', border: `2px solid ${COLOR.primary}` }}>
                <h3 className="fw-bold mb-3">Don't Miss Out on New Content</h3>
                <p className="text-muted mb-4">
                  Subscribe to our YouTube channel for weekly tips, guided sessions, and wellness insights.
                </p>
                <a 
                  href="https://youtube.com/@yourwellnessmatter?feature=shared" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-5 py-3"
                  style={{ backgroundColor: COLOR.primary, color: '#fff', fontSize: '16px', fontWeight: '600' }}
                >
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-5" style={{ backgroundColor: '#f7f3ea', color: COLOR.scondary }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="p-5 rounded-4" style={{ backgroundColor: '#ffffff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.08)' }}>
                <h3 className="fw-bold mb-2 text-center">Get Wellness Tips in Your Inbox</h3>
                <p className="text-muted text-center mb-4">
                  Sign up for our weekly newsletter featuring curated articles, video recommendations, and exclusive resources.
                </p>
                <form className="d-flex gap-2 flex-column flex-sm-row">
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    className="form-control form-control-lg"
                    style={{ borderColor: `${COLOR.primary}30` }}
                  />
                  <button 
                    type="submit"
                    className="btn btn-lg px-5"
                    style={{ backgroundColor: COLOR.primary, color: '#fff', whiteSpace: 'nowrap' }}
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-muted text-center mt-3 small">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog