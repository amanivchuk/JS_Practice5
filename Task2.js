var car = {
  model : "Lada",
  speed : 150,
  run : function () {
      console.log(car.model + " едет со скоростью " + car.speed);
  },
    stop : function () {
        console.log(car.model + " остановилась");
    }
};

car.run();
car.stop();