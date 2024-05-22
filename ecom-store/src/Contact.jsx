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
      <form>
        {/* Fullname  */}
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
        />
        {/* Subject  */}
        <input
          {...register("subject", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
      </form>
    </div>
  );
}

export default ReactHookForm;
