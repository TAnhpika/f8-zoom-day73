import Image from "next/image";

const getProducts = async () => {
    const response = await fetch(`${process.env.SERVER_API}/products`);
    if (!response.ok) {
        throw new Error("Fetching products error");
    }
    const { products } = await response.json();
    return products;
};

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            <h1 className="text-3xl mb-3">Products</h1>
            <div className="flex flex-wrap">
                {products.map((product) => (
                    <div key={product.id} className="w-1/4">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={300}
                            height={300}
                        />
                        <h2>{product.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
