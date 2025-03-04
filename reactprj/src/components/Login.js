
function Login(){
    return(
        <>
        <div className={styles.signinForm}>
            <form onSubmit={funSubmit}>

            <h2>Login</h2>
                
                {error && <p className={styles.errorMessage}>{error}</p>}

            </form>

        </div>
        </>
    );
}
export default Login;