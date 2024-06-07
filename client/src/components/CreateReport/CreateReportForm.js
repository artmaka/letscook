import React, { useState } from 'react';

export default function CreateReportForm() {
    const [reason, setReason] = useState('');

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('reason', reason);

    };

    return (
        <div className='form'>
            <h1 className="category-form">Создание жалобы</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="name">Причина:</label>
                    <input className='textarea-field'
                        type="text"
                        id="reason"
                        name="reason"
                        value={reason}
                        onChange={handleReasonChange}
                        required
                    />
                </div>
                <button className='btn-form'>Отправить жалобу</button>
            </form>
        </div>
    );
}
