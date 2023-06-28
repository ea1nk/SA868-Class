const SerialPort = require('serialport');

class SA868 {
  constructor(serialPortPath) {
    this.serialPort = new SerialPort(serialPortPath, {
      baudRate: 9600,
      dataBits: 8,
      stopBits: 1,
      parity: 'none',
    });
  }

  connect() {
    this.serialPort.write('AT+DMOSETGROUP=0,145.8000,145.8000,0000,4,0000\r');
    this.serialPort.on('data', (data) => this.handleData(data));
    this.serialPort.on('error', (error) => this.handleError(error));
    this.serialPort.on('close', () => this.handleClose());
  }

  handleData(data) {
    const response = data.toString().trim();
    console.log('Received response:', response);

    // Parse and handle different response formats
    if (response.startsWith('+DMOCONNECT')) {
      // Handle handshake response
      const [, status] = response.split(':');
      console.log('Handshake response:', status);
    } else if (response.startsWith('S=')) {
      // Handle sweep response
      const [, result] = response.split('=');
      console.log('Sweep response:', result);
    } else if (response.startsWith('+DMOSETGROUP')) {
      // Handle set group response
      const [, status] = response.split(':');
      console.log('Set group response:', status);
    } else if (response.startsWith('+DMOSETVOLUME')) {
      // Handle set volume response
      const [, status] = response.split(':');
      console.log('Set volume response:', status);
    } else if (response.startsWith('RSSI:')) {
      // Handle read signal strength response
      const [, strength] = response.split(':');
      console.log('Signal strength:', strength);
    } else if (response.startsWith('+DMOSETFILTER')) {
      // Handle set filter response
      const [, status] = response.split(':');
      console.log('Set filter response:', status);
    }

    // Additional parsing and handling logic for other response formats
  }

  handleError(error) {
    console.error('Serial port error:', error);
  }

  handleClose() {
    console.log('Serial port closed.');
  }

  sendCommand(command) {
    this.serialPort.write(`AT${command}\r`);
  }
}

