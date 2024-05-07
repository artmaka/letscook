import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function AllReportList() {
    const navigate = useNavigate();
    const [cursorStyle, setCursorStyle] = useState('auto');
    const [reports, setReports] = useState([]);
    useEffect(() => {
        const sampleReports = [
            {
                id: 1,
                senderName: 'пупупу1',
                report: 'обкакал меня('
            },
            {
                id: 2,
                senderName: 'пупупу2',
                report: 'у хочу кушать'
            },
            {
                id: 3,
                senderName: 'пупупу3',
                report: 'пользователь меня критикует необоснованно'
            }
        ];
        setReports(sampleReports);
    }, []);

    const handleMouseLeave = () => {
        setCursorStyle('auto');
    };

    const handleMouseEnter = () => {
        setCursorStyle('pointer');
    };

    const handleDoReportClick = () => {
        navigate('/do-report');
    };

    return (
        <div>
            <h1>Жалобы</h1>
            {reports.map((report) => (
                <div
                    key={report.id}
                    className="report-block"
                    onClick={handleDoReportClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: cursorStyle }}
                >
                    <h2>Жалоба #{report.id}</h2>
                    <p><strong>Отправитель:</strong> {report.senderName}</p>
                    <p><strong>Жалоба:</strong> {report.report}</p>
                </div>
            ))}
        </div>
    );
}
