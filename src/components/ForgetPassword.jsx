
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
    const { resetPassword } = useContext(authContext);
    const location = useLocation();
    const initialEmail = location.state?.email || "";
    const [email, setEmail] = useState(initialEmail);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            await resetPassword(email); 
            toast.success("Password reset email sent! Redirecting to Gmail...");
            setTimeout(() => {
                window.location.href = "https://mail.google.com"; 
            }, 2000); 
        } catch (error) {
            console.error("Error resetting password:", error);
            toast.error("Failed to send reset email. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto my-7 p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-md shadow-md">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4">Forgot Password</h2>
            <form className="flex flex-col items-center" onSubmit={handleResetPassword}>
                <label className="self-start mb-2 text-lg sm:text-xl">Email Address:</label>
                <input
                    type="email"
                    className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;
