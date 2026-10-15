
import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let [formData, setFormData] = useState(["", "", ""]);

  let handleClick = () => {
    setCount((prev) => prev + 1);
  };

  let handleInput = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => {
      let newData = [...prev];
      newData[Number(name)] = value;
      return newData;
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted", formData);

    localStorage.setItem("Datauser", JSON.stringify(formData));

    alert("Registration Successful!");
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl font-bold">Registration Form</h1>


     <div class="border-1">
      
      <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              name="0"
              value={formData[0]}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Age
            </label>

            <input
              type="number"
              placeholder="Enter your age"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              name="1"
              value={formData[1]}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              name="2"
              value={formData[2]}
              onChange={handleInput}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold p-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Register
          </button>

        </form>

     </div>
    </div>
  );
}

export default App;
