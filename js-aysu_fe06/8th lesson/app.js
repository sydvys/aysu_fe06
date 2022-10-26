
function car(name, year, model) {
    this.name = name
    this.year = year
    this.model = model
    this.driving = () => {
        console.log(`${name} drives a ${year} ${model}`);
    }
}

const mel = new car('Mel', 2022, 'range rover')
mel.driving()