import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'

function Chart (props: any) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={props.options}
      containerProps={{ className: props.className }}
    />
  )
}

const CustomHighchart = styled(Chart)`
  .highcharts-background {
    fill: transparent !important;
  }
`

export default CustomHighchart