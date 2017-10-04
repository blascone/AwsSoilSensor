# AwsSoilSensor
Runs the soil moisture sensor and send the measurements to the AWS IOT platform.

## Get Started
### Prerequisites
* Intel Edison board with node installed and wifi configured
* Soil sensor connected to the Edison board
* *thing* registered on AWS Iot platform with name **SoilSensor0**
(http://docs.aws.amazon.com/iot/latest/developerguide/register-device.html)
* **connect_device_package.zip** file of your newly created thing

### Setup
* connect to your Intel Edison board via ssh
* clone the project and go in the project folder
```
  $ git clone https://github.com/blascone/AwsSoilSensor.git
  $ cd AwsSoilSensor
```

* Unzip the **connect_device_package.zip** in the project folder
```
  $ mv ~/Downloads/connect_device_package.zip ~/AwsSoilSensor
  $ unzip connect_device_package.zip
  $ cp -r ./connect_device_package/* .
  $ rm -fr connect_device_package connect_device_package.zip
```

* Download the project's dependencies
```
  $ npm install
```

### Start

Run the following command replacing the dots with the host-name of your *thing*
```
  $ node aws-soilsensor.js --host-name= ......iot.eu-central-1.amazonaws.com --private-key=SoilSensor0.private.key --client-certificate=SoilSensor0.cert.pem --ca-certificate=root-CA.crt --client-id=SoilSensor0
```
