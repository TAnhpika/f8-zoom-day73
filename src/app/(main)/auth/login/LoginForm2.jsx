"use client";

import { useState } from "react";
import { likeAction, loginAction } from "./action";

export default function LoginForm2() {
    const [message, setMessage] = useState("");
    return (
        <>
            {message && <span>{message}</span>}
            <button
                className="px-3 py-1 border border-red-600"
                onClick={likeAction}
            >
                Like
            </button>
            <form
                action={async (formData) => {
                    const response = await loginAction(formData);
                    setMessage(response.message);
                }}
            >
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
                    Submit
                </button>
            </form>
        </>
    );
}
