import React from 'react';
import styled from 'styled-components';
import background from './background-landing.svg';
import backgroundDark from './background-landing-dark.svg';
import { useEffect, useRef } from "react";

interface Star {
  color: string;
  velX: number;
  velY: number;
  x: number;
  y: number;
}

const WaveLanding = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
    const nEstrellas = 500;
    const velMax = 3;
    let estrellas: Star[] = [];

    const prepararEstrella = (index: number) => {
        estrellas[index] = {
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
            velX: (Math.random() * velMax * 2) - velMax + 1,
            velY: (Math.random() * velMax * 2) - velMax + 1,
            x: 150,
            y: 150
        };
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const cx = canvas.getContext("2d");
        if (!cx) return;
        
        canvas.style.background = "transparent"; // Hace que el canvas sea transparente
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < nEstrellas; i++) {
            prepararEstrella(i);
        }

        const pintar = () => {
            cx.clearRect(0, 0, canvas.width, canvas.height); // Limpia sin fondo negro

            for (let i = 0; i < nEstrellas; i++) {
                let e = estrellas[i];
                cx.fillStyle = "grey";

                if (e.x > canvas.width || e.y > canvas.height || e.x < 0 || e.y < 0) {
                    prepararEstrella(i);
                }
                e.x += e.velX;
                e.y += e.velY;
                cx.fillRect(e.x, e.y, 2, 2);
            }

            requestAnimationFrame(pintar);
        };

        pintar();
    }, []);

  return (
    <Wrapper>
      {/* <Wave src={background} alt="Background Image" /> */}
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}></canvas>;

    </Wrapper>
  );
};

export default WaveLanding;

const Wrapper = styled.div`
  position: relative;
`;
const Wave = styled.img`
  position: absolute;
  top: -100px;
  z-index: -1;
  @media (min-width: 1440px) {
    width: 100%;
  }
  @media (prefers-color-scheme: dark) {
    content: url(${backgroundDark});
  }
`;
