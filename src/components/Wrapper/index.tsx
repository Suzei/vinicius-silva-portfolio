import { Container } from "./style";

export function Wrapper({ children }: JSX.ElementChildrenAttribute) {
  return <Container>{children}</Container>;
}
