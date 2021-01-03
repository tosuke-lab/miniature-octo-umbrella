import React from "react";
import type { NextPage } from "next";
import { Module, Direct } from "components/Foo";

const Page: NextPage = () => {
  return (
    <div className="w-full p-8 flex flex-col items-center space-y-8">
      <Direct>Light</Direct>
      <div className="dark">
        <Direct>Dark</Direct>
      </div>
      <Module>Light(CSS Modules)</Module>
      <div className="dark">
        <Module>Dark Mode is not applied with CSS Modules</Module>
      </div>
    </div>
  );
};

export default Page;
