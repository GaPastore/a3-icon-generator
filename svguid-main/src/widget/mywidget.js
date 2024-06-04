import { getColorIterator } from "./utils/colors/color.js"
import body from "./utils/monsters/body.js"
import eyes from "./utils/monsters/eyes.js"
import details from "./utils/monsters/details.js"

export default function (key, draw, val) {

    let nextColor = getColorIterator(key)

    draw.rect().size(1000,1000).move(0,0).fill(nextColor())
    draw.rect().size(1000,1000).move(0,0).fill('#fff').opacity(0.75)
    
    let b = body(key.next256())
    let e = eyes(key.next256())
    let d = details(key.next256())

    switch(val){
        case null:
            b.opacity(1)
            b.move(250,250).size(500).fill('#151515')
            b.addTo(draw)
            break
        case 'qua':
            for (let lin = 0; lin < 5; lin++) {
                for (let col = 0; col < 5; col++) {
                
                    draw.rect().size(200, 200).move(200 * col, lin * 200).fill(nextColor()).opacity(0.25)

                }
            }
            b.opacity(1)
            b.move(250,250).size(500).fill('#151515')
            b.addTo(draw)
            break
        case 'lis':
            for (let col = 0; col < 5; col++) {
                draw.rect().size(1000, 200).move(0, col * 200).fill(nextColor()).opacity(0.25)
            }
            b.opacity(1)
            b.move(250,250).size(500).fill('#151515')
            b.addTo(draw)
            break
        case 'col':
            b.opacity(1)
            b.move(250,250).size(500).fill(nextColor())
            b.addTo(draw)
            break
        case 'cir':
            for (let i = 0; i < 10; i++){
                draw.circle().radius(100*i+1).move(500-(i*100),500-(i*100)).fill(nextColor()).opacity(0.25)
            }
            b.opacity(1)
            b.move(250,250).size(500).fill('#151515')
            b.addTo(draw)
            break

    }    

    e.fill("#fff").opacity(1)
    e.move(375,375).size(250)
    e.addTo(draw)

    d.fill(nextColor()).opacity(1)
    d.move(125,125).size(750)
    d.addTo(draw)    
    
}
