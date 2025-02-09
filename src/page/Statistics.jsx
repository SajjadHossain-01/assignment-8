import useTitle from "../component/useTitle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Statistics = () => {
  useTitle("Statistics");
  const data = [
    { name: "Watchs", uv: 400, pv: 2400, amt: 2400 },
    { name: "Laptops", uv: 250, pv: 2400, amt: 2400 },
    { name: "Phones", uv: 300, pv: 2400, amt: 2400 },
    { name: "Acsesoriss", uv: 350, pv: 2400, amt: 2400 },
    { name: "Headphone", uv: 180, pv: 2400, amt: 2400 },
  ];

  return (
    <div className="mt-10 lg:w-7xl m-auto ">
      <div className="flex items-center justify-center">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          {/* <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "100px",
            }}
          /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={80} />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
