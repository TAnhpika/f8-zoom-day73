// Server function
"use server";
import { cookies } from "next/headers";

 // kích hoạt server function

export const loginAction = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    return {
        message: "Login success",
    };
};

export const likeAction = async () => {
    console.log("Like");
    const cookieStore = await cookies();
    cookieStore.set("like", 1, {
        httpOnly: true,
    });
};
