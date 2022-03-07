class Align
{
    static center(obj)
    {
        obj.x = game.config.width/2;
        obj.y = game.config.height/2;
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        // Fit to window
        mode: Phaser.Scale.RESIZE,
        // Center vertically and horizontally
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.setBaseURL('https://labs.phaser.io');
    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
    this.load.image('sky', 'color.png');
    this.load.image('flower_1', 'flower_1.png');
    this.load.image('flower_2', 'flower_2.png');
    this.load.image('flower_3', 'flower_3.png');
    this.load.image('flower_4', 'flower_4.png');
}

function create ()
{
    // config.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    var bg = this.add.image(0, 0, 'sky');
    var flowers = []
    var flowers_x = []
    var flowers_y = []
    this.matter.world.setBounds(0, 0, game.scale.width, game.scale.height);
    for (var i = 0; i < 10; i++)
    {
        flowers_x[i] = Phaser.Math.Between(0, game.scale.width);
        flowers_y[i] = Phaser.Math.Between(0, game.scale.height);

        var sides = 5;
        var radius = 50;

        this.matter.add.polygon(x, y, sides, radius, { restitution: 0.9 });
    }

    for (var i = 0; i < 10; i++)
    {
        flowers.push(this.add.image(flowers_x[i], flowers_y[i], 'flower_' + (i%4 + 1)));
        flowers[i-1].displayHeight = flowers[i-1].displayHeight*.05;
        flowers[i-1].displayWidth = flowers[i-1].displayWidth*.05;
    }

    // this.matter.add.mouseSpring();

    var controlConfig = {
        // camera: this.cameras.main,
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };
    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);

    console.log(bg.displayHeight, game.scale.height);
    bg.displayHeight = game.scale.height*4;
    bg.scaleX = bg.scaleY;

    console.log(bg.displayHeight, game.scale.height);
    // Align.center(bg);

    // this.scale.on('resize', resize, this);

    // var scale = Math.max(config.height/600, config.width/800);
}

function resize (gameSize, baseSize, displaySize, resolution)
{
    console.log('1', bg.displayHeight, game.scale.height);
    game.resize(window.innerWidth, window.innerHeight);
    // this.bg.displayHeight = gameSize.heght;
    // this.bg.scaleX = bg.scaleY;

    console.log('1', bg.displayHeight, game.scale.height);
    // var width = gameSize.width;
    // var height = gameSize.height;

    // this.cameras.resize(width, height);

    // this.bg.setSize(width, height);
    // this.logo.setPosition(width / 2, height / 2);
}