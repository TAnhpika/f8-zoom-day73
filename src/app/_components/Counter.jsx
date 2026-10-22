"use client";

import { useState } from "react";

export default function Counter({ initValue }) {
    console.log("Counter");
    const [count, setCount] = useState(initValue);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
