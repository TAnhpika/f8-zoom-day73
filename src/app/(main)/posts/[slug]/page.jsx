export default async function PostsPage({ params }) {
    const { slug } = await params;
    return <div>Posts: {slug}</div>;
}
