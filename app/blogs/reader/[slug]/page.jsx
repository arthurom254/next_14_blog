import BlogPost from "@/pages/BlogPost";

export default function ReaderPage({params}) {
  return (
    <>
    <div className='prose lg:prose-xl prose-invert md:mx-auto  mx-3   '>
        <BlogPost params={params} />
      </div>
    </>
  )
}
