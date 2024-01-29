import {Component, OnInit} from '@angular/core';
import {NgxGaugeModule} from "ngx-gauge";
import {NgxGaugeType} from "ngx-gauge/gauge/gauge";

@Component({
  selector: 'app-gauge-x',
  templateUrl: './gauge-x.component.html',
  styleUrls: ['./gauge-x.component.scss'],
  standalone: true,
  imports: [NgxGaugeModule]
})
export class GaugeXComponent implements OnInit {

  gaugeType: NgxGaugeType = "semi";
  gaugeValue = 18.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  thick = 10;
  thresholdConfig = {
    "0": {
      "color": "green",
      "bgOpacity": 0.2
    },
    "40": {
      "color": "orange",
      "bgOpacity": 0.2
    },
    "75.5": {
      "color": "red",
      "bgOpacity": 0.2
    }
  };
  markerConfig = {
    "30": {
      "color": "#555",
      "size": 8,
      "label": "30",
      "type": "line"
    },
    "70": {
      "color": "#555",
      "size": 8,
      "label": "60",
      "type": "line"
    },
    "100": {
      "color": "#555",
      "size": 8,
      "label": "100",
      "type": "line"
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
