import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthContextProvider/AuthContextProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const ProfileCrad = () => {
  const { user, updateUserProfile, setReload, reload } =
    useContext(AuthContext);
  const toastId = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { fullname, photoURL } = data;

    if (!fullname && !photoURL && !toast.isActive(toastId.current)) {
      toastId.current = toast.error("Please fill at least one input field");
    }

    updateUserProfile(fullname, photoURL).then(() => {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("User profile updated successfully");
        setReload(!reload);
        reset();
      }
    });
  };

  return (
    <div  className="mx-auto mt-10 mb-12 max-w-[350px] space-y-3 rounded-2xl bg-slate-200 px-6 py-6 shadow-md dark:bg-slate-200 md:max-w-[600px] md:max-h-[600px] ">
      <div className=" flex justify-center">
        
        <img 
          className="  h-[150px] w-[150px]  rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
          src={user?.photoURL}
          alt="User profilePhoto"
        />
      </div>
      <div className="space-y-1 pt-2 text-center">
        <h1 data-aos="fade-down-right" data-aos-duration="500" className="text-xl md:text-2xl">{user?.displayName}</h1>
        <p data-aos="fade-down-left" data-aos-duration="500" className="text-sm text-gray-500">{user?.email}</p>
        <p data-aos="fade-down-right" data-aos-duration="500" className="text-sm text-gray-500 break-all">{user?.photoURL}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-4 space-y-2"
      >
        <div>
          <label data-aos="fade-right" data-aos-delay="500" data-aos-duration="500"
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
          >
            Your full name
          </label>
          <input data-aos="fade-left" data-aos-delay="600" data-aos-duration="500"
            type="text"
            name="name"
            id="name"
            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Full-name"
            {...register("fullname")}
          />
        </div>
        <div>
          <label data-aos="fade-right" data-aos-delay="700" data-aos-duration="500"
            htmlFor="photoURL"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
          >
            Your photo URL
          </label>
          <input data-aos="fade-left" data-aos-delay="800" data-aos-duration="500"
            type="text"
            name="photoURL"
            id="photoURL"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Photo-URL"
            {...register("photoURL")}
          />
        </div>
        <div className="flex justify-center">
          <input data-aos="zoom-in-up"  data-aos-duration="500"
            className="w-full text-gray-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
            value="Update Profile"
          />
        </div>
      </form>
      <ToastContainer position="top-center" theme="colored" autoClose={4000} />
    </div>
  );
};
export default ProfileCrad;
