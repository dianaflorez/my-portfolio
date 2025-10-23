import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import WaveLanding from '../background/WaveLanding';
import { themes } from '../../styles/ColorStyles';
import { H1, MediumText } from '../../styles/TextStyles';
import Lottie from 'lottie-react';
import animationData from './Landingmia.json';
import Typewriter from "typewriter-effect";
import AboutMe from "../sections/AboutMe";
import Footer from "../sections/Footer";
import Skills from "../sections/Skills";


const LandingPage = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/dianaflorez',
      svg: (
        <svg role="img" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.625-5.476 5.92.43.37.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.292 0 .319.215.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z"/>
        </svg>
      ),
    },
    {
      name: 'GitLab',
      link: 'https://gitlab.com/dianaflorez',
      svg: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M23.76 9.66l-1.24-3.8c-.1-.3-.4-.5-.7-.5-.3 0-.6.2-.7.5l-1.5 4.4H4.45l-1.5-4.4c-.1-.3-.4-.5-.7-.5s-.6.2-.7.5L.3 9.66c-.1.3 0 .6.2.8l11 13.4c.2.2.5.2.6 0l11-13.4c.2-.2.3-.5.2-.8"
          />
        </svg>
      ),
    },
    
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/diana-cristy-florez-bravo',
      svg: (
        <svg role="img" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.938v5.668H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.603 0 4.268 2.37 4.268 5.456v6.287zM5.337 7.433a2.062 2.062 0 11-.002-4.124 2.062 2.062 0 01.002 4.124zM6.914 20.452H3.76V9h3.154v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.547C0 23.227.792 24 1.771 24h20.451C23.206 24 24 23.227 24 22.273V1.726C24 .774 23.206 0 22.225 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <Wrapper>
      <WaveLanding />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Hi! I’m Diana,
            <br />
            <span>
              <Typewriter
                onInit={() => {}}
                options={{
                  strings: [
                    "a Web",
                    "a Frontend",
                    "a Mobile",
                    "a Backend",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            Developer
          </Title>
          <Description>
            I am dedicated to turning ideas into reality web and mobile applications.
          </Description>

          {/* Social links */}
          <SocialWrapper count={socialLinks.length} role="navigation" aria-label="Social links">
            {socialLinks.map((item, index) => (
              <SocialLink
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                title={item.name}
              >
                <IconWrapper>{item.svg}</IconWrapper>
                <ScreenReaderText>{item.name}</ScreenReaderText>
              </SocialLink>
            ))}
          </SocialWrapper>


        </TextWrapper>

        <LottieWrapper>
          <Lottie animationData={animationData} loop={true} />
        </LottieWrapper>

      </ContentWrapper>

      <AboutMe />

      <Skills />

      <Footer />

    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow: hidden;
  min-height: 100vh; /* altura mínima de la ventana visible */
 
  @media (min-width: 2500px) {
    padding-bottom: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 170px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    justify-content: center;
    padding: 50px 20px 33px;
    gap: 60px;
    border: 2px solid pink;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  @media (max-width: 750px) {
    padding: 0px 20px 10px;
    
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg,rgb(119, 4, 58) 0%,rgb(173, 93, 193) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 450px) {
    font-size: 48px;
  }

  span {
    background: linear-gradient(180deg,rgb(231, 232, 203) 0%, #ffd9b6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const LottieWrapper = styled.div`
  width: 99%;
  height: 99%;
  margin: -190px auto;
  outline: none;

  @media (max-width: 750px) {
    margin: 10px auto;
    width: 500px;
    height: 500px;
  }

  @media (max-width: 450px) {
    margin: 10px auto;
    width: 330px;
    height: 330px;
  }
`;

const Description = styled(MediumText)`
  color: white;
`;

/* Social area styles */
interface SocialWrapperProps {
  count: number;
}

const SocialWrapper = styled.div<SocialWrapperProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 12px;
  align-items: center;

  @media (max-width: 450px) {
    justify-content: center;
    gap: 18px;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
  transition: transform .18s ease, box-shadow .18s ease;
  border: 1px solid rgba(255,255,255,0.06);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.35);
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

/* visually hidden for screen readers */
const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;

export default LandingPage;
