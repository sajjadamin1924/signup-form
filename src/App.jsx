import "./App.css";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { CircleX } from "lucide-react";


function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    let newErrors = { ...errors };
    if (name === "name") {
      if (value === "") {
        newErrors.name = "Full Name is required";
      } else {
        newErrors.name = "";
      }
    }

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value === "") {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(value)) {
        newErrors.email = "Please enter a valid email";
      } else {
        newErrors.email = "";
      }
    }

    if (name === "password") {
      if (value === "") {
        newErrors.password = "Password is required";
      } else if (value.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      } else {
        newErrors.password = "";
      }
    }

    setErrors(newErrors);
  };


  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = true;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setModalVisible(false);
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 flex items-center justify-center bg-[#e9f8e5]">
          <img
            src="left.jpg"
            alt="Student"
            className="max-h-[90%] rounded-lg"
            style={{ background: "#e9f8e5" }}
          />
        </div>

        <div className="w-1/2 flex items-center justify-center flex-col bg-white p-6" >
          <form className="w-3/4 space-y-4 mt-4" onSubmit={handleSubmit}>
            <p className="text-2xl font-bold mt-6 mb-6 text-center">
              Create Account
            </p>

            <label className="block text-gray-600 mb-1">Full Name</label>
            <div className="relative flex items-center w-full">
              <img
                src="name.png"
                alt="Student"
                className="absolute left-4 w-6 h-6"
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 pl-12 border border-gray-600 rounded-3xl"
                placeholder="Enter Your Name"
              />
              {errors.name && (
                <p className="text-red-600 text-sm absolute top-12 left-4">
                  {errors.name}
                </p>
              )}
            </div>

            <label className="block text-gray-600 mb-1">Email</label>
            <div className="relative flex items-center w-full">
              <img
                src="download1.png"
                alt="Student"
                className="absolute left-4 w-6 h-6"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 pl-12 border border-gray-600 rounded-3xl"
                placeholder="Enter Your Email"
              />
              {errors.email && (
                <p className="text-red-600 text-sm absolute top-12 left-4">{errors.email}</p>
              )}
            </div>

            <label className="block text-gray-600 mb-1">Password</label>
            <div className="relative flex items-center w-full">
              <img
                src="password.png"
                alt="Student"
                className="absolute left-4 w-6 h-6"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                maxLength={"10"}
                className="w-full p-3 pl-12 border border-gray-600 rounded-3xl"
                placeholder="Enter Your Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-600 text-sm absolute top-12 left-4">{errors.password}</p>
              )}
            </div>


            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#73885d] text-white font-bold py-2 px-4 rounded-3xl mt-18 cursor-pointer hover:bg-[#738854]/90"
              onClick={() => setModalVisible(true)}
            >
              Sign Up
            </button>
            {modalVisible && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[1px] hover:bg-[#000]/90"

              >
                <div className="bg-white p-6 rounded-xl shadow-xl relative w-1/3">
                  <button className="absolute top-4 right-4" onClick={() => setModalVisible(false)}>
                    <CircleX />
                  </button>
                  <h2 className="text-2xl font-bold mb-4">Sign Up Successful</h2>
                  <p>Welcome, {formData.name}!</p>
                </div>
              </div>
            )}

            <center>
              <p className="items-center justify-center">-OR-</p>
            </center>
            <div className="row flex items-center justify-center">
              <div className="flex items-center justify-center  px-4">
                <button className="cursor-pointer rounded-full p-1 bg-gray-200 hover:bg-gray-500">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                    <img src="download.png" alt="" className="w-6 h-6" />
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center  px-4">
                <button className="cursor-pointer rounded-full p-1 bg-gray-200 hover:bg-gray-500">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                    <img src="facebook.png" alt="" className="w-6 h-6" />
                  </div>
                </button>
              </div>
              <div className="flex items-center justify-center  px-4">
                <button className="cursor-pointer rounded-full p-1 bg-gray-200 hover:bg-gray-500">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                    <img src="apple.png" alt="" className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div >
      </div >
    </>
  );
}

export default App;
