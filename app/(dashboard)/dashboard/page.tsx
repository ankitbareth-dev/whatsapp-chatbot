import Cards from "@/components/Cards";
import ChartsContainer from "@/components/ChartsContainer";
import TopBar from "@/components/TopBar";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#0D1720] text-white p-4 md:p-6">
      <TopBar />
      <Cards />
      <ChartsContainer />
    </div>
  );
};

export default Dashboard;
