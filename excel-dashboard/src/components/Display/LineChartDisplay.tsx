
import { useState } from "react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid } from "recharts";


export const LineChartDisplay = ({ data }: { data: any }) => {
    const colums = Object.keys(data[0]);

    const [xKey, setXkey] = useState(colums[0]);
    const [yKey, setYkey] = useState(colums.find(key => typeof data[0][key] === "number") || colums[0])

    return (
        <div className="space-y-4">
            <div className="flex space-x-4">
                <label className="">X axis Value</label>
                <select onChange={(e) => setXkey(e.target.value)} className="border p-2 rounded">
                    {colums.map((col) => (
                        <option key={col} value={col}>{col}</option>
                    ))}
                </select>
                <select onChange={(e) => setYkey(e.target.value)} className="border p-2 rounded">
                    {colums.map((col) => (
                        <option key={col} value={col}>{col}</option>
                    ))}
                </select>
            </div>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xKey} />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey={yKey}
                        stroke="#3b82f6"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}