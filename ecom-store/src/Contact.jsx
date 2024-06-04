import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h5">Contact form</Typography>
          <Grid item>
            <TextField
              {...register("fullName", {
                // My jsx validation logic
                validate: {
                  required: (value) => {
                    if (!value) {
                      return "Full name required";
                    }
                    if (value.length < 3) {
                      return "Minimum 3 characters";
                    }
                    return true;
                  },
                },
              })}
              id="fullName"
              label="Full Name"
              variant="outlined"
              placeholder="Minimum 3 characters"
              error={!!errors.fullName}
              helperText={errors.fullName ? errors.fullName.message : ""}
            />
          </Grid>

          {/* Subject  */}
          <Grid item>
            <TextField
              {...register("subject", {
                // My jsx validation logic
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
              label="Subject"
              variant="outlined"
              placeholder="Minimum 3 characters"
              error={!!errors.subject}
              helperText={errors.subject ? errors.subject.message : ""}
            />
          </Grid>

          {/* Email  */}
          <Grid item>
            <TextField
              {...register("email", {
                // My jsx validation logic
                validate: {
                  required: (value) => {
                    if (!value) {
                      return "Email address required";
                    }
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
              label="Email"
              variant="outlined"
              placeholder="name@domain.com"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          </Grid>

          {/* Body  */}
          <Grid item>
            <TextField
              {...register("body", {
                // My jsx validation logic
                validate: {
                  required: (value) => {
                    if (!value) {
                      return "Body text required";
                    }
                    if (value.length < 3) {
                      return "Minimum 3 characters";
                    }
                    return true;
                  },
                },
              })}
              // Material UI comps
              id="body"
              label="Body"
              variant="outlined"
              placeholder="Minimum 3 characters"
              multiline // Multiple lines for text
              rows={4} // Row numbers for textarea
              error={!!errors.body} // if validation fails, display error
              helperText={errors.body ? errors.body.message : ""} // Helper text for validation message
            />
          </Grid>

          {/* Submit button */}
          <Grid item>
            <Button type="submit" variant="contained" sx={{ m: 1 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ReactHookForm;
