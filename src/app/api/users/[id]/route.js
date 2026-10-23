import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = await params;
    return NextResponse.json({ id });
};
