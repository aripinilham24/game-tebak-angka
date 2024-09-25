
export { GenerateSoal }

class GenerateSoal {
    constructor(min, max) {
        this.min = min
        this.max = max
    }
    getRandom() {
        let {min,max} = this
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}