## Cal-Heatmap packaged for Meteor
Cal-Heatmap is an excelent javascript module to create a calendar heatmap.
![example](https://cloud.githubusercontent.com/assets/4264640/13897511/9b01b31a-edbb-11e5-8a86-b7b92d207d59.png)

Cal-Heatmap is based on D3JS so installing this package will take care of getting the correspondin d3js package too.

## Installation

```
meteor add mariuspop:cal-heatmap
```

## Usage
After installation, initialize the plugin in Blaze templates ```.onRendered```:
``` javascript
var cal = new CalHeatMap();
cal.init({});
```

## Official documentation

Great documentation to be found [here](http://cal-heatmap.com).
