"use client";

import { useEffect } from "react";
import { greet } from "../pkg";

export default function PageComponent() {
  useEffect(() => {
    greet("User");
  }, []);

  return <p>Hello world</p>;
}
