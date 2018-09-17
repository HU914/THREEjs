
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1, 1000);
// var renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// var geometry = new THREE.CubeGeometry(1,1,);
// var material = new THREE.MeshBasicMaterial({color:0x00ff00});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// camera.position.z = 5;
// function render () {
//   requestAnimationFrame(render);
//   cube.rotation.x +=0.1;
//   cube.rotation.y +=0.1;
//   renderer.render(scene,camera);
// }
// render();

var renderer;
function initThree() {
  console.log(document.querySelector('#tt').clientWidth, document.querySelector('#tt').clientHeight);
  width = document.querySelector('#tt').clientWidth;
  height = document.querySelector('#tt').clientHeight;
  renderer = new THREE.WebGLRenderer({
      antialias : true
  });
  renderer.setSize(width, height);
  document.querySelector('#tt').appendChild(renderer.domElement);
  renderer.setClearColor(0xFFFFFF, 1.0);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.x = 0;
    camera.position.y = 1000;
    camera.position.z = 0;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt(0, 0,0);
}

var scene;
function initScene() {
    scene = new THREE.Scene();
}

var light;
function initLight() {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
}

var cube;
function initObject() {

    var geometry = new THREE.Geometry();
    // var material = new THREE.LineBasicMaterial( { vertexColors: true } );
    // var color1 = new THREE.Color( 0x000000 ), color2 = new THREE.Color( 0xFF3333 ), color3 = new THREE.Color(0xf9e1a9);

    // // 线的材质可以由2点的颜色决定
    // var p1 = new THREE.Vector3( -100, 0, 100 );
    // var p3 = new THREE.Vector3( -100, 0, 100 );
    // var p2 = new THREE.Vector3( 200, 0, -100 );
    //     cube = new THREE.Vector3( -100,0 ,-100 );
    // geometry.vertices.push(p1);
    // geometry.vertices.push(p2);
    // geometry.vertices.push(cube);
    // geometry.vertices.push(p3);
    // geometry.colors.push( color1, color2,color3,color2); 
    // var line = new THREE.Line( geometry, material, THREE.LineSegments);
    // scene.add(line);
    geometry.vertices.push(new THREE.Vector3(-500,0,0))
    geometry.vertices.push(new THREE.Vector3(500,0,0))
}

function threeStart() {
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    renderer.clear();
    renderer.render(scene, camera);
    // cube.rotation.x += 0.1;
    // requestAnimationFrame(threeStart);
}
window .onload = function () {
  threeStart();
}
  