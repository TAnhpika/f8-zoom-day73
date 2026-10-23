import { NextResponse } from "next/server";

// muốn nhận response dùng NextResponse
export const GET = (request) => {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("q");
    const apiKey = request.headers.get("x-api-key");

    return NextResponse.json(
        {
            message: "Success",
            q,
            apiKey,
        },
        {
            // status: 404,
        },
    );
};

export const POST = async (request) => {
    const body = await request.json(); // lấy body
    return NextResponse.json({ body });
};
