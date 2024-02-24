"use client";
import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function AdminAuth() {
  const handleLogin = async () => {
    await signIn("credentials", {
      callbackUrl: "/admin",
      username: "admin",
      password: "password",
    });
  };

  return (
    <>
      Admin Auth
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
}
