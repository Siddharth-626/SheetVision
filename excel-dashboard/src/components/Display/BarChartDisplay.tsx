
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export const BarChartDisplay = ({ data }: { data: any }) => {
    if (!data) return <p> No data found</p>
    const columns = Object.keys(data[0]);

    const [xKey, setXkey] = useState(columns[0]);
    const [yKey, setYkey] = useState(columns.find(key => typeof data[0][key] === "number") || columns[0])

    return (
        <div>
            <div className="flex space-x-4">
                <select
                    value={xKey}
                    onChange={(e) => setXkey(e.target.value)}
                    className="border p-2 rounded"
                >
                    {columns.map(col => (
                        <option key={col} value={col}>{col}</option>
                    ))}
                </select>

                <select
                    value={yKey}
                    onChange={(e) => setYkey(e.target.value)}
                    className="border p-2 rounded"
                >
                    {columns.map(col => (
                        <option key={col} value={col}>{col}</option>
                    ))}
                </select>
            </div>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xKey} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={yKey} fill="#3b82f6"></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}