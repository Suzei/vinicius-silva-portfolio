import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Container, HeaderWrapper, SocialMedia } from "./style";

export function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <SocialMedia>
          <div>
            <GithubLogo size={22} />
            <a>/Suzei</a>
          </div>
          <div>
            <EnvelopeOpen size={22} />
            <a>silvaviniciusdev@gmail.com</a>
          </div>
          <div>
            <LinkedinLogo size={22} />
            <a>/in/silva-viniciusdev/</a>
          </div>
        </SocialMedia>
        <h1>VINICIUS</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sodales magna.
        </p>
      </HeaderWrapper>
    </Container>
  );
}
