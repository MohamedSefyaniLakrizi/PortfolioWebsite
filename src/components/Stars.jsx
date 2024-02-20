import "../stars.css";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import MoonTexture from "../assets/moon.jpg";
// Setup

function Stars() {
  const canvasRef = useRef();
  const moonTexture = new THREE.TextureLoader().load(MoonTexture);
  useEffect(() => {
    if (canvasRef.current) {
      const renderer = new WebGLRenderer({ canvas: canvasRef.current });
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#1e1e1e");

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.setZ(30);
      camera.position.setX(-3);

      renderer.render(scene, camera);

      // Lights

      const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(5, 5, 5);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(pointLight, ambientLight);

      // Helpers

      // const lightHelper = new THREE.PointLightHelper(pointLight)
      // const gridHelper = new THREE.GridHelper(200, 50);
      // scene.add(lightHelper, gridHelper)

      // const controls = new OrbitControls(camera, renderer.domElement);

      function addStar() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          map: moonTexture,
        });
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3)
          .fill()
          .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        scene.add(star);
      }

      Array(200).fill().forEach(addStar);

      // Scroll Animation
      const innerBodyDiv = document.getElementById("inner-body");
      let lastScrollTop = 0;

      function moveCamera() {
        const t = window.scrollY || innerBodyDiv.scrollTop;
        const delta = t - lastScrollTop;
        camera.position.z += delta * -0.001;
        camera.position.x += delta * -0.0002;
        camera.rotation.y += delta * -0.0002;

        lastScrollTop = t;
      }

      // Dummy touchmove handler to force scroll event to fire on mobile
      function touchMoveDummyHandler() {}

      if ("ontouchmove" in window) {
        window.addEventListener("touchmove", touchMoveDummyHandler, {
          passive: true,
        });
        window.addEventListener("scroll", moveCamera);
      } else {
        innerBodyDiv.addEventListener("scroll", moveCamera);
      }

      moveCamera();

      let isAnimating = true;

      const logoElement = document.querySelector(".logo");

      logoElement.addEventListener("click", () => {
        isAnimating = !isAnimating; // Toggle the animation state
        if (isAnimating) {
          animateCamera();
        }
      });

      function animateCamera() {
        if (isAnimating) {
          camera.position.z += 0.0002;
          camera.position.x += 0.0005;
          camera.rotation.y += 0.0002;

          // Call animateCamera again before the next repaint
          requestAnimationFrame(animateCamera);
        }
      }
      animateCamera();
      // Animation Loop

      function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
      }

      animate();
    }
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}

export default Stars;
