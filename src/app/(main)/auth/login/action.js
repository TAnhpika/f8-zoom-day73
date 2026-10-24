// Server function
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { resolve } from "styled-jsx/css";

// kích hoạt server function

export const loginAction = async (prevState, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
        return {
            message: "Validate failed",
            success: false,
        };
    }

    // Fake call api
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // return redirect("/")

    return {
        message: "Login success",
        success: true,
    };
};

export const likeAction = async () => {
    console.log("Like");
    const cookieStore = await cookies();
    cookieStore.set("like", 1, {
        httpOnly: true,
    });
};
