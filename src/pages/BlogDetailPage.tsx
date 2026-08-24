import { Link, Navigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BlogCard } from '../components/BlogCard';
import { getBlogBySlug, getRelatedPosts } from '../data/blogs';
import BlogsBgDots from '../assets/Blogs_BG_Dots.svg';
import BlogsBg from '../assets/Blogs_BG.svg';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const related = getRelatedPosts(post.slug, 4);

  const colonIndex = post.title.indexOf(':');
  const titlePart1 = colonIndex !== -1 ? post.title.substring(0, colonIndex).trim() : post.title;
  const titlePart2 = colonIndex !== -1 ? post.title.substring(colonIndex + 1).trim() : '';

  return (
    <div className="pc-blogs-page pc-blog-detail-page">
      <Navbar />

      <article className="pc-blog-article">
        <div className="pc-blog-article-inner">
          <header className="pc-blog-article-header-new">
            <div className="pc-blog-article-header-left">
              <h1 className="pc-blog-article-title-new">
                <span className="pc-title-part-1">{titlePart1}</span>
                {titlePart2 && <span className="pc-title-divider">: </span>}
                {titlePart2 && <span className="pc-title-part-2">{titlePart2}</span>}
              </h1>
              <p className="pc-blog-article-intro">{post.intro[0]}</p>
              <div className="pc-blog-article-meta-new">
                <span className="pc-meta-date">{post.date}</span>
                <span className="pc-meta-dot">•</span>
                <span className="pc-meta-time">{post.readTime}</span>
              </div>
            </div>
            <div className="pc-blog-article-header-right">
              <div className="pc-blog-header-image-container">
                <img src={BlogsBgDots} className="pc-blog-header-dots" alt="" />
                <img src={BlogsBg} className="pc-blog-header-bg" alt="" />
                <img src={post.image} className="pc-blog-header-img" alt={post.title} />
              </div>
            </div>
          </header>

          <div className="pc-blog-article-content">
            {post.intro.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </section>
            ))}

            {post.closingTitle && (
              <section className="pc-blog-article-closing">
                <h2>{post.closingTitle}</h2>
                {post.closingParagraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </section>
            )}
          </div>
        </div>
      </article>

      <section className="pc-more-blogs" aria-labelledby="more-blogs-heading">
        <div className="pc-more-blogs-inner">
          <h2 id="more-blogs-heading" className="pc-more-blogs-title">More blogs</h2>
          <div className="pc-more-blogs-grid">
            {related.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} variant="related" />
            ))}
          </div>
          <div className="pc-pagination">
            <div className="pc-dot-active" />
            <div className="pc-dot-inactive" />
            <div className="pc-dot-inactive" />
          </div>
          <p className="pc-blog-back-link-wrap">
            <Link to="/blogs" className="pc-blog-back-link">← Back to all blogs</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
