import Button from "../Button";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="w-[500px] rounded-[10px] bg-[#1C1F58] px-5 py-11 text-black shadow-[0_5px_15px_#00000059] float-animation">
      <form action="" className="relative flex flex-col items-center gap-7">
        <span className="mb-2.5 text-center text-xl font-bold text-white">
          Sign Up
        </span>

        <div className="relative ml-[-15px] w-full">
          <label
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"
          />
        </div>

        <div className="relative ml-[-15px] w-full">
          <label
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"
          />
        </div>

        <div className="relative ml-[-15px] w-full">
          <label
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"
          />
        </div>

        <div className="relative ml-[-15px] w-full">
          <label
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"
          />
        </div>

        <Button
          type="submit"
          text={"Submit"}
          classStyle={
            "px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors"
          }
        />
      </form>
    </div>
  );
};

export default SignUp;
