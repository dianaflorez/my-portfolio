import React from "react";
import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";

const AboutMe = () => {
  return (
    <Wrapper>
      <Card>
        <Title>About Me</Title>
        <Text>
          I’m a <strong>software engineer</strong> passionate about creating modern web and mobile applications using 
          <strong> JavaScript, React, and PHP</strong>. I love transforming ideas into interactive and scalable solutions.  
          I’m constantly learning new technologies and improving both professionally and personally.  
          <br /><br />
          My approach is focused on <strong>commitment, creativity, and teamwork</strong> — always finishing what I start and 
          contributing with enthusiasm to every project I’m part of.
        </Text>
      </Card>
    </Wrapper>
  );
};

export default AboutMe;

// 💅 Estilos
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 30px;
  background: ${themes.dark.backgroundColor};
`;

const Card = styled.div`
  max-width: 800px;
  background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 50px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.25);
  color: white;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 14px 40px rgba(0,0,0,0.4);
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`;

const Title = styled(H1)`
  font-size: 42px;
  background: linear-gradient(180deg, rgb(119, 4, 58) 0%, rgb(173, 93, 193) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 24px;
`;

const Text = styled(MediumText)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  line-height: 1.6;
`;
