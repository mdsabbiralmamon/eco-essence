
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SignUp = () => {
    const { signUpUser, updateUserName, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // send user data to database
    const sendUserDataToDatabase = (user) => {
        fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("new user data", data);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const formData = e.target;

        const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;

        const userData = { name: name, email: email, password: password };

        // Password verification
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            Swal.fire({
                title: "Error!",
                text: "Password must be at least 6 characters long.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        } else if (!uppercaseRegex.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            Swal.fire({
                title: "Error!",
                text: "Password must contain at least one uppercase letter.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        } else if (!lowercaseRegex.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            Swal.fire({
                title: "Error!",
                text: "Password must contain at least one lowercase letter.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        signUpUser(email, password)
            .then((result) => {
                // Signed up
                const user = result.user;
                // Update User
                updateUserName(name);
                console.log("signed Up user with : ", user);
                Swal.fire({
                    title: "Success!",
                    text: "Successfully signed up",
                    icon: "success",
                    confirmButtonText: "let's back to business !!!",
                });
                // send data to DB
                sendUserDataToDatabase(userData);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError("Email already in use, Please use a different one"); // Set error message
                console.error("Sign in error:", errorMessage);
                Swal.fire({
                    title: "Error!",
                    text: "Email already exists",
                    icon: "error",
                    confirmButtonText: "OK",
                });
                // clear email field
                formData.email.value = "";
            });

        const user = {
            name: name,
            email: email,
            password: password,
        };

        console.log("Submitted", user);
    };

    // Google SignIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // user logged in
                const user = result.user;
                console.log("user logged in via google : ", user);
                Swal.fire({
                    title: "SignIn Success!",
                    text: "Successfully signed in, return to your destination!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                const userData = { name: user.displayName, email: user.email, photo: user.photoURL };
                sendUserDataToDatabase(userData);
                navigate("/");
            })
            .catch((error) => {
                // Handle Errors here.
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
                        Sign Up
                    </h2>
                    {/* Display error message */}
                    {error && (
                        <p className="font-bold text-red-500 text-center my-4">
                            {error}
                        </p>
                    )}
                    <div className="divider"></div>
                    {/* Name input */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-gray-700">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
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
                            Sign Up
                        </button>
                    </div>
                </form>
                <h2 className="font-bold my-4 text-center">
                    Already Have An Account?
                    <a href="/signin" className="text-green-600 ml-1">
                        Sign In
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

export default SignUp;