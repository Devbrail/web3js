// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, getCameraAspectRatio(), 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// var geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
// var material = new THREE.MeshPhongMaterial({
//     color: 0xffffff
// });
// var cube = new THREE.Mesh(geometry, material);
// var controls = new THREE.OrbitControls( camera, renderer.domElement );

// var loader = new THREE.GLTFLoader();
// loader.load(
//     // resource URL
//     '/scene.gltf',
//     // called when the resource is loaded
//     function (gltf) {

//         scene.add(gltf.scene);

//         gltf.animations; // Array<THREE.AnimationClip>
//         gltf.scene; // THREE.Scene
//         gltf.scenes; // Array<THREE.Scene>
//         gltf.cameras; // Array<THREE.Camera>
//         gltf.asset; // Object

//     },
//     // called while loading is progressing
//     function (xhr) {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     },
//     // called when loading has errors
//     function (error) {
//         console.log('An error happened');
//     }
// );


// scene.add(cube);
// var pointLight = new THREE.DirectionalLight(0xffffff, 1, 100);
// pointLight.position.set(0, 0, 50);
// scene.add(pointLight);
// camera.position.z = 25;
// camera.position.y = 6;
// controls.update()


// var animate = function () {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = getCameraAspectRatio();
//     camera.updateProjectionMatrix();
//     controls.update()
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// };
// animate();

// function getCameraAspectRatio() {
//     return window.innerWidth / window.innerHeight
// }
alert('main');