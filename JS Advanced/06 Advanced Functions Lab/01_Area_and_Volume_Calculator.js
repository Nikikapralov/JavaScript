function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

function solve(area, vol, input) {
    let resultArray = []
    let inputParsed = JSON.parse(input)
    for (let object of inputParsed){
        object.vol = vol
        object.area = area
        let areaResult = object.area()
        let volumeResult = object.vol()
        let resultObject = {
            area: areaResult,
            volume: volumeResult
        }
        resultArray.push(resultObject)
    }
    return resultArray
}



solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')
