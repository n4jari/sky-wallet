import HistoryTable from "./HistoryTable";
import HistorySearch from "./HistorySearch";
import HistoryFilter from "./HistoryFilter";

const History = () => {
  return (
    <div className="card">
      <div className="relative w-full shadow-sm">
        <div className="flex justify-between items-center max-lg:flex-col gap-4">
          {/* SHOW IN MAX LARGE SCREEN  */}
          <p className="hidden max-lg:block sticky top-0 bg-white dark:bg-slate-800 text-lg font-bold text-gray-700 dark:text-gray-300">
            Transaction History
          </p>
          <HistorySearch />
          {/* SHOW IN MAX X-LARGE SCREEN  */}
          <p className="block max-lg:hidden sticky top-0 bg-white dark:bg-slate-800 text-lg font-bold text-gray-700 dark:text-gray-300">
            Transaction History
          </p>
          <HistoryFilter />
        </div>
        <div className="min-h-60 max-h-96 overflow-auto mt-6">
          <HistoryTable />
        </div>
      </div>
    </div>
  );
};

export default History;
