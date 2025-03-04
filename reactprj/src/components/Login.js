
function Login(){
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

            </form>

        </div>
        </>
    );
}
export default Login;