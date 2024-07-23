import Stats from "./components/Stats";
import Chart from "./components/Chart";
import Featured from "./components/Featured";
import Table from "./components/Table";


export default function Home() {
  return (
      <div className="px-6">
        <Stats/>
        <div className="flex justify-between mb-6">
          <Featured/>
          <Chart/>
        </div>
        <div>
          <Table/>
        </div>
     </div>
  );
}
