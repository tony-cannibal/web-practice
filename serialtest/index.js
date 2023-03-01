const { SerialPort } = require('serialport')

// SerialPort.list().then(ports => {
//             console.log("OK");
//    },
//    err => {
//       console.log(err);
//    });

SerialPort.list()
  .then((ports) => {
    console.log(ports, "s") // returns [] s
  })
  .catch(err => console.log(err, "e"))
