import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NebulaBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2() },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) +
                  (c - a)* u.y * (1.0 - u.x) +
                  (d - b) * u.x * u.y;
        }

        void main() {
          vec2 st = vUv * 2.0 - 1.0;
          st.x *= resolution.x / resolution.y;
          vec2 pos = st * 3.0;
          
          float n = noise(pos + time * 0.2);
          float n2 = noise(pos * 2.0 - time * 0.1) * 0.5;
          float n3 = noise(pos * 4.0 + time * 0.15) * 0.25;
          
          float finalNoise = n + n2 + n3;
          vec3 color1 = vec3(1.0, 0.0, 0.5);    // Neon Pink (rgb(255, 0, 127))
vec3 color2 = vec3(0.54, 0.17, 0.89); // Cyber Purple (rgb(138, 43, 226))
vec3 color3 = vec3(0.17, 0.17, 0.17); // Charcoal Black (rgb(44, 44, 44))

          
          
          
          

          vec3 finalColor = mix(color1, color2, finalNoise);
          finalColor = mix(finalColor, color3, n2);

          float glow = pow(smoothstep(0.2, 1.5, finalNoise), 2.5);
          finalColor *= glow;
          finalColor = mix(vec3(0.0), finalColor, glow);

          gl_FragColor = vec4(finalColor, glow * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = containerRef.current?.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      material.uniforms.resolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let animationFrameId;
    const animate = () => {
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (containerRef.current?.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 0,
        background: 'black',
      }}
    />
  );
};

export default NebulaBackground;
