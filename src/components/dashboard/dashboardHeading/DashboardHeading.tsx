const DashboardHeading = ({ headingName }: { headingName: string }) => {
  return (
    <div className="bg-white w-full h-[70px] shadow-sm border border-gray-200 rounded-md">
      <h2 className="text-xl md:text-2xl primary_text_color font-semibold my-5 mx-6 ">
        {headingName}
      </h2>
    </div>
  );
};

export default DashboardHeading;
