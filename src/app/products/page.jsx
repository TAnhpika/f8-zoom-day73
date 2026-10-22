export default async function ProductsPage({ searchParams }) {
    const { page } = await searchParams;
    return <div>Products: {page}</div>;
}
