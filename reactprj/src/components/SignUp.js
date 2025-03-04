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

            </form>

        </div>
        </>
    );
}
export default SignUp;