class Song{
    constructor(typeList, name, time){
        this.typeList = typeList
        this.name = name
        this.time = time
        this.print = () => {
            console.log(this.name)
        }
    }
}

function filterType(array){
    let amount = array.shift()
    let typeList = array.pop()
    for (let entry of array){
        let array_list = entry.split("_")
        let current_type = array_list[0]
        let name = array_list[1]
        let time = array_list[2]
        if ((current_type == typeList) || (typeList == 'all')){
            let song = new Song(typeList, name, time)
            song.print()
        }
    }
}

filterType([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

filterType([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']
        )

filterType([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )

