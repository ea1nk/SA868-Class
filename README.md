# Simple SA868 Class
2023 - SCQ Devices / EA1NK
SA868 V-UHF Module NodeJS Class

### Description:
Simple class in NodeJS to control a SA868 based V/UHF module.
The provided code initializes the module to 145.800 (APRS EU frequency) and high power

### Usage:
```
const SA868 = require ("./sa868.js")
const device = new SA868('/dev/ttyUSB0'); //Change serial port to your configuration
device.connect();
device.sendCommand('+DMOCONNECT');
device.sendCommand('S+455.2250');
```
