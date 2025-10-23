import React from "react";
import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import { MediumText } from "../../styles/TextStyles";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Line />
      <Content>
        <Text>
          © {currentYear} Diana Florez — All rights reserved.
        </Text>
        <Links>
            <Link href="https://github.com/dianaflorez" target="_blank" rel="noopener noreferrer">
                GitHub
            </Link>
            <Link href="https://gitlab.com/dianaflorez" target="_blank" rel="noopener noreferrer">
                GitLab
            </Link>
            <Link href="https://www.linkedin.com/in/diana-cristy-florez-bravo" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </Link>
            <Link href="mailto:dianaflorez@gmail.com">Contact</Link>
        </Links>

      </Content>
    </Wrapper>
  );
};

export default Footer;

// 💅 styled-components
const Wrapper = styled.footer`
  background: ${themes.dark.backgroundColor};
  padding: 50px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Line = styled.div`
  width: 60%;
  height: 1px;
  margin: 0 auto 20px;
  background: linear-gradient(90deg, rgba(173, 93, 193, 0.5), rgba(119, 4, 58, 0.5));
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Text = styled(MediumText)`
  font-size: 14px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled.a`
  font-size: 14px;
  color: #ffb6c1;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e0c3fc;
  }
`;
