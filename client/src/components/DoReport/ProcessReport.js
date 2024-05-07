import React, { useState } from 'react';

export default function ProcessReport({ report }) {
    const [processing, setProcessing] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const handleProcessReport = () => {
        
        setProcessing(true);
        
    };

    const handleDeleteReport = () => {
        
        setDeleted(true);
        
    };

    return (
        <div>
            <h1>Обработка жалобы</h1>
            <div className='btn-form'>
                <h2>Жалоба пользователя:</h2>
                <p>{report}</p>
            </div>
            <div>
                <button className='btn-do-report' onClick={handleProcessReport} disabled={processing || deleted}>
                    {processing ? 'Обрабатывается...' : 'Обработать жалобу'}
                </button>
                <button className='btn-delete-report' onClick={handleDeleteReport} disabled={processing || deleted}>
                    {deleted ? 'Жалоба удалена' : 'Удалить жалобу'}
                </button>
            </div>
        </div>
    );
}
