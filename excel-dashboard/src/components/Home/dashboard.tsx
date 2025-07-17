import { useState } from "react";
import { UploadExlecFile } from "../excel/Upload Excel";
import { TableDisplay } from "../Display/Table";
import { BarChartDisplay } from "../Display/BarChartDisplay";
import { LineChartDisplay } from "../Display/LineChartDisplay";

const DisplayOptions = ['BarChart', "LineChart", "Table"];
export const Dashboard = () => {
    const [excelFile, setExcelFile] = useState<any[]>([]);
    const [selectedOption, setSelectedOption] = useState("BarChart");

    const renderd = () => {
        switch (selectedOption) {
            case "BarChart":
                return <BarChartDisplay data={excelFile} />;
            case "Table":
                return <TableDisplay data={excelFile} />
            case "LineChart":
                return <LineChartDisplay data={excelFile} />
            default:
                <p>Select Display</p>;
        }
    }
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-gray-900 py-8 px-4">
            <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
              Upload Your Excle
            </h1>

            <div className="flex justify-center mb-8">
                <UploadExlecFile Upload={setExcelFile} />
            </div>
            <div className="flex justify-center">
                <select
                    className="w-full max-w-2xl px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                   *: bg-white dark:bg-gray-900
                    text-gray-900 dark:text-white
                    focus:outline-none focus:border-blue-600
                    focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-600
                    shadow-sm transition"
                    onChange={(e) => { setSelectedOption(e.target.value) }}
                >
                    <option>Select </option>
                    {DisplayOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            {excelFile.length > 0 ? (
                <div className="space-y-12">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                            {selectedOption}
                        </h2>
                        {renderd()}
                    </section>
                </div>
            ) : (
                <p className="text-center text-gray-600 dark:text-gray-400">
                    Upload an Excel file to view data.
                </p>
            )}
        </div>
    );
};
