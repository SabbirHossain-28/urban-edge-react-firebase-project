import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthContextProvider/AuthContextProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toastId = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const { userLogin, signinWithGoogle, signinWithGithub } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (
      (password.length < 6 || !passwordRegex.test(password)) &&
      !toast.isActive(toastId.current)
    ) {
      return (toastId.current = toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter"
      ));
    }

    userLogin(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        if (userCredential && !toast.isActive(toastId.current)) {
          toastId.current = toast.success("You are successfully logged in");
        }
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 4000);
        reset();
        return;
      })
      .catch((error) => {
        if (error && !toast.isActive(toastId.current))
          return (toastId.current = toast.error("Invalid email and password"));
      });
  };

  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then((userCredential) => {
        if (userCredential && !toast.isActive(toastId.current)) {
          toastId.current = toast.success(
            "You are log in with Google successfully"
          );
        }
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 3000);
      })
      .catch((error) => {
        if (error && toast.isActive(toastId.current)) {
          toast.current = toast.error("This Google account is already used");
        }
      });
  };

  const handleGithubLogin = () => {
    signinWithGithub()
      .then((userCredential) => {
        if (userCredential && !toast.isActive(toastId.current)) {
          toastId.current = toast.success(
            "You are log in with Github successfully"
          );
        }
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 3000);
      })
      .catch((error) => {
        if (error && !toast.isActive(toastId.current)) {
          toastId.current = toast.error("This Github account is already used");
        }
      });
  };

  const handlePasswordShowToggler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <section className="bg-gray-50 dark:bg-slate-200 py-8 my-12 rounded-md">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
            >
              Login here to explore
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login your account
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      {...register("email", { required: true })}
                    />

                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                    />
                    <span
                      onClick={handlePasswordShowToggler}
                      className="absolute right-2 top-10"
                    >
                      {showPassword ? (
                        <IoMdEyeOff className="text-gray-400 text-xl"></IoMdEyeOff>
                      ) : (
                        <IoMdEye className="text-gray-400 text-xl "></IoMdEye>
                      )}
                    </span>
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start"></div>
                  <input
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="submit"
                    value="Login"
                  />
                </form>
                <div>
                  <div className="space-y-2 mb-6">
                    <p className="text-white text-center">OR</p>
                    <p className="text-white text-center">Sign Up With</p>
                    <div className="flex justify-center gap-4">
                      <button onClick={handleGoogleLogin} className="btn">
                        <FcGoogle></FcGoogle>Google
                      </button>
                      <button onClick={handleGithubLogin} className="btn">
                        <FaGithub></FaGithub>Github
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={4000} />
    </div>
  );
};

export default Login;
