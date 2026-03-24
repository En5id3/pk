import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { HiArrowRight, HiClock } from 'react-icons/hi';
import { blogPosts } from '../data/blogData';
import './Blog.css';

export default function Blog({ limit }) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

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
              <Link to={`/blog/${post.slug}`} className="blog__card-image-link">
                <div className="blog__card-image">
                  <img src={post.image} alt={post.title} />
                </div>
              </Link>
              <div className="blog__card-body">
                <div className="blog__card-header">
                  <span className="blog__card-category">{post.category}</span>
                  <span className="blog__card-date">{post.date}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="blog__card-title-link">
                  <h3 className="blog__card-title">{post.title}</h3>
                </Link>
                <p className="blog__card-excerpt">{post.excerpt}</p>
                <div className="blog__card-footer">
                  <span className="blog__card-time">
                    <HiClock /> {post.readTime}
                  </span>
                  <Link to={`/blog/${post.slug}`} className="blog__card-link">
                    Read More <HiArrowRight />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
