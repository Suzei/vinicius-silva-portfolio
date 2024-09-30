import React from "react";
import { Container } from "./style";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
