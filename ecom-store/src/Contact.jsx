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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            validate: {
              required: (value) => {
                if (!value) {
                  return "Full name required";
                }
                if (value.length < 3) {
                  return "Minimum 3 characters required";
                }
                return true;
              },
            },
          })}
          id="fullName"
          placeholder="Minimum 3 characters required"
        />
        {errors.fullName && <p role="alert">{errors.fullName.message}</p>}

        {/* Subject  */}
        <label htmlFor="subject">Subject:</label>
        <input
          {...register("subject", {
            validate: {
              required: (value) => {
                if (!value) {
                  return "Subject text required";
                }
                if (value.length < 3) {
                  return "Minimum 3 characters";
                }
                return true;
              },
            },
          })}
          id="subject"
          placeholder="Minimum 3 characters required"
        />
        {errors.subject && <p role="alert">{errors.subject.message}</p>}

        {/* Email  */}
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", {
            validate: {
              required: (value) => {
                if (!value) {
                  return "Email address required";
                }

                // Pattern
                const emailPattern =
                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                if (!emailPattern.test(value)) {
                  return "Invalid email format";
                }
                return true;
              },
            },
          })}
          id="email"
          placeholder="name@domain.com"
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}

        {/* Body  */}
        <label htmlFor="body">Body:</label>
        <input
          {...register("body", {
            validate: {
              required: (value) => {
                if (!value) {
                  return "Body text required";
                }
                if (value.length < 3) {
                  return "Minimum 3 characters required";
                }
                return true;
              },
            },
          })}
          id="body"
          placeholder="Minimum 3 characters"
        />
        {errors.body && <p role="alert">{errors.body.message}</p>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookForm;
