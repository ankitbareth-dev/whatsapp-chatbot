import BulkMessagesList from "./BulkMessagesList";
import BulkMessagesSearch from "./BulkMessagesSearch";
import BulkMessagesStats from "./BulkMessagesStats";
import BulkMessagesTabs from "./BulkMessagesTabs";
import BulkMessagesTopBar from "./BulkMessagesTopBar";

export default function BulkMessagesContainer() {
  return (
    <div className="w-full p-6 space-y-6 bg-[#0F1F2C] h-[calc(100vh-0px)]">
      {/* Top Bar */}
      <BulkMessagesTopBar />

      {/* Tabs */}
      <BulkMessagesTabs />

      {/* Stats */}
      <BulkMessagesStats />

      {/* Search + Dropdown */}
      <BulkMessagesSearch />

      {/* Contact List */}
      <BulkMessagesList />
    </div>
  );
}
