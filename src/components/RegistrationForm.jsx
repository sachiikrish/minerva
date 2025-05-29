import React from "react";
import "../static/Form.css";

export const RegistrationForm = () => {
  return (
    <div>
      <form onSubmit>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="label-text">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="label-text">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="label-text">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-field"
              placeholder="10-digit number"
            />
          </div>

          <div>
            <label htmlFor="university" className="label-text">
              University/College*
            </label>
            <input
              type="text"
              id="university"
              name="university"
              className="input-field"
              placeholder="Your university or college"
            />
          </div>

          <div>
            <label htmlFor="course" className="label-text">
              Course*
            </label>
            <input
              type="text"
              id="course"
              name="course"
              className="input-field"
              placeholder="B.Tech, M.Tech, etc."
            />
          </div>

          <div>
            <label htmlFor="year" className="label-text">
              Year of Study*
            </label>
            <select id="year" name="year" className="select-field">
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
            <label htmlFor="interests" className="label-text">
              What are you looking forward to?
            </label>
            <textarea
              id="interests"
              name="interests"
              rows={3}
              className="textarea-field"
              placeholder="Tell us what you're most excited about for this event..."
            />
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" className="submit-button">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};
