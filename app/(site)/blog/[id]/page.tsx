interface seachParamsType {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  tags: string;
  authorImage: string;
  authorName: string;
  publishDate: string;

}

const page = ({ searchParams }: { searchParams: seachParamsType }) => {
  const post = searchParams

  return (
    <div>
      {post.title}
    </div>
  )
}

export default page
