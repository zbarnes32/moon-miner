export class Upgrade {
    constructor(data){
        this.name = data.name
        this.picture = data.picture
        this.quantity = 0
        this.multiplier = data.multiplier || 0
        this.price = data.price
    }


}