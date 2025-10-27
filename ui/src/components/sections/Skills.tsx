import React from "react";
import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";
import {
  FaReact,
  FaPhp,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiLaravel,
  SiYii,
} from "react-icons/si";

// 💡 Lista de skills con React.createElement para evitar error TS2786
// 💡 Lista de skills (con type assertion para evitar error TS2769)
const skills = [
  { name: "JavaScript", icon: React.createElement(SiJavascript as React.ElementType) },
  { name: "TypeScript", icon: React.createElement(SiTypescript as React.ElementType) },
  { name: "React", icon: React.createElement(FaReact as React.ElementType) },
  { name: "PHP", icon: React.createElement(FaPhp as React.ElementType) },
  { name: "Yii2", icon: React.createElement(SiYii as React.ElementType) },
  { name: "Laravel", icon: React.createElement(SiLaravel as React.ElementType) },
  { name: "Node.js", icon: React.createElement(FaNodeJs as React.ElementType) },
  { name: "MySQL", icon: React.createElement(SiMysql as React.ElementType) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql as React.ElementType) },
  { name: "HTML5", icon: React.createElement(FaHtml5 as React.ElementType) },
  { name: "CSS3", icon: React.createElement(FaCss3Alt as React.ElementType) },
  { name: "Docker", icon: React.createElement(FaDocker as React.ElementType) },
  { name: "Git", icon: React.createElement(FaGitAlt as React.ElementType) },
];


const Skills: React.FC = () => {
  return (
    <Wrapper>
      <Title>Skills</Title>
      <Description>
        These are some of the technologies and tools I use to build web and mobile applications.
      </Description>

      <Grid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <Icon>{skill.icon}</Icon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Skills;

// 💅 Estilos
const Wrapper = styled.section`
  background: ${themes.dark.backgroundColor};
  padding: 120px 30px;
  text-align: center;
`;

const Title = styled(H1)`
  font-size: 48px;
  background: linear-gradient(180deg, rgb(119, 4, 58) 0%, rgb(173, 93, 193) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 16px;
`;

const Description = styled(MediumText)`
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px 20px;
  transition: all 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.3);
  }

  svg {
    font-size: 40px;
    color: #ffb6c1;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;
