import React from "react";

const ModificationLog = () => {
  const data = [
    {
      date: "29 Oct",
      action: "Layout Updated",
      by: "User",
      description: "Added crystal section",
    },
    {
      date: "30 Oct",
      action: "Content Revised",
      by: "Bot",
      description: "Simplified daily horoscope",
    },
    {
      date: "31 Oct",
      action: "Text Modified",
      by: "User",
      description: "Changed color theme",
    },
    {
      date: "01 Nov",
      action: "Final Review",
      by: "Bot",
      description: "Approved final version",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-5  mt-2 ">
      <h2 className="text-lg font-bold text-black mb-4 ">
        Modification Log
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-sm text-gray-600">
              <th className="py-3 px-4  font-medium">Date</th>
              <th className="py-3 px-4  font-medium">Action</th>
              <th className="py-3 px-4  font-medium">By</th>
              <th className="py-3 px-4  font-medium">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 text-sm text-gray-700 text-center"
              >
                <td className="py-3 px-4 ">{item.date}</td>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {item.action}
                </td>
                <td className="py-3 px-4">{item.by}</td>
                <td className="py-3 px-4 text-gray-500">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModificationLog;
