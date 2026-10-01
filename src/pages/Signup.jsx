import { useState } from "react";
import toast from "react-hot-toast";
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            toast.error("Please fill all fields");
            return;
        }
        if (!email.includes("@")) {
            toast.error("Please enter a valid email");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }
        toast.success("Account created successfully!");

        console.log("Signup submitted");
    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Create Account</h1>

                <p>Sign up to continue</p>

                <form onSubmit={handleSignup}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button type="submit">
                        Sign Up
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Signup;