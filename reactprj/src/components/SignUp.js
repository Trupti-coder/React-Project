import { useState } from "react";
import styles from "./Signup.module.css";

function SignUp(){

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    function nameChange(event) {
        setName(event.target.value);
    }

    function numberChange(event) {
        setNumber(event.target.value);
    }

    function emailChange(event) {
        setEmail(event.target.value);
    }

    function passwordChange(event) {
        setPassword(event.target.value);
    }

    async function funSubmit(event) {
        event.preventDefault();
        setError("");
        setSuccess("");

        const newUser = {
            username: name,
            mobileNumber: number,
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:5000/books/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(`User created successfully! Your ID: ${data.userID}`);
                setName("");
                setNumber("");
                setEmail("");
                setPassword("");
            } else {
                setError(data.msg || "Error signing up. Please try again.");
            }
        } catch (err) {
            setError("Failed to connect to the server.");
        }
    }

    return(
        <>
        <div className={styles.signupContainer}>
            <form onSubmit={funSubmit} className={styles.signupForm}>

            <h3>Create Account</h3>
                
                {error && <p className={styles.errorMessage}>{error}</p>}
                {success && <p className={styles.successMessage}>{success}</p>}

                <div>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={nameChange} 
                        placeholder="Enter name" 
                        className={styles.inputField} 
                        required
                    />
                </div>

                <div>
                    <input 
                        type="tel" 
                        value={number} 
                        onChange={numberChange} 
                        placeholder="Enter Mobile number" 
                        className={styles.inputField} 
                        required
                    />
                </div>

                <div>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={emailChange} 
                        placeholder="Enter Email" 
                        className={styles.inputField} 
                        required
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={passwordChange} 
                        placeholder="Enter a password" 
                        className={styles.inputField} 
                        required
                    />
                </div>

                <div>
                    <button type="submit" className={styles.submitButton}>Sign Up</button>
                </div>

            </form>

        </div>
        </>
    );
}
export default SignUp;