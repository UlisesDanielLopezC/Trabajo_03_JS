import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0,0,15);

renderer.render(scene, camera);

//Bases

const geo1 = new THREE.TetrahedronGeometry(18, 0);
const mat1 = new THREE.MeshStandardMaterial({ color: 0xb0dbf5 });
const tet1 = new THREE.Mesh(geo1, mat1);
scene.add(tet1);

tet1.position.z = -20;
tet1.position.y = -4;
tet1.rotation.z = .79;
tet1.rotation.x = 0.78;

const mat2 = new THREE.MeshStandardMaterial({ color: 0xd7b0f5 });
const tet2 = new THREE.Mesh(geo1, mat2);
scene.add(tet2);

tet2.position.z = -30;
tet2.position.x = 92.5;
tet2.rotation.z = .79;
tet2.rotation.x = 0.79;

const mat3 = new THREE.MeshStandardMaterial({ color: 0xc5f5b0 });
const tet3 = new THREE.Mesh(geo1, mat3);
scene.add(tet3);

tet3.position.z = -30;
tet3.position.x = 185;
tet3.rotation.z = .79;
tet3.rotation.x = 0.79;

const txt1 = new THREE.TextureLoader().load('espacio_azul.jpeg');
const geo2 = new THREE.Mesh(new THREE.BoxGeometry(1, 16, 8), new THREE.MeshBasicMaterial({ map: txt1 }));
scene.add(geo2);

geo2.position.z = -20;
geo2.position.y = 9;
geo2.rotation.y = 1.51;

const txt2 = new THREE.TextureLoader().load('espacio_cafe.jpg');
const geo3 = new THREE.Mesh(new THREE.BoxGeometry(1, 16, 8), new THREE.MeshBasicMaterial({ map: txt2 }));
scene.add(geo3);

geo3.position.z = -30;
geo3.position.y = 14;
geo3.position.x = 93;
geo3.rotation.y = 1.54;

const txt3 = new THREE.TextureLoader().load('espacio_rojo.jpg');
const geo4 = new THREE.Mesh(new THREE.BoxGeometry(1, 16, 8), new THREE.MeshBasicMaterial({ map: txt3 }));
scene.add(geo4);

geo4.position.z = -30;
geo4.position.y = 14;
geo4.position.x = 185.5;
geo4.rotation.y = 1.54;

const txt4 = new THREE.TextureLoader().load('sol.jpg');
const geoSun = new THREE.Mesh(new THREE.SphereGeometry(15, 32, 16), new THREE.MeshBasicMaterial({ map: txt4 }));
scene.add(geoSun);

geoSun.position.z = -100;
geoSun.position.y = 15;
geoSun.position.x = 94;

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Background

const codeTexture = new THREE.TextureLoader().load('coding.jpg');
scene.background = codeTexture;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  
  geoSun.rotation.z += 0.025;

  camera.position.x = t * -0.07;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  
  geoSun.rotation.x += 0.005;
  // controls.update();
  renderer.render(scene, camera);
}

animate();
