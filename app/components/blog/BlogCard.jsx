import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="w-[340px]">
      {/* Blog Image */}
      <div className="relative w-[340px] h-[197px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="w-[340px] h-[272px] bg-white shadow-md border-b rounded-b-[20px] p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-poppins font-semibold text-lg text-[#001540] mb-3">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{blog.desc}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <span className="text-[rgba(119,121,122,1)]">1 month ago</span>
          <span className="text-[rgba(11,124,208,1)] cursor-pointer hover:underline">
            Read more
          </span>
        </div>
      </div>
    </div>
  );
}
