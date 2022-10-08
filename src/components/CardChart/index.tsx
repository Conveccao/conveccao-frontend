import CustomHighchart from '../ChartDefault'
import {Container,TitleChart,ChartContainer,TitleContainer} from "./styles";
interface CardProps {
  options: Object
  title: string
}

export function ChartDefault({
  options,
  title
}: CardProps) {
  return (
    <Container>
      <TitleContainer>
        <TitleChart title={title}>{title}</TitleChart>
      </TitleContainer>
      <ChartContainer>
        <CustomHighchart options={options} />
      </ChartContainer>
    </Container>
  );
}