import Link from "next/link"
import Image from "next/image"
import { blogData } from "@/constants/blogData"
import Tag from "../ui/Tag"
import Overlay from "../ui/Overlay"
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";



const Hero = () => {
  const featurePost = blogData.filter((blog) => blog.featured === true);
  const topFeatured = featurePost.slice(0, 1);
  const bottomFeatured = featurePost.slice(1, 4);


  return (
    <section className="relative">
      <div className="w-[95%] mx-auto max-w-[1450px] z-1">
        {topFeatured.map((post, id) => (
          <article key={id}
            className="flex flex-col gap-5 text-center relative "
          >
            <Tag text={post.tags} />
            <h2 className="text-6xl font-extrabold uppercase text-tertiary ">
              {post.title}
            </h2>
            <div className="flex items-center justify-center gap-3 text-tertiary font-light">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <span>{post.authorName}</span>
              <span className="italic">{post.publishDate}</span>
            </div>

            <Link
              // href={`/blog/${post.id}`}
              href={{
                pathname: `/blog/${post.id}`,
                query: { ...post }
              }}

            >
              <div className="relative max-h-[600px] overflow-hidden shadow-xl">
                {post.image_path && (
                  <img
                    src={post.image_path}
                    alt={`image for ${post.title}`}
                    className="object-cover w-full h-full"
                  />
                )}
                <Overlay />
              </div>
            </Link>
          </article>
        ))}

        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1 mt-4">
          {bottomFeatured.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-3 items-center text-center relative"
            >
              <Link
                className="w-full"
                // href={`/blog/${post.id}`}
                href={{
                  pathname: `/blog/${post.id}`,
                  query: { ...post }
                }}
              >
                <div className="relative  overflow-hidden h-72 shadow-xl w-full">
                  {post.image_path && (
                    <img
                      src={post.image_path}
                      alt={`image for ${post.title}`}
                      className="object-cover w-full h-full"
                    />
                  )}
                  <Overlay />
                </div>
              </Link>

              <Tag text={post.tags} />
              <h3 className="text-1xl font-extrabold uppercase text-tertiary px-5">
                {post.title}
              </h3>
              <span className="font-light italic">
                {/* {formatDate(post.createdAt.toString())} */}
                {post.publishDate}
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
