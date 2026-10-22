import { redirect } from "next/navigation";
import Button from "./Button";

const isAuth = false;

export default function HomePage() {
    if (!isAuth) {
        return redirect(`/products`);
    }
    return (
        <div>
            <p>Home</p>
            <Button />
        </div>
    );
}
