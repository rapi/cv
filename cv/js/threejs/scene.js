var THREE=require('three');

var config={
  range_distance:[-7,7],
  range_mass:[0.1,0.5],
  range_speed:[0.01,0.05],
  count:20,
}
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 1.5, 40, 40 );
var material = new THREE.MeshLambertMaterial();
var center = new THREE.Mesh( geometry, material );
scene.add( center );
camera.position.z = 10;

var objects=[];

for (var i = 0; i < config.count; i++) {
  objects[i]={};
  objects[i]['geometry']=new THREE.SphereGeometry( rand(config.range_mass[0],config.range_mass[1]), 20, 20 );
  objects[i]['material']= new THREE.MeshLambertMaterial();
  objects[i]['mesh']=  new THREE.Mesh( objects[i]['geometry'], objects[i]['material'] );
  var x=rand(config.range_distance[0],config.range_distance[1]);
  var y=rand(config.range_distance[0],config.range_distance[1]);
  var z=rand(config.range_distance[0],config.range_distance[1]);
  objects[i]['x']=x;
  objects[i]['y']=y;
  objects[i]['z']=z;
  objects[i]['speed']=rand(config.range_speed[0],config.range_speed[1]);
  scene.add( objects[i]['mesh'] );
}


var light = new THREE.DirectionalLight( 0x2196F3 );
light.position.set( 0, 0, 1 );
scene.add( light );

function rand(min,max){
  return Math.random()*(max-min)+min;
}
var time=0;
var render = function () {
  time=time+1;
  requestAnimationFrame( render );
  for (var i = 0; i < config.count; i++) {
    objects[i]['mesh'].position.x = Math.sin(  objects[i]['speed']*time) * objects[i]['x'];
    objects[i]['mesh'].position.y = Math.sin(  objects[i]['speed']*time) * objects[i]['y'];
    objects[i]['mesh'].position.z = Math.cos(  objects[i]['speed']*time) * objects[i]['z'];
  }
  renderer.render( scene, camera );
};

render();
