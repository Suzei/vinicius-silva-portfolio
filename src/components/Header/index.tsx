import { EnvelopeOpen, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Container, HeaderResume, HeaderWrapper, Resume, SocialMedia, SocialMediaTopic } from "./style";

export function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderResume>
          <SocialMedia>
            <SocialMediaTopic>
              <GithubLogo size={22} />
              <a>/Suzei</a>
            </SocialMediaTopic>
            <SocialMediaTopic>
              <EnvelopeOpen size={22} />
              <a>silvaviniciusdev@gmail.com</a>
            </SocialMediaTopic>
            <SocialMediaTopic>
              <LinkedinLogo size={22} />
              <a>/in/silva-viniciusdev/</a>
            </SocialMediaTopic>
          </SocialMedia>

          <Resume>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sodales magna. Quisque scelerisque ut urna sed fringilla.
          </Resume>
        </HeaderResume>

        <SocialMedia>
          <SocialMediaTopic>
            <GithubLogo size={22} />
            <a>/Suzei</a>
          </SocialMediaTopic>
          <SocialMediaTopic>
            <EnvelopeOpen size={22} />
            <a>silvaviniciusdev@gmail.com</a>
          </SocialMediaTopic>
          <SocialMediaTopic>
            <LinkedinLogo size={22} />
            <a>/in/silva-viniciusdev/</a>
          </SocialMediaTopic>
        </SocialMedia>
        <h1>VINICIUS</h1>
        <Resume>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sodales magna. Quisque scelerisque ut urna sed fringilla.
        </Resume>
      </HeaderWrapper>
    </Container>
  );
}
