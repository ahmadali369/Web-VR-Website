import { STLLoader } from './loaders/STLLoader.js';

      // Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x310050);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshBasicMaterial({ color: 0x0affa0 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x0bfff0 });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material2);
scene.add(cube);
scene.add(cube2);

// Create lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1); // Set the position of the light
scene.add(ambientLight, directionalLight);

// Load the .stl file
const loader = new THREE.STLLoader();
loader.load('./3d/mylg.stl', function (geometry) {
  // Create a material for the model
  const material = new THREE.MeshPhongMaterial({ color: 0xAfAf33, specular: 0x11f111, shininess: 200 });

  // Create a mesh with the loaded geometry and material
  const mesh = new THREE.Mesh(geometry, material);

  // Add the mesh to the scene
  scene.add(mesh);

  // Position and scale the model as needed
  mesh.position.set(0, 0, -200);
  mesh.scale.set(10, 10, 10);
});

// Position the camera
camera.position.z = 800;

// Define an animation loop
function animate() {
  requestAnimationFrame(animate);

  // Animation code for cubes
  const amplitude = 200;
  const frequency = 0.002;
  cube.position.y = Math.sin(Date.now() * frequency) * amplitude;
  cube2.position.x = Math.sin(Date.now() * frequency) * amplitude;

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();

      
      
      
      
      
      
      
      
      
      
      
      // // Set up the scene, camera, and renderer
      // const scene = new THREE.Scene();
      // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      // const renderer = new THREE.WebGLRenderer();
      // renderer.setClearColor(0x310050); 
      // renderer.setSize(window.innerWidth, window.innerHeight);
      // document.body.appendChild(renderer.domElement);

      // // Create a cube
      // const geometry = new THREE.BoxGeometry(50, 50, 50);
      // const material = new THREE.MeshBasicMaterial({ color: 0x0affa0 });
      // const material2 = new THREE.MeshBasicMaterial({ color: 0x0bfff0 });


      // const cube = new THREE.Mesh(geometry, material);
      // const cube2 = new THREE.Mesh(geometry, material2);
      
      // scene.add(cube);
      // scene.add(cube2);


      // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light
      // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Directional light
      
      // scene.add(ambientLight);
      // scene.add(directionalLight);




      // const grid = new THREE.AxesHelper(100); 
      
      // scene.add(grid); 


      // // Position the camera
      // camera.position.z = 800;



      // cube.position.y = 0; 
      // cube.position.x = 0; 

      // cube2.position.y = 0; 
      // cube2.position.x = 0; 


      // const loader = new THREE.STLLoader();

      // // Load the .stl file
      // loader.load('./3d/mylg.stl', function (geometry) {
      //   // Create a material for the model
      //   var material = new THREE.MeshPhongMaterial({ color: 0xAfAf33, specular: 0x11f111, shininess: 200 });
      
      //   // Create a mesh with the loaded geometry and material
      //   var mesh = new THREE.Mesh(geometry, material);
      
      //   // Add the mesh to the scene
      //   scene.add(mesh);
      
      //   // Position and scale the model as needed
      //   mesh.position.set(0, 0, -100);
      //   mesh.scale.set(10, 10, 10);
      
      //   // Render the scene
      //   // renderer.render(scene, camera);
      // });






      // var amplitude = 200;  // Maximum distance from the center
      // var frequency = 0.002; 


      // // Define an animation loop
      // function animate() {
      //   requestAnimationFrame(animate);

      //   cube.position.y = Math.sin(Date.now() * frequency) * amplitude;
      //   cube2.position.x = Math.sin(Date.now() * frequency) * amplitude;

      // renderer.setSize(window.innerWidth, window.innerHeight);
        
      //   // Render the scene with the camera
      //   renderer.render(scene, camera);
      // }


      // animate();