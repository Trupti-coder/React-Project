import React, { useState } from "react";
import styles from "./Login.module.css";
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function emailChange(event) {
        setEmail(event.target.value);
    }

    function passwordChange(event) {
        setPassword(event.target.value);
    }

    async function funSubmit(event) {
        event.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/books/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful");
                navigate("/"); // Redirect to home page
            } else {
                setError(data.msg || "Invalid credentials! Please try again.");
            }
        } catch (err) {
            setError("Failed to connect to the server.");
        }
    }
    
    return(
        <>
        <div className={styles.signinForm}>
            <form onSubmit={funSubmit}>

            <h2>Login</h2>
                
                {error && <p className={styles.errorMessage}>{error}</p>}

                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={emailChange}
                        placeholder="Enter your email"
                        required
                        className={styles.inputField}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={passwordChange}
                        placeholder="Enter your password"
                        required
                        className={styles.inputField}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>

            <div style={{ marginTop: "10px" }}>
                <p>If you don't have an account, <Link to="/signup">Sign up here</Link></p>
            </div>

        
        </div>
        </>
    );
}
export default Login;