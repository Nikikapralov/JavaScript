function sort_by_two(array){
    let result = array.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b)
      })
    console.log(result)
}
sort_by_two(["Isacc", "Theodor", "Jack", "Harrison", "George"])