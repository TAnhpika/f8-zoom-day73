// Server function
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { resolve } from "styled-jsx/css";
import z, { success } from "zod";
// kích hoạt server function

export const loginAction = async (prevState, formData) => {
    const schema = z.object({
        email: z
            .string({ error: "Email is required" })
            .min(1, "Email is required")
            .pipe(z.email("Email k đúng định dạng")),
        password: z.string().min(1, "Password is required"),
    });
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        const data = await schema.parseAsync({ email, password });

        // Fake call api
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // return redirect("/")

        return {
            message: "Login success",
            success: true,
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Validate failed",
            // Object.fromEntries: giúp chuyển về Object thông thường
            error: Object.fromEntries(
                error.issues.map(({ path, message }) => [path[0], message]),
            ),
        };
    }
};

export const likeAction = async () => {
    console.log("Like");
    const cookieStore = await cookies();
    cookieStore.set("like", 1, {
        httpOnly: true,
    });
};
