const input = document.querySelector('.first__techs--writing')
const text = ['Aurelia ', 'ModX ', 'Laravel ', 'Docker ']

let line = 0
let count = 0
let wordReverse = 0
let out = ''

function typeLine() {
    let interval = setTimeout(function() {
        if (wordReverse === 0 && count <= text[line].length) {
            out += text[line][count]
            input.textContent = out
            count++
        }

        if (count >= text[line].length) {
            wordReverse = 1
        }

        if (wordReverse === 1 && count >= 0) {
            count--
            out = out.slice(0, -1)
            input.textContent = out
            if (count === 0) {
                wordReverse = 0
                line++
                if (line == text.length) {
                    line = 0
                }
            }
        }
        typeLine()
    }, 200)
}

typeLine()