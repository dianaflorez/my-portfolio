import React from "react";
import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import { H1, MediumText } from "../../styles/TextStyles";

interface Project {
  title: string;
  description: string;
  version: string;
  link: string;
  tag: string;
  timestamp: number;
}

const projects: Project[] = [
  {
    title: "Acar",
    description:
      "Sistema para la generación de FUECS y administración de asignación y alquiler de vehículos por medio de contratos fijos y ocasionales. Con envío de alertas por WhatsApp Business API.",
    version: "1.0",
    link: "https://gitlab.com/dianaflorez",
    tag: "PHP, Yii2, PostgreSQL, JavaScript, Bootstrap, WhatsApp Business API",
    timestamp: 765817712002,
  },
  {
    title: "VisitaMiCiudad",
    description:
      "Aplicación web para descubrir lugares y rutas turísticas personalizadas generadas con OpenAI, promoviendo negocios y eventos locales.",
    version: "1.0",
    link: "https://github.com/dianaflorez/visitamiciudad",
    tag: "React, Node, Express, PostgreSQL, JavaScript, Material UI",
    timestamp: 765817712001,
  },
  {
    title: "PastoShop",
    description:
      "Tienda online con integración de pasarelas de pago como ePayco, PayU Latam y Mercado Pago para productos de distintos proveedores.",
    version: "1.0",
    link: "https://github.com/dianaflorez",
    tag: "PHP, Yii2, PostgreSQL, JavaScript, Bootstrap",
    timestamp: 765817712002,
  },
  {
    title: "Sinet",
    description:
      "Sistema de administración para el préstamo y asignación de equipos para la Gobernación de Nariño.",
    version: "1.0",
    link: "https://github.com/dianaflorez",
    tag: "React",
    timestamp: 765817712003,
  },
  {
    title: "Sinet-Form",
    description:
      "Sistema de soporte y administración de tickets de atención al usuario, con encuestas personalizadas y dinámicas.",
    version: "1.0",
    link: "https://github.com/dianaflorez",
    tag: "PHP, Yii2, PostgreSQL, JavaScript, Bootstrap",
    timestamp: 765817712004,
  },
  {
    title: "WIWO Walk in the World (Android)",
    description:
      "Aplicación móvil desarrollada en Android Studio, con backend administrable en Digital Ocean usando Apache, PHP, Yii2 y PostgreSQL.",
    version: "1.0",
    link: "https://www.facebook.com/WIWO-Walk-in-the-World-368133963521258/",
    tag: "Android Studio, PHP, Yii2, PostgreSQL, JavaScript, Materialize",
    timestamp: 765817712005,
  },
  {
    title: "Multiser",
    description:
      "Sistema de administración para solicitud y gestión de cobros por libranza.",
    version: "1.0",
    link: "https://gitlab.com/dianaflorez",
    tag: "PHP, Yii2, PostgreSQL, JavaScript, Bootstrap",
    timestamp: 765817712006,
  },
  {
    title: "Arkenity",
    description:
      "Plataforma para la creación de cursos online de trading, con administración de usuarios y clases en línea y offline.",
    version: "1.0",
    link: "https://gitlab.com/dianaflorez",
    tag: "PHP, Yii2, PostgreSQL, JavaScript, Bootstrap",
    timestamp: 765817712007,
  },
  {
    title: "IncentAPI",
    description:
      "Sistema para la generación de desprendibles de pago con código QR para redimir en supermercados afiliados.",
    version: "1.0",
    link: "https://gitlab.com/dianaflorez",
    tag: "PHP, Yii2, MySQL, JavaScript, Bootstrap",
    timestamp: 765817712008,
  },
];

const Projects: React.FC = () => {
  return (
    <Wrapper>
      <Title>Some Projects...</Title>
      <Description>
        Some of the projects I've worked on, combining creativity, technology, and problem solving.
      </Description>

      <Grid>
        {projects.map((project) => (
          <Card key={project.timestamp}>
            <Header>
              <CardTitle>{project.title}</CardTitle>
              <Version>v{project.version}</Version>
            </Header>

            <CardDescription>{project.description}</CardDescription>

            <Tags>{project.tag}</Tags>

            <LinkButton href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </LinkButton>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;

// 💅 Estilos
const Wrapper = styled.section`
  background: ${themes.dark.backgroundColorPurple};
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
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.35);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const Version = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;

const CardDescription = styled.p`
  font-size: 15px;
  opacity: 0.85;
  line-height: 1.5;
  text-align: left;
`;

const Tags = styled.div`
  font-size: 13px;
  opacity: 0.7;
  text-align: left;
`;

const LinkButton = styled.a`
  margin-top: auto;
  align-self: flex-start;
  padding: 10px 18px;
  border-radius: 8px;
  background: linear-gradient(180deg, rgb(119, 4, 58) 0%, rgb(173, 93, 193) 100%);
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  }
`;
