import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Container, HeaderResume, HeaderWrapper, Resume, SocialMedia, SocialMediaTopic } from "./style";
export function Header() {

  return (
    <Container className="box">
      <HeaderWrapper>
        <HeaderResume>
          <SocialMedia>
            <SocialMediaTopic>
              <GithubLogo size={22} />
              <a href="https://github.com/Suzei" target="_blank">github.com/Suzei</a>
            </SocialMediaTopic>
            <SocialMediaTopic>
              <EnvelopeOpen size={22} />
              <a href="mailto:silvaviniciusdev@gmail.com">silvaviniciusdev@gmail.com</a>
            </SocialMediaTopic>
            <SocialMediaTopic>
              <LinkedinLogo size={22} />
              <a href="https://www.linkedin.com/in/silva-viniciusdev/" target="_blank">/in/silva-viniciusdev/</a>
            </SocialMediaTopic>
          </SocialMedia>

          <Resume>
            Desenvolvedor full-stack em atuação profissional, freela e projetos avulsos.
          </Resume>
        </HeaderResume>

        <SocialMedia>
          <SocialMediaTopic>
            <GithubLogo size={22} />
            <a href="https://github.com/Suzei" target="_blank">/Suzei</a>

          </SocialMediaTopic>
          <SocialMediaTopic>
            <EnvelopeOpen size={22} />
            <a href="mailto:silvaviniciusdev@gmail.com">silvaviniciusdev@gmail.com</a>
          </SocialMediaTopic>
          <SocialMediaTopic>
            <LinkedinLogo size={22} />
            <a href="https://www.linkedin.com/in/silva-viniciusdev/" target="_blank">/in/silva-viniciusdev/</a>
          </SocialMediaTopic>
        </SocialMedia>
        <h1>VINICIUS</h1>
        <Resume>
          Desenvolvedor full-stack em atuação profissional, freela e projetos avulsos.
        </Resume>
      </HeaderWrapper>
    </Container>
  );
}
