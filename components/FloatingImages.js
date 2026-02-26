"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FloatingImages() {
  const ref = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(innerWidth, innerHeight);
    ref.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const imgs = ["/kdrama/img1.jpg", "/kdrama/img2.jpg", "/kdrama/img3.jpg", "/kdrama/img4.jpg"];
    const planes = [];

    imgs.forEach(src => {
      const tex = loader.load(src);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
      const geo = new THREE.PlaneGeometry(1.6, 1);
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set((Math.random()-0.5)*8, (Math.random()-0.5)*6, Math.random()*-4);
      scene.add(mesh);
      planes.push(mesh);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      planes.forEach(p => {
        p.position.y += 0.003;
        if (p.position.y > 4) p.position.y = -4;
      });
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={ref} className="fixed inset-0 -z-10" />;
}