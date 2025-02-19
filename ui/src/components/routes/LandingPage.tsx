import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import WaveLanding from '../background/WaveLanding';
import { themes } from '../../styles/ColorStyles';
import { H1, MediumText } from '../../styles/TextStyles';
import Lottie from 'lottie-react';
import animationData from './Landingmia.json';
import Typewriter from "typewriter-effect";


const LandingPage = () => {
  const { t } = useTranslation();

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
          {/* <SocialWrapper count={socialLinks.length}>
            {socialLinks.map((item, index) => (
              <SocialButton icon={item.image} link={item.link} key={index} />
            ))}
          </SocialWrapper> */}
        </TextWrapper>

        <LottieWrapper>
          <Lottie animationData={animationData} loop={true} />
        </LottieWrapper>

      </ContentWrapper>
      
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow: hidden;
  height: 1200px;
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

interface SocialWrapperProps {
  count: number;
}

const SocialWrapper = styled.div<SocialWrapperProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 0px;
  @media (max-width: 450px) {
    justify-content: space-around;
  }
  
`

export default LandingPage;
