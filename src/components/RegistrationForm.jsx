import React from "react";

export const RegistrationForm = () => {
  return (
    <div>
      <form onSubmit>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent 
               "border-gray-300"
              `}
              placeholder="Enter your full name"
            />
            
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent 
                "border-gray-300"
              `}
              placeholder="example@email.com"
            />
           
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent 
                 "border-gray-300"
              `}
              placeholder="10-digit number"
            />
            
          </div>

          <div>
            <label
              htmlFor="university"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              University/College*
            </label>
            <input
              type="text"
              id="university"
              name="university"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent 
                "border-gray-300"
              `}
              placeholder="Your university or college"
            />
           
          </div>

          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course*
            </label>
            <input
              type="text"
              id="course"
              name="course"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent `}
              placeholder="B.Tech, M.Tech, etc."
            />
          
          </div>

          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Year of Study*
            </label>
            <select
              id="year"
              name="year"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent 
                "border-gray-300"
              `}
            >
              <option value="">Select year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
              <option value="5th Year">5th Year</option>
              <option value="Alumnus">Alumnus</option>
            </select>
           
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="interests"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What are you looking forward to?
            </label>
            <textarea
              id="interests"
              name="interests"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent"
              placeholder="Tell us what you're most excited about for this event..."
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#0f2e3d] text-white py-2 px-4 rounded-md hover:bg-[#10394f] transition disabled:opacity-50"
          >
            "Register Now"
          </button>
        </div>
      </form>
    </div>
  );
};
