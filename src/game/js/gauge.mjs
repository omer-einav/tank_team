export {Gauge};

const gauge_bg_texture = PIXI.Texture.from('assets/speed/speed_bg2.png');
const gauge_dial_texture = PIXI.Texture.from('assets/speed/speed_dial.png');


class Gauge{
    constructor(app, position, size = 400) {
        var gauge = new PIXI.Container()

        gauge.position = position

        let gauge_bg = gauge.addChild(new PIXI.Sprite(gauge_bg_texture))
        gauge_bg.anchor.set(0.5)

        var gauge_dial = new PIXI.Sprite(gauge_dial_texture)
        gauge.addChild(gauge_dial)

        gauge_dial.anchor.x = 0.5
        gauge_dial.anchor.y = 0.5
        gauge_dial.angle = -140;

        // console.log(gauge.width)
        // gauge.scale.set(0.1)


        console.log(gauge.width)
        gauge.width = size
        gauge.height = size

        this.dial = gauge_dial;

        app.stage.addChild(gauge)
    }
}