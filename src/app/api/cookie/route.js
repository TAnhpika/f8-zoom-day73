import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { name, value, ttl } = await request.json();
    const cookiesStore = await cookies(); // vì cookies() trả về promise
    cookiesStore.set(name, value, {
        httpOnly: true,
        maxAge: ttl,
    });
    return NextResponse.json({
        success: true,
    });
};

export const GET = async (request) => {
    const { searchParams } = request.nextUrl;
    const name = searchParams.get("name");
    const cookiesStore = await cookies();
    const cookieValue = cookiesStore.get(name)?.value; // obj có key là value
    return NextResponse.json({
        success: true,
        data: cookieValue,
    });
};
