import React from "react";
import styles from "./Foo.module.css";

export const Module: React.FC = ({ children }) => (
  <p className={styles.foo}>{children}</p>
);

export const Direct: React.FC = ({ children }) => (
  <p className="p-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    {children}
  </p>
);
