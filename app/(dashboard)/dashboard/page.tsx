import Cards from "@/components/Cards";
import ChartsContainer from "@/components/ChartsContainer";
import TopBar from "@/components/TopBar";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#0D1720] text-white px-3 sm:px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <TopBar />

        <Cards />

        <ChartsContainer />
      </div>
    </div>
  );
};

export default Dashboard;
