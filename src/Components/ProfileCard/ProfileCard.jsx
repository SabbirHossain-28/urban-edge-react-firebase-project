import { useContext } from "react";
import { AuthContext } from "../../AuthContextProvider/AuthContextProvider";
import { useForm } from "react-hook-form";

const ProfileCrad = () => {
  const { user, updateUserProfile, setReload, reload } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { fullname, photoURL } = data;

    updateUserProfile(fullname, photoURL).then(() => {
      console.log("User data updated successfully");
      setReload(!reload);
      reset();
    });
  };

  return (
    <div className="mx-auto mt-10 mb-12 max-w-[350px] space-y-3 rounded-2xl bg-white px-6 py-6 shadow-md dark:bg-[#21213a] md:max-w-[600px] md:max-h-[600px] ">
      {/* profile image & bg  */}
      <div className="relative ">
        <img
          className="h-[200px] w-[600px] rounded-2xl bg-gray-500"
          src="https://source.unsplash.com/350x150/?northern lights"
          alt="Card Bg Image"
        />
        <img
          className="absolute -bottom-12 left-1/2 h-[150px] w-[150px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
          src={user?.photoURL}
          alt="User profilePhoto"
        />
      </div>
      {/* profile name & role */}
      <div className="space-y-1 pt-8 text-center">
        <h1 className="text-white text-xl md:text-2xl">{user?.displayName}</h1>
        <p className="text-sm text-gray-400">{user?.email}</p>
      </div>
      {/* post , followers following  */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-4 space-y-2"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Full-name"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="photoURL"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Photo-URL"
            {...register("photoURL", { required: true })}
          />
          {errors.photoURL && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex justify-center">
          <input
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
            value="Update Profile"
          />
        </div>
      </form>
    </div>
  );
};
export default ProfileCrad;
