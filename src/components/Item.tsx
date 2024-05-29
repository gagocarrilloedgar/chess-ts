import { PropsWithChildren } from "react";

export const Item = ({
  label,
  value,
  children
}: PropsWithChildren<{
  label: string;
  value?: string | number | boolean | JSX.Element;
}>) =>
  (value || children) && (
    <p>
      <strong>{label}:</strong> {children ?? value}
    </p>
  );
