class Plane extends Component {
    constructor(positionVector3, sizeVector3, Euler, textureName, repeatTxt = false, material = null) {

        //nie posiadaja kolziji
        super(positionVector3, Euler);
        this.size = sizeVector3;
        this.material = null;
        this.geometry = new THREE.PlaneGeometry(this.size.x, this.size.y, 10);
        if (!material)
            if (repeatTxt)
                this.material = GM.textureBank.createMaterial(textureName, this.size.x / 10, this.size.y / 10);
            else
                this.material = GM.textureBank.createMaterial(textureName, 1, 1);
        else
            this.material = material;
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.container.add(this.mesh)
    }
}