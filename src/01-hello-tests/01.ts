export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}


export function SplitIntoWorlds(sentense: string) {
    const worlds = sentense.toLowerCase().split(" ")

    return worlds.filter(w => w !== "" && w !== "-")
        .map(w => w.replace('!', "")
            .replace(".", ""));
}
