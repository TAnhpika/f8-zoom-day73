import { cookies } from "next/headers";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
    //   đọc cookie từ server component
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    
    return (
        <div>
            <h1>Login: {token}</h1>
            <LoginForm />
        </div>
    );
}
