export default class Options {

    private _measuresList: number[]
    private _stationName: string
    public options: object

    constructor(measuresList: number[], stationName: string) {
        this._measuresList = measuresList; 
        this._stationName = stationName;   
        this.options = {
            chart: {
                type: "spline",
              },
              series: [
                {
                  data: this._measuresList,
                },
              ],
              title: {
                text: `Medidas do pluviômetro de ${this._stationName}`,
              },
              subtitle: {
                text: "Source: Convecção",
              },
              xAxis: {
                categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              },
              yAxis: {
                title: {
                  text: "Temperature (°C)",
                },
              },
        }
    }
}