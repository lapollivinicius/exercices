
// numbers - number0-9 / decimal / clear
// plus / minus / times / divide
// equal
// view
// operators

const View = document.getElementById('view')

const Operators = document.querySelectorAll('#operators div')
const Numbers = document.querySelectorAll('#numbers div')
const Equal = document.querySelector('#equal')

let Num = []
let Decimal = undefined
let Clear = undefined

Numbers.forEach(Key => {

    const Id = Key.id

    Key.addEventListener('click', () => {
        switch (Id) {
            case 'clear':
                // clear 
                console.log('clear')
                View.textContent = ''
                Num.length = 0
                const Actived = document.querySelectorAll('.active')
                Actived.forEach(el => el.classList.remove('active'))
            break
            case 'decimal':
                // decimal
                
                Decimal = '.'
                console.log(Decimal)
                View.textContent += '.'
                Num.push(Decimal)
            break
            default:

                View.textContent += Id.replace('number', '')

                Num.push(Id.replace('number', ''))
                console.log(Num.join(''))
        }
        
    })

});

Operators.forEach(Key => {
    const Id = Key.id
    Key.classList.remove('active')


    Key.addEventListener('click', () => {
        Operators.forEach(op => {
            op.classList.remove('active')
        })
        switch(Id) {
            case 'plus':
                Key.classList.add('active')
                View.textContent += '+'
                Num.push('+')

            break
            case 'minus':
                Key.classList.add('active')
                View.textContent += '+'
                Num.push('-')

            break
            case 'times':
                Key.classList.add('active')
                View.textContent += '+'
                Num.push('*')

            break
            case 'divide':
                Key.classList.add('active')
                View.textContent += '+'
                Num.push('/')

            break
        }
    })
})

Equal.addEventListener('click', () => {
    let Numero = null
    Numero = Num.join('')
    let Helloe = eval(Numero)
    console.log(Helloe)
    View.textContent = ''
    View.textContent = Helloe
})
