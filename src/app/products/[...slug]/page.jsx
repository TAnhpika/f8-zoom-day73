export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    console.log(slug);
    
    return <div>Product Detail</div>;
}
