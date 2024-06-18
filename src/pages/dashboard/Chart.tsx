import {
  Axis,
  buildChartTheme,
  LineSeries,
  Tooltip,
  XYChart,
} from "@visx/xychart";
import { styled } from "styled-components";

type Value = {
  date: string;
  y: Array<{ value: number | string; key: string }>;
};

type Props = {
  title: string;
  kind?: string;
  domain?: Array<number | string>;
  values: Array<Value>;
  focused: boolean;
};

const theme = buildChartTheme({
  backgroundColor: "white",
  colors: [],
  tickLength: 1,
  gridColor: "white",
  gridColorDark: "white",
  svgLabelSmall: {
    fontFamily: "",
    fontSize: "1em",
  },
});

const Chart = ({ values, kind, title, domain, focused }: Props) => (
  <Container focused={focused}>
    <h4>{title}</h4>
    <XYChart
      height={250}
      width={250}
      xScale={{ type: "time" }}
      yScale={domain ? { type: "band", domain } : { type: "linear" }}
      theme={theme}
    >
      {values[0].y.map((_, idx) => (
        <LineSeries
          dataKey={`primary_line_${idx}`}
          yAccessor={(data: Value) => data.y[idx].value}
          xAccessor={(data: Value) => new Date(data.date).valueOf()}
          data={values}
        />
      ))}
      <Axis orientation="left" numTicks={4} />
      <Axis orientation="bottom" numTicks={4} />
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showSeriesGlyphs
        renderTooltip={({ tooltipData }) => {
          const datum = tooltipData?.datumByKey.primary_line_0
            ?.datum as unknown as Value;
          if (!datum) {
            return;
          }

          const date = new Date(datum.date);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });

          return (
            <div>
              <p>{formattedDate}</p>
              {datum.y.map((y) => (
                <p>
                  {y.key}: {y.value}
                </p>
              ))}
            </div>
          );
        }}
      />
    </XYChart>
  </Container>
);

const Container = styled.div<{ focused: boolean }>`
  ${props => props.focused ? 'border: 1px solid black' : ''}
`;

export default Chart;
