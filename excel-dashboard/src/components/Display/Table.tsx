

export const TableDisplay = ({ data }: { data: any[] }) => {
    if (!data) return

    const headers = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-500 w-full">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="border dark:text-white border-gray-500 px-4 py-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx}>
                            {headers.map((header) => (
                                <td key={header} className="border dark:text-white border-gray-500 px-4 py-2">{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}