import AnimateOnScroll from './AnimateOnScroll';
import { HiArrowRight, HiClock } from 'react-icons/hi';
import './Blog.css';

const posts = [
  {
    category: 'Education',
    title: 'How Hypnotherapy Actually Works: A Science-Based Guide',
    excerpt: 'Discover the neuroscience behind hypnotherapy — how guided relaxation accesses the subconscious mind to create real, lasting behavioral change.',
    readTime: '5 min read',
    date: 'Mar 2026',
  },
  {
    category: 'Wellness',
    title: '7 Natural Ways to Reduce Anxiety (Including Hypnotherapy)',
    excerpt: "Anxiety doesn't have to control your life. Explore proven, drug-free approaches including breathing techniques, mindfulness, and clinical hypnotherapy.",
    readTime: '4 min read',
    date: 'Mar 2026',
  },
  {
    category: 'Self-Improvement',
    title: 'How to Reprogram Your Subconscious Mind for Success',
    excerpt: 'Your subconscious runs 95% of your behavior. Learn how to identify, challenge, and replace limiting beliefs that hold you back.',
    readTime: '6 min read',
    date: 'Feb 2026',
  },
];

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Insights & Articles</span>
          <h2 className="section-title">From the Blog</h2>
          <p className="section-subtitle">
            Explore our articles on hypnotherapy, mental wellness, and personal growth.
          </p>
        </AnimateOnScroll>

        <div className="blog__grid">
          {posts.map((post, i) => (
            <AnimateOnScroll className="blog__card" key={i} delay={i * 120}>
              <div className="blog__card-header">
                <span className="blog__card-category">{post.category}</span>
                <span className="blog__card-date">{post.date}</span>
              </div>
              <h3 className="blog__card-title">{post.title}</h3>
              <p className="blog__card-excerpt">{post.excerpt}</p>
              <div className="blog__card-footer">
                <span className="blog__card-time">
                  <HiClock /> {post.readTime}
                </span>
                <a href="#" className="blog__card-link">
                  Read More <HiArrowRight />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
