import { Helmet } from 'react-helmet';
import '../assets/css/BlogPage.css'
import img from '../assets/img/fr1.jpg';
import img2 from '../assets/img/r3.jpg';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Sample blog data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: 'Fine Art and Antique Shipping Services for Safe International Transport',
      description: 'That antique cabinet was passed down through four generations. The oil painting you bought at auction. The sculpture took an artist six months to create.',
       metaTitle:'Fine Art and Antique Shipping Services for Smooth Transport',
      metaDescription:'Fine art and antique shipping services give you perfect transport with expert handling, insurance, and climate-controlled logistics.',
        thumbnail: img,
      date: 'December 22 2025',
      url: '/blog/fine-art-and-antique-shipping-services'
    },
     {
      id: 2,
      title: 'Best and Cheap International Movers in Dubai, UAE',
      description: 'Discover top-rated, affordable international movers in Dubai. Get expert guidance on reliable, cheap relocation services for a stress-free move.....',
      metaTitle:'Top-Rated Best & Cheap International Movers in Dubai',
      metaDescription:'Discover top-rated, affordable international movers in Dubai. Get expert guidance on reliable, cheap relocation services for a stress-free move.',
      thumbnail: img2,
      date: 'October 2, 2025',
      url: '/blog/best-and-cheap-international-movers-in-dubai-uae'
    },
  ];
  const titles = blogPosts.map(post => post.metaTitle).join(' | ');
  const descriptions = blogPosts.map(post => post.metaDescription).join(' ');

  return (
    <>
    <Helmet>
        <title>{titles}</title>
        <meta name="description" content={descriptions.slice(0, 150) + '...'} />
      </Helmet>
    <div className="blog-page">
      <div className="blog-header">
        <h1>
          <a href="/blogs" className="recent-blogs-link">Recent Blogs</a>
        </h1>
        <p className="blog-subtitle">Stay updated with our latest articles and tutorials</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-thumbnail">
              <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3 className="blog-title" style={{textAlign:'justify'}}>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description" style={{textAlign:'justify'}}>{post.description}</p>
              <Link to={post.url} className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogPage;