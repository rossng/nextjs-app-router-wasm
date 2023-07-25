import dynamic from "next/dynamic";

import { greet } from "../pkg";
import { useEffect } from "react";

const OldComponent = dynamic(
  async () => (await import("./old-component")).OldComponent,
  {
    ssr: false,
    loading: () => <></>,
  }
);

export default function Index() {
  useEffect(() => {
    greet("User");
  }, []);

  return <OldComponent />;
}
