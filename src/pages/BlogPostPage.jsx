import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { HiArrowLeft, HiClock, HiUser, HiCalendar } from 'react-icons/hi';
import './BlogPostPage.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <h2>Post Not Found</h2>
          <p>The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <article className="blog-post">
      {/* Hero Banner */}
      <div className="blog-post__hero">
        <div className="blog-post__hero-bg">
          <img src={post.image} alt={post.title} className="blog-post__hero-img" />
          <div className="blog-post__hero-overlay"></div>
        </div>
        <div className="container">
          <AnimateOnScroll className="blog-post__hero-content">
            <Link to="/blog" className="blog-post__back">
              <HiArrowLeft /> Back to Blog
            </Link>
            <span className="blog-post__category">{post.category}</span>
            <h1 className="blog-post__title">{post.title}</h1>
            <div className="blog-post__meta">
              <span className="blog-post__meta-item">
                <HiUser /> {post.author}
              </span>
              <span className="blog-post__meta-item">
                <HiCalendar /> {post.date}
              </span>
              <span className="blog-post__meta-item">
                <HiClock /> {post.readTime}
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Article Body */}
      <div className="blog-post__body">
        <div className="container">
          <AnimateOnScroll className="blog-post__content">
            {/* Featured Image inline */}
            <div className="blog-post__featured-image">
              <img src={post.image} alt={post.title} />
            </div>

            {post.content.map((block, i) => {
              if (block.type === 'heading') {
                return <h2 key={i} className="blog-post__heading">{block.text}</h2>;
              }
              if (block.type === 'paragraph') {
                return <p key={i} className="blog-post__paragraph">{block.text}</p>;
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="blog-post__list">
                    {block.items.map((item, j) => (
                      <li key={j} className="blog-post__list-item">{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </AnimateOnScroll>

          {/* Author Bio */}
          <AnimateOnScroll className="blog-post__author-bio">
            <div className="blog-post__author-avatar">AV</div>
            <div>
              <h4>Written by {post.author}</h4>
              <p>
                Ashish Verma is the founder of PebbleKart and a certified hypnotherapy practitioner 
                dedicated to helping people unlock their subconscious potential through evidence-based techniques.
              </p>
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll className="blog-post__cta">
            <h3>Ready to Experience Hypnotherapy?</h3>
            <p>Book a free consultation to discuss how hypnotherapy can help with your specific needs.</p>
            <Link to="/contact" className="btn btn-primary">Book Your Session</Link>
          </AnimateOnScroll>

          {/* Related Posts */}
          <AnimateOnScroll className="blog-post__related">
            <h3 className="blog-post__related-title">More Articles</h3>
            <div className="blog-post__related-grid">
              {relatedPosts.map((rp, i) => (
                <Link to={`/blog/${rp.slug}`} className="blog-post__related-card" key={i}>
                  <div className="blog-post__related-img">
                    <img src={rp.image} alt={rp.title} />
                  </div>
                  <div className="blog-post__related-info">
                    <span className="blog-post__related-category">{rp.category}</span>
                    <h4>{rp.title}</h4>
                    <span className="blog-post__related-time">
                      <HiClock /> {rp.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </article>
  );
}
