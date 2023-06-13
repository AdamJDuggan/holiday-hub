// React
import React from "react";
// Components
import Button from "../Button";

export default function Landing() {
  const [pending, setPending] = React.useState(false);
  return (
    <main
      className={"fill-screen grid place-items-center landing py-24 md:py-12"}
    >
      <div className="container">
        <div className="grid gap-24 md:grid-cols-2 items-start">
          <div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl mb-8 md:mb-10 font-bold">
              Holiday Hub
            </h1>
            <p className="text-xl sm:text-1xl md:text-2xl mb-8 md:mb-10">
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
