/* 
- Full name (Minimum number of characters is 3, required)
- Subject (Minimum number of characters is 3, required)
- Email (Must be a valid email address, required)
- Body (Minimum number of characters is 3, required)
- Submit button */

// React hook form utilised: https://content.noroff.dev/front-end-frameworks/react-hook-form.html
import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  // handleSubmit receives the form data if validation is succs.
  // register registers input by creating a ref
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full name  */}
        <label htmlFor="fullName">Full Name:</label>
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
          id="fullName"
          placeholder="Minimum 3 characters"
        />

        {/* Subject  */}
        <label htmlFor="subject">Subject:</label>
        <select
          {...register("subject", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
          id="subject"
        >
          <option value={"complaint"}>Complaint</option>
          <option value={"other"}>Other</option>
        </select>

        {/* Email  */}
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          })}
          id="email"
          placeholder="E.g name@domain.com"
        />
        {/* regex check: 
Starting with one or more letters, numbers, periods, underscores, plus signs, or hyphens ([A-Za-z0-9._%+-]+)
Followed by "@" symbol (@)
Then one or more letters, numbers, periods, or hyphens in the domain name ([A-Za-z0-9.-]+)
Ending with a top-level domain (TLD) with at least two characters ([A-Za-z]{2,})
 */}

        {/* Body  */}
        <label htmlFor="body">Body:</label>
        <input
          {...register("body", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
          id="body"
          placeholder="Minimum 3 characters"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookForm;
