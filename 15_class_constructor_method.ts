class Movie {
    name: string;
    play_count: number;
    created_at: string;
    time: string;

    constructor(name, play_count) {
        this.name = name;
        this.play_count = play_count;
    }

    getName() {
        return this.name;
    }

    getPlayCount() {
        return this.play_count;
    }
}

let m = new Movie("oyhk", 12);
console.log(m.getName());
console.log(m.getPlayCount());
