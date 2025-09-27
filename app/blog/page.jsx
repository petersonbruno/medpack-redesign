import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import BlogCard from "../components/blog/BlogCard";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Healthcare Tech",
      desc: "How digital tools are transforming the healthcare industry in Tanzania and beyond.",
      image: "/blog-image.jpg",
    },
    {
      id: 2,
      title: "MedPack’s Mission",
      desc: "Simplifying pharmaceutical access through technology-enabled solutions.",
      image: "/blog-image.jpg",
    },
    {
      id: 3,
      title: "Patients First",
      desc: "See how MedPack improves patients’ lives with reliable medicine delivery.",
      image: "/blog-image.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Blog Grid */}
      <section className="max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button
            className="px-8 py-3 rounded-full text-white"
            style={{
              background: "rgba(11, 124, 208, 1)",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            View More
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className=" mb-4 py-16 text-center text-white"
        style={{ background: "rgba(11, 124, 208, 1)" }}
      >
        <h2
          className="font-poppins mb-6"
          style={{
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "100%",
          }}
        >
          Join 1,300+ MedPack Users Today.
        </h2>
        <button
          className="px-8 py-3 rounded-full text-white"
          style={{
            background: "#F72D3C",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          Get started
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
