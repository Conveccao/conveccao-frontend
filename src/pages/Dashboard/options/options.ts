export default class Options {

    private _measuresList: number[]
    private _stationName: string
    private _parameterName: string
    private _parameterUnit: string
    private _measureType: string
    public options: object

    constructor(measuresList: number[], stationName: string, parameterName: string, parameterUnit: string, measureType: string) {
        this._measuresList = measuresList; 
        this._stationName = stationName;   
        this._parameterName = parameterName
        this._parameterUnit = parameterUnit
        this._measureType = measureType
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
                text: `Medidas do ${this._parameterName} de ${this._stationName}`,
              },
              subtitle: {
                text: "Source: Convecção",
              },
              xAxis: {
                categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              },
              yAxis: {
                title: {
                  text: `${this._measureType} (${this._parameterUnit})`,
                },
              },
        }
    }
}