// const square = x => x * x

// console.log(square(4))

const event = {
  name: 'party',
  guestList: ['Kook', 'Bae', 'Ju'],
  printGuestList() {
    console.log(`Guest list for ${this.name}`)

    this.guestList.forEach(guest => console.log(`${guest} is attending ${this.name}`))
  }
}

event.printGuestList()