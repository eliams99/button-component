// We would like you to build an accessible, typed button component which:
//
// 1. Forwards its ref to the actual dom element it returns.
//
// 2. Has the following props:
//      - variant<string>: Defines the button style to show, there are two variants, as depicted in 'buttons.png':
//          - 'primary' - the primary button style
//          - 'secondary' - the secondary button style
//
// 3. Also accepts any other props of a regular HTML button, such as disabled, and also any additional classNames.
//
// 4. Can have text and icons as content as depicted in buttons.png. Please use the provided umbrella svg for the icon.
//
// 5. Can be easily themed with a brand colour other than blue.
//
// Notes:
// We are using css modules in this project, so you can add styles from the button module file with styles[className] - https://github.com/css-modules/css-modules
// You may add any helper libraries you need

import React from "react";
import styles from "./_button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children?:
    | React.ReactElement<ButtonItemProps>
    | Array<React.ReactElement<ButtonItemProps>>;
  classNames?: string;
}

const buttonRef = React.createRef<HTMLButtonElement>();

export const Button = ({
  variant,
  children,
  classNames = "",
  ...props
}: ButtonProps) => {
  const classList = classNames
    .split(" ")
    .map((className) => styles[className])
    .join(" ");

  return (
    <button
      ref={buttonRef}
      className={`${styles[variant]} ${styles.button} ${classList}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

interface ButtonItemProps {
  children: string | React.ReactNode;
}

export const ButtonItem = ({ children }: ButtonItemProps) => {
  return <span className={styles.text}>{children}</span>;
};
