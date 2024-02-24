"use client";
import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function AdminAuth() {
  const handleLogin = async () => {
    // fetch("/admin/auth/api", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: "admin",
    //     password: "password",
    //   }),
    // });

    const signInResult = await signIn("credentials", {
      callbackUrl: "/admin",
      // redirect: false,
      username: "admin",
      password: "some pwd",
    });

    console.log({ signInResult });
  };

  return (
    <>
      Admin Auth
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
}
