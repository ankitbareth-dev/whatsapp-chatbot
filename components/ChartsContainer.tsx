import MessageTrendsChart from "./MessageTrendsChart";
import ResponseAnalyticsChart from "./ResponseAnalyticsChart";

export default function ChartsContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
      <div className="lg:col-span-2">
        <MessageTrendsChart />
      </div>
      <div>
        <ResponseAnalyticsChart />
      </div>
    </div>
  );
}
