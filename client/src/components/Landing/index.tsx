// React
import React from "react";
// Components
import Button from "../Button";
// Styles
import styles from "../../styles/index.scss";

export default function Landing() {
  const [pending, setPending] = React.useState(false);
  return (
    <main className={"fill-screen grid place-items-center landing py-24"}>
      <div className="container">
        <div className="grid gap-24 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-5xl mb-8 font-bold">Holiday Hub</h1>
            <p className="text-xl mb-8">
              Create groups, plan holidays and share memories.
            </p>
            <div className="flex space-x-4">
              <Button
                label="Find out more"
                pending={pending}
                onClick={() => setPending(!pending)}
              />
              <Button label="Login" kind="secondary" />
            </div>
          </div>
          <div className="grid place-items-center border-2 h-[500px]">
            Images here
          </div>
        </div>
      </div>
    </main>
  );
}
