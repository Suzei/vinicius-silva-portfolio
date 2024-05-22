import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Container, HeaderResume, HeaderWrapper, SocialMedia } from "./style";

export function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderResume>
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

           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sodales magna. Quisque scelerisque ut urna sed fringilla.
        </p>
        </HeaderResume>
        <h1>VINICIUS</h1>

      </HeaderWrapper>
    </Container>
  );
}
