import * as d3 from "d3";
import {Arc, DefaultArcObject, ScaleLinear} from "d3";
import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
  encapsulation: ViewEncapsulation.None  //No view encapsulation for D3 components
})
export class GaugeComponent implements OnInit {
  @ViewChild('chartContainer', {static: true})
  chartContainer!: ElementRef;
  gaugemap: any = {};

  constructor() {
  }

  ngOnInit(): void {
    const diameter = 860;
    const radius = diameter / 2;
    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', diameter)
      .attr('height', diameter)
      .append('g')
      .attr('transform', `translate(${radius}, ${radius})`);
    this.draw();
  }

  draw() {
    var self = this;
    var gauge = function (container: any, configuration: any) {

      var config: any = {
        size: 710,
        clipWidth: 200,
        clipHeight: 110,
        ringInset: 20,
        ringWidth: 20,

        pointerWidth: 10,
        pointerTailLength: 5,
        pointerHeadLengthPercent: 0.9,

        minValue: 0,
        maxValue: 10,

        minAngle: -90,
        maxAngle: 90,

        transitionMs: 750,

        majorTicks: 5,
        labelFormat: d3.format('d'),
        labelInset: 10,

        arcColorFn: d3.interpolateHsl(d3.rgb('#e8e2ca'), d3.rgb('#3e6c0a'))
      };
      let range: number;
      let r: number;
      let pointerHeadLength: number;
      let value = 0;

      let svg: d3.Selection<any, unknown, null, undefined>;
      let arc: Arc<any, DefaultArcObject>;
      let scale: ScaleLinear<number, number, never>;
      let ticks: number[];
      let tickData: number[];
      let pointer: d3.Selection<SVGPathElement, number[][], null, undefined>;

      const donut = d3.pie();

      function deg2rad(deg: number) {
        return deg * Math.PI / 180;
      }

      function newAngle(d: number) {
        var ratio = scale(d);
        var newAngle = config.minAngle + (ratio * range);
        return newAngle;
      }

      function configure(configuration: string[]) {
        var prop = undefined;
        for (prop in configuration) {
          config[prop] = configuration[prop];
        }

        range = config.maxAngle - config.minAngle;
        r = config.size / 2;
        pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);

        // a linear scale this.gaugemap maps domain values to a percent from 0..1
        scale = d3.scaleLinear()
          .range([0, 1])
          .domain([config.minValue, config.maxValue]);

        ticks = scale.ticks(config.majorTicks);
        tickData = d3.range(config.majorTicks).map(function () {
          return 1 / config.majorTicks;
        });

        arc = d3.arc()
          .innerRadius(r - config.ringWidth - config.ringInset)
          .outerRadius(r - config.ringInset)
          .startAngle(3)
          .endAngle(2 * 2.5); // https://www.geeksforgeeks.org/d3-js-arc-startangle-function/
      }

      self.gaugemap.configure = configure;

      function centerTranslation() {
        return 'translate(' + r + ',' + r + ')';
      }

      function isRendered() {
        return (svg !== undefined);
      }

      self.gaugemap.isRendered = isRendered;

      function render(newValue: number) {
        svg = d3.select(container)
          .append('svg:svg')
          .attr('class', 'gauge')
          .attr('width', config.clipWidth)
          .attr('height', config.clipHeight);

        var centerTx = centerTranslation();

        var arcs = svg.append('g')
          .attr('class', 'arc')
          .attr('transform', centerTx);

        arcs.selectAll('path')
          .data(tickData)
          .enter().append('path')
          .attr('fill', function (d, i) {
            return config.arcColorFn(d * i);
          })
          .attr('d', arc.toString);

        var lg = svg.append('g')
          .attr('class', 'label')
          .attr('transform', centerTx);
        lg.selectAll('text')
          .data(ticks)
          .enter().append('text')
          .attr('transform', function (d) {
            var ratio = scale(d);
            var newAngle = config.minAngle + (ratio * range);
            return 'rotate(' + newAngle + ') translate(0,' + (config.labelInset - r) + ')';
          })
          .text(config.labelFormat);

        var lineData = [[config.pointerWidth / 2, 0],
          [0, -pointerHeadLength],
          [-(config.pointerWidth / 2), 0],
          [0, config.pointerTailLength],
          [config.pointerWidth / 2, 0]];
        var pointerLine = d3.line().curve(d3.curveLinear)
        var pg = svg.append('g').data([lineData])
          .attr('class', 'pointer')
          .attr('transform', centerTx);

        pointer = pg.append('path')
          .attr('d', pointerLine.toString/*function(d) { return pointerLine(d) +'Z';}*/)
          .attr('transform', 'rotate(' + config.minAngle + ')');

        update(newValue, null);
      }

      self.gaugemap.render = render;

      function update(newValue: number, newConfiguration?: any) {
        if (newConfiguration !== undefined) {
          configure(newConfiguration);
        }
        var ratio = scale(newValue);
        var newAngle = config.minAngle + (ratio * range);
        pointer.transition()
          .duration(config.transitionMs)
          .ease(d3.easeElastic)
          .attr('transform', 'rotate(' + newAngle + ')');
      }

      self.gaugemap.update = update;

      configure(configuration);

      return self.gaugemap;
    };

    var powerGauge = gauge('#power-gauge', {
      size: 300,
      clipWidth: 300,
      clipHeight: 300,
      ringWidth: 60,
      maxValue: 10,
      transitionMs: 4000,
    });
    powerGauge.render(6);

  }
}
