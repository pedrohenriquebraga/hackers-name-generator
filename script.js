function getName() {

    const dayName = [
        'Mr. ',
        'John ',
        'Grand ',
        'God of ',
        'King of ',
        'Daniel ',
        'Mage of ',
        'Prince of ',
        'Jack ',
        'Simon ',
        'Gang of ',
        'Pirate of ',
        'Lord of ',
        'Adrian ',
        'The Nightmare of ',
        'Bob ',
        'Ghost of ',
        'Mc ',
        ':) ',
        'Enemy of ',
        'Smith ',
        'Key of ',
        'Invasor of ',
        'The Killer of ',
        'The Murder of ',
        'Mark ',
        'Adriam ',
        'Bird of ',
        'K. ',
        'Gabriel ',
        'Mysterious of '
    ]

    const monthName = ['Port 21', 'Exploit', 'Password', 'DDoS', 'Pato', 'DoS', 'Web', 'Http', 'Command', 'Phising', 'Piracy', 'Annonymous']

    const dayInput = document.querySelector("#day").value
    const monthInput = document.querySelector("#month").value
    const name = document.querySelector("#name h2")

    if (dayInput != '' && monthInput != '') {
        const day = parseInt(dayInput)
        if (day > 31 || day < 1) {
            return alert(`O dia não pode ser ${day}`)
        }
        const month = parseInt(monthInput)
        if (month > 12 || month < 1) {
            return alert(`O mês não pode ser ${month}`)
        }

        name.innerHTML = ''
        if (dayName[day - 1] + monthName[month - 1] == 'Gabriel Pato') {
            name.innerHTML += `<img class="view" src="gabriel-pato.jpg" alt="Foto Gabriel Pato">`
        }
        name.innerHTML += dayName[day - 1] + monthName[month - 1]
    } else {
        return alert("Todos os campos devem ser preenchidos!!")
    }
}