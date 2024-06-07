import React, { useState } from 'react';

export default function CreateCategoryForm() {
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState(null);

    const handleNameChange = (event) => {
        setCategoryName(event.target.value);
    };

    const handleImageChange = (event) => {
        setCategoryImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('categoryName', categoryName);
        formData.append('categoryImage', categoryImage);
    };

    return (
        <div className='form'>
            <h1 className="category-form">Создание категории</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="name">Имя категории:</label>
                    <input className='input-field'
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        value={categoryName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label className="name">Изображение категории:</label>
                    <input className='input-field'
                        type="file"
                        id="categoryImage"
                        name="categoryImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <button className='btn-form'>Создать категорию</button>
            </form>
        </div>
    );
}
