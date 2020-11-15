class Movie {
    constructor(id, name, description, pathName) {
        this.id = id
        this.name = name
        this.description = description
        this.pathName = pathName
    
    }
    
    getName() {
        return this.name
    }

    static fromJson(json) {
        return new Movie(json.id, json.name, json.overview, json.poster_path)
    }

}

export default Movie