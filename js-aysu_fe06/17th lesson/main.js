// class vehicle {
//     constructor(fuel , wheelCount, landOrAir){
//         this.fuel = fuel
//         this.wheelCount = wheelCount
//         this.landOrAir = landOrAir
//     }
// }

// class newVehical extends vehicle {
//     constructor(model, country, fuel, wheelCount, landOrAir){
//         super(fuel, wheelCount, landOrAir)
//         this.model = model
//         this.country = country
//     }
// }

// const car1 = new newVehical('pick up', 'china', 18, 4, true )
// const car2 = new newVehical('range', 'mrca', 18, 4, true )
// console.log(car1);
// console.log(car2);

const jsonText = {
    "name": "Jane Doe",
    "favorite-game": "Stardew Valley",
    "subscriber": false
  }
  
  console.log(JSON.stringify(jsonText));


  