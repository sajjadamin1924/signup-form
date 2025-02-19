import "./App.css";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // Validate Full Name
    if (!formData.name) {
      newErrors.name = "Full Name is required"; // Set error if empty
      isValid = false;
    }

   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required"; 
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"; 
      isValid = false;
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    
      console.log("Form submitted", formData);
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

        <div className="w-1/2 flex items-center justify-center flex-col p-4 bg-white p-6">
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
            </div>
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>} 

           
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
            </div>
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>} 

           
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
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )} 

            
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#73885d] text-white font-bold py-2 px-4 rounded-3xl mt-18 cursor-pointer"
            >
              Sign Up
            </button>
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
        </div>
      </div>
    </>
  );
}

export default App;
