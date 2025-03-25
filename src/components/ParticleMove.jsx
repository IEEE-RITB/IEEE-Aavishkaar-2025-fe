import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ParticleMove = () => {
    const dotsCanvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    const colors = [
        "61, 207, 236",
        "255, 244, 174",
        "255, 211, 218",
        "151, 211, 226",
    ];
    const circleRadius = 2;

    useEffect(() => {
        if (!dotsCanvasRef.current || hasAnimatedRef.current) return;

        const dotsCanvas = dotsCanvasRef.current;
        const dotsCtx = dotsCanvas.getContext("2d");

        // Set canvas to full window size
        const resizeCanvas = () => {
            dotsCanvas.width = window.innerWidth;
            dotsCanvas.height = window.innerHeight;
        };

        // Resize and generate dots
        resizeCanvas();
        const dots = [];
        const dotCount = 300;

        const randomNumber = (min, max) =>
            Math.floor(Math.random() * (max - min) + min);

        // Initial dot generation
        for (let i = 0; i < dotCount; i++) {
            dots.push({
                x: randomNumber(0, dotsCanvas.width),
                y: randomNumber(0, dotsCanvas.height),
                originalX: randomNumber(0, dotsCanvas.width),
                originalY: randomNumber(0, dotsCanvas.height),
                color: colors[randomNumber(0, colors.length)],
                alpha: 0.3,
                draw: function () {
                    dotsCtx.beginPath();
                    dotsCtx.arc(this.x, this.y, circleRadius, 0, 2 * Math.PI, false);
                    dotsCtx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
                    dotsCtx.fill();
                },
            });
        }

        // Animate dots once
        dots.forEach((dot) => {
            gsap.to(dot, {
                x: dot.originalX,
                y: dot.originalY,
                alpha: 0.7,
                duration: 2 + Math.random(),
                ease: "power2.out",
            });
        });

        // Persistent background animation
        const loop = () => {
            dotsCtx.clearRect(0, 0, dotsCanvas.width, dotsCanvas.height);
            dots.forEach((dot) => dot.draw());
            animationFrameRef.current = requestAnimationFrame(loop);
        };

        loop();
        hasAnimatedRef.current = true;

        // Resize listener
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas ref={dotsCanvasRef} className="absolute inset-0 z-0 opacity-50" />
    );
};

export default ParticleMove;
