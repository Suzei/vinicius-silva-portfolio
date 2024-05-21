import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Container, SocialMedia } from "./style";

export function Header() {
  return (
    <Container>
      <div>
        <SocialMedia>
          <div>
            <GithubLogo size={28} />
            <a>/Suzei</a>
          </div>
          <div>
            <EnvelopeOpen size={28} />
            <a>silvaviniciusdev@gmail.com</a>
          </div>
          <div>
            <LinkedinLogo size={28} />
            <a>/in/silva-viniciusdev/</a>
          </div>
        </SocialMedia>
        <h1>VINICIUS</h1>
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sodales magna.
        </span>
      </div>
    </Container>
  );
}
