function getExpenses(lostFights, helmet, sword, shield, armour){
    let helmet_breaks = (lostFights - (lostFights % 2)) / 2
    let sword_breaks = (lostFights - (lostFights % 3)) / 3
    let shield_breaks = (lostFights - (lostFights % 6)) / 6
    let armour_breaks = (lostFights - (lostFights % 12)) / 12
    let expenses = helmet_breaks * helmet + sword_breaks * sword + shield_breaks * shield + armour_breaks * armour
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
getExpenses(7,
    2,
    3,
    4,
    5
    )