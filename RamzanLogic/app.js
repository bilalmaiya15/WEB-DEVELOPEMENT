let startRamzan = new Date("november 26, 2025");
let upcomingRamzan = new Date("march 17, 2026");
console.log(Math.round(upcomingRamzan.getTime() / 1000 / 60 / 60 / 24) - Math.round(startRamzan.getTime() / 1000 / 60 / 60 / 24));