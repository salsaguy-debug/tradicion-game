const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    backgroundColor: '#87CEEB', // Tropical Sky Blue
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    // This is where you'll load your Puerto Rican characters
    // For now, we'll use colored squares as placeholders
    this.load.image('tile1', 'https://placehold.co/50x50/ff0000/white?text=1');
    this.load.image('tile2', 'https://placehold.co/50x50/00ff00/white?text=2');
    this.load.image('tile3', 'https://placehold.co/50x50/0000ff/white?text=3');
}

function create() {
    const rows = 8;
    const cols = 6;
    const tileSize = 60;
    const padding = 20;

    // Create the Grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let randomTile = 'tile' + Phaser.Math.Between(1, 3);
            let x = c * tileSize + padding + (tileSize / 2);
            let y = r * tileSize + padding + (tileSize / 2);
            
            let tile = this.add.sprite(x, y, randomTile).setInteractive();

            // Simple click effect
            tile.on('pointerdown', function() {
                this.setTint(0xcccccc);
                console.log(`Clicked tile at Row: ${r}, Col: ${c}`);
            });
        }
    }

    this.add.text(20, 550, 'Score: 0', { fontSize: '32px', fill: '#000' });
}