function calculate(name, album, song){
    let seconds = name.length * album.length * song.length / 2
    let rotations = Math.ceil(seconds / 2.5)
    console.log(`The plate was rotated ${rotations} times.`)
}
calculate('Black Sabbath', 'Paranoid', 'War Pigs')