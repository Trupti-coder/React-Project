import { useState } from "react";
import styles from "./Signup.module.css";

function SignUp(){

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

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

            </form>

        </div>
        </>
    );
}
export default SignUp;