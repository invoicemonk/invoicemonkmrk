export const dynamic = "force-dynamic";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Blog Post</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
