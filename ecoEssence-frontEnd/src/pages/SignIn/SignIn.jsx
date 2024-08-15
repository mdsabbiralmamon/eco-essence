import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SignIn = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const formData = e.target;

        const email = formData.email.value;
        const password = formData.password.value;

        // Sign in user
        signInUser(email, password)
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log("Signed in user:", user);
                Swal.fire({
                    title: "Success!",
                    text: "Successfully signed in",
                    icon: "success",
                    confirmButtonText: "Proceed",
                });
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError("Invalid email or password. Please try again."); // Set error message
                Swal.fire({
                    title: "Error!",
                    text: "Invalid email or password.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
                // Clear password field
                formData.password.value = "";
            });
    };

    // Google SignIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // User logged in
                const user = result.user;
                console.log("User logged in via Google:", user);
                Swal.fire({
                    title: "Sign In Success!",
                    text: "Successfully signed in. Redirecting...",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                navigate("/");
            })
            .catch((error) => {
                // Handle Errors here
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="card p-8 m-4 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg">
                <form onSubmit={handleSubmit}>
                    <h2 className="font-bold text-3xl text-center mb-6">
                        Sign In
                    </h2>
                    {/* Display error message */}
                    {error && (
                        <p className="font-bold text-red-500 text-center my-4">
                            {error}
                        </p>
                    )}
                    <div className="divider"></div>
                    {/* Email input */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* Password input */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="mt-6">
                        <button className="btn bg-green-600 text-white w-full hover:bg-green-700">
                            Sign In
                        </button>
                    </div>
                </form>
                <h2 className="font-bold my-4 text-center">
                    Do not Have An Account?
                    <a href="/signup" className="text-green-600 ml-1">
                        Sign Up
                    </a>
                </h2>
                <div className="divider my-4">or continue with</div>
                <div className="flex justify-center gap-6">
                    <button onClick={handleGoogleSignIn} className="btn text-2xl text-gray-700 hover:text-gray-900">
                        <FaGoogle />
                    </button>
                    <button className="btn text-2xl text-gray-700 hover:text-gray-900" disabled>
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
