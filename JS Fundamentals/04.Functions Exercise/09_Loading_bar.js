function loadingBar(percent){
    let loading_bar = []
    let bars = percent / 10
    let dots = 10 - bars
    if (percent == 100){
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
        return
    }
    for (let i = 0; i < bars; i++){
        loading_bar.push('%')
    }
    for (let i = 0; i < dots; i++){
        loading_bar.push('.')
    }
    let result = `[${loading_bar.join('')}]`
    console.log(`${percent}% ${result}`)
    console.log('Still loading...')

}
loadingBar(90)