export class SampleModel {
	constructor(info = {}) {
		this.scene = info.scene;
		this.gltfLoader = info.gltfLoader;
		this.width = info.width || 1;
		this.height = info.height || 2;
		this.depth = info.depth || 0.2;

		this.x = info.x || 0;
		this.y = info.y || this.height * 0.5;
		this.z = info.z || 0;

		this.rotationY = info.rotationY || 0;

		this.gltfLoader.load(
			'/models/iphone.glb',
			gltf => {
				this.mesh = gltf.scene.children[0];
				this.mesh.castShadow = true;
				this.mesh.rotation.y = this.rotationY;
				this.mesh.position.set(this.x, this.y, this.z);
				this.scene.add(this.mesh);
			}
		);
	}
}
