'use strict';

var Cylon = require('cylon');
var awsIot = require('aws-iot-device-sdk');
var fs = require('fs');

var args = require('minimist')(process.argv.slice(2));
//console.log(argv);

var privateKey = fs.readFileSync(args['private-key']);
var clientCertificate = fs.readFileSync(args['client-certificate']);
var caCertificate = fs.readFileSync(args['ca-certificate']);



var device = awsIot.device({
    keyPath: args['private-key'],
    certPath: args['client-certificate'],
    caPath: args['ca-certificate'],
    clientId: args['client-id'],
    host: args['host-name']
});



device
    .on('connect', function() {
        console.log('connect');
        device.subscribe('topic_1');
        device.publish('topic_2', JSON.stringify({
            test_data: 1
        }));
    });

device
    .on('message', function(topic, payload) {
        console.log('message', topic, payload.toString());
    });



Cylon.robot({

    connections: {
        edison: {
            adaptor: 'intel-iot'
        }
    },

    devices: {
        soilSensorPin0: {
            driver: 'analog-sensor',
            pin: 0
        }
    },

    work: function(my) {

        var soilMoisture0 = 0;
        var voltage = 0;
        var temperature = 0;

        every((5).seconds(), function() {
            soilMoisture0 = my.soilSensorPin0.analogRead();
            console.log(new Date().toLocaleString() + " ==>  " + soilMoisture0);
            device.publish('value', JSON.stringify({id:"soilSensor0",value: soilMoisture0 , date: new Date()}));
        });
    }
}).start();
