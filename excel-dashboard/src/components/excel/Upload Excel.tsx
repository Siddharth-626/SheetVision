import { useRef } from "react"
import * as XLSX from "xlsx";

export const UploadExlecFile = ({ Upload }: { Upload: (data: any[]) => void }) => {
    const fileRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const arrayBuffer = evt.target?.result;
            const wd = XLSX.read(arrayBuffer, {type: "array"});
            const wsname = wd.SheetNames[0];
            const ws = wd.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);

            Upload(data);
        }
        reader.readAsArrayBuffer(file);
    }
    return (
        <div>
            <label onClick={() => fileRef.current?.click()} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg cursor-pointer transition">
                Upload File
            </label>
            <input ref={fileRef} onChange={handleFileUpload} type="file" accept=".xlsx, .csv" className="hidden" />
        </div>
    )
}