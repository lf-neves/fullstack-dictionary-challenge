"use client";

import React from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { useForm } from "@/components/Form";
import { login } from "../actions/auth";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    formState: { errors },
    Form,
  } = useForm<LoginFormInputs>();

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ mt: 20 }}>
      <Grid size={6}>
        <Typography variant="h5" component="h1" mb={3} textAlign="center">
          Login
        </Typography>
        <Form
          onSubmit={async (credentials: LoginFormInputs) => {
            await login(credentials);
          }}
        >
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email", { required: "Email is required." })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register("password", { required: "Password is required." })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Form>
      </Grid>
    </Grid>
  );
}
