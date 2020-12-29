const data = {
    storages: [],
    get storage() {
        //return 'Myself Sanjivani Herwade '
        return this._storage
    }, 
    set storage(value) {
        //value = value.trim()
        this._storage = value.trim()
        this.storages.push(this._storage)
    }
}

data.storage = 'computer'
data.storage = 'laptop'
    //console.log(data)
    console.log(data)