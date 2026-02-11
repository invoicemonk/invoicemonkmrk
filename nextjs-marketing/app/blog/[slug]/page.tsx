export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  // Replace this with your real API / CMS call
  const res = await fetch(`https://invoicemonk.com/blog/${slug}`);

  if (!res.ok) return null;

  return res.json();
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
