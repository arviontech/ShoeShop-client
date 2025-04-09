import atcLogo from "@/asset/ATC-Logo-white.png";

const DashboardFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t">
      <div className="flex items-center justify-end px-4 py-2">
        <h1 className="text-sm text-gray-500">Developed by ATC Tech Ltd.</h1>
        <img src={atcLogo} alt="ATC Logo" className="w-20 object-cover -ml-3" />
      </div>
    </footer>
  );
};

export default DashboardFooter;
