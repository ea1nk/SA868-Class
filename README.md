# Simple SA868 Class
2023 - SCQ Devices / EA1NK
SA868 V-UHF Module NodeJS Class

### Usage:
```
const SA868 = require ("./sa868.js")
const device = new SA868('/dev/ttyUSB0'); //Change serial port to your configuration
device.connect();
device.sendCommand('+DMOCONNECT');
device.sendCommand('S+455.2250');
```
