"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "./action";
import { useRouter } from "next/navigation";

export default function LoginForm2() {
    const [state, action, pending] = useActionState(loginAction, {
        message: "",
    });
    // const router = useRouter();
    // useEffect(() => {
    //     if (state.success) {
    //         router.push("/");
    //     }
    // }, [router, state]);
    return (
        <>
            {state.message && (
                <span className="block mb-3">{state.message}</span>
            )}
            <form action={action}>
                <div className="mb-3">
                    <label htmlFor="" className="block mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="px-3 py-1 border border-[#ddd] outline-0 w-1/2"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="block mb-1">
                        Password
                    </label>
                    <input
                        type="text"
                        name="password"
                        className="px-3 py-1 border border-[#ddd] outline-0 w-1/2"
                    />
                </div>
                <button className="px-3 py-2 bg-green-600 text-white">
                    {pending ? "Loading..." : "Login"}
                </button>
            </form>
        </>
    );
}
