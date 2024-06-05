const Register = () => {
    return (
        <div>
            <div className="container-fluid p-0 mb-2">
                <img src="header.gif" className="img-fluid h-50 w-100" alt="Imagen" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">Enter your email to sign up for this app</p>
                        <form>
                            {/* Email input */}
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="email"
                                    placeholder="email@domain.com"
                                    className="form-control"
                                />
                            </div>

                            {/* Submit button */}
                            <button
                                type="button"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-custom btn-block mb-4"
                            >
                                Sign up with google
                            </button>

                            {/* Register buttons */}
                            <div className="text-center">
                                <figcaption className="blockquote-footer">
                                    <p className="small">or continue with:</p>
                                </figcaption>

                                <a className="btn btn-gris btn-google btn-block btn-outline" href="#">
                                    <img
                                        style={{ width: '1.4rem' }}
                                        src="https://img.icons8.com/color/16/000000/google-logo.png"
                                        alt="Google"
                                    />
                                    Google
                                </a>

                                <button
                                    type="button"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button
                                    type="button"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1"
                                >
                                    <i className="fab fa-google"></i>
                                </button>

                                <button
                                    type="button"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1"
                                >
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button
                                    type="button"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    className="btn btn-link btn-floating mx-1"
                                >
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
