export interface IPokemon {
    name: string,
    abilities: {
        ability: {
            name: string
        }
    }[],
    sprites: {
        front_default: string
    }
}
