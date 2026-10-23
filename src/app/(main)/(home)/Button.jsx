"use client";

import { useRouter } from "next/navigation";

export default function Button() {
    const router = useRouter();
    return <div onClick={() => router.push("/admin")}>Click me</div>;
}
