import { Link } from 'react-router-dom';
import type { BlogPost } from '../data/blogs';

type BlogCardProps = {
  post: BlogPost;
  variant?: 'listing' | 'related';
};

export function BlogCard({ post, variant = 'listing' }: BlogCardProps) {
  if (variant === 'related') {
    return (
      <Link to={`/blogs/${post.slug}`} className="pc-more-blog-card">
        <div className="pc-more-blog-card-image-wrap">
          <img src={post.image} alt="" className="pc-more-blog-card-image" />
        </div>
        <div className="pc-more-blog-card-body">
          <h3 className="pc-more-blog-card-title">{post.title}</h3>
          <p className="pc-more-blog-card-excerpt">{post.excerpt}</p>
        </div>
        <div className="pc-more-blog-card-footer">
          <span>{post.category} • {post.readTime}</span>
        </div>
      </Link>
    );
  }

  return (
    <article className="pc-blog-card">
      <Link to={`/blogs/${post.slug}`} className="pc-blog-card-image-wrap">
        <img src={post.image} alt="" className="pc-blog-card-image" />
      </Link>
      <div className="pc-blog-card-body">
        <span className="pc-blog-category">{post.category}</span>
        <h2 className="pc-blog-card-title">
          <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="pc-blog-card-excerpt">{post.excerpt}</p>
        <div className="pc-blog-card-footer">
          <span className="pc-blog-date">{post.date}</span>
          <Link to={`/blogs/${post.slug}`} className="pc-blog-read-more">
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
