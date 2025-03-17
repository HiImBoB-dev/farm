namespace SpriteKind {
    export const Farmer = SpriteKind.create()
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 e 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . e e 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 e e 5 5 . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f 2 f 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `, SpriteKind.Farmer)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level2`)
