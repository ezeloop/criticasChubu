class Review {
    constructor(id, name, description, pathName, añoTitulo, critica, fechaVisualizacion, compania, calificacion) {
        this.id = id
        this.name = name
        this.description = description
        this.pathName = pathName
        this.añoTitulo = añoTitulo
        this.critica = critica
        this.fechaVisualizacion = fechaVisualizacion
        this.compania = compania
        this.calificacion = calificacion
    
    }
    
    getName() {
        return this.name
    }

    static fromJson(json) {
        return new Review(json.id, json.titulo, json.overview,json.añoTitulo, json.img, json.critica, json.fechaVisualizacion, json.compañia, json.calificacion)
    }

}

export default Review