export const dynamic = "force-dynamic";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
