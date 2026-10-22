"use client";

import { useRouter } from "next/navigation";

export default function Button() {
    const router = useRouter();
    return <div onClick={() => router.push("/products")}>Click me</div>;
}
