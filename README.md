# AwsSoilSensor
retrieves values from the soil sensor and send them it to AWS IOT

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
```

* Download the project's dependencies
```
  $ npm install
```

### Start
