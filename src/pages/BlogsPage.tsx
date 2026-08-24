import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import { BlogCard } from '../components/BlogCard';
import { blogPosts } from '../data/blogs';

export default function BlogsPage() {
  return (
    <div className="pc-blogs-page">
      <Navbar />

      <section className="pc-blogs-listing" aria-labelledby="our-blogs-heading">
        <div className="pc-blogs-listing-inner">
          <FadeIn>
            <div className="pc-blogs-listing-header">
              <h1 id="our-blogs-heading" className="pc-h2" style={{ marginTop: 16 }}>
                Health and Wellness <span style={{ color: '#1147a8' }}>Stories</span>
              </h1>
              <p className="pc-sub" style={{ marginTop: 12 }}>
                Practical guidance on coordination, care planning, and making healthcare work for your family.
              </p>
            </div>
          </FadeIn>

          <div className="pc-blogs-grid">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
