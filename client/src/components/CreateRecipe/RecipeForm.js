import React, { useState } from 'react';

export default function RecipeForm() {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [calories, setCalories] = useState('');
    const [process, setProcess] = useState('');
    const [recipeImage, setRecipeImage] = useState(null);

    const handleNameChange = (event) => {
        setRecipeName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    };

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value);
    };

    const handleProcessChange = (event) => {
        setProcess(event.target.value);
    };

    const handleImageChange = (event) => {
        setRecipeImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('recipeName', recipeName);
        formData.append('description', description);
        formData.append('ingredients', ingredients);
        formData.append('calories', calories);
        formData.append('process', process);
        formData.append('recipeImage', recipeImage);

    };

    return (
        <div className='form'>
            <h1>Форма создания рецепта</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='create-recipe-name'>Имя рецепта:</label>
                    <input
                        type="text"
                        value={recipeName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label className='create-recipe-name'>Описание:</label>
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                </div>
                <div>
                    <label className='create-recipe-name'>Ингредиенты:</label>
                    <textarea
                        value={ingredients}
                        onChange={handleIngredientsChange}
                        required
                    />
                </div>
                <div>
                    <label className='create-recipe-name'>Калории:</label>
                    <input
                        type="number"
                        value={calories}
                        onChange={handleCaloriesChange}
                        required
                    />
                </div>
                <div>
                    <label className='create-recipe-name'>Процесс приготовления:</label>
                    <textarea
                        value={process}
                        onChange={handleProcessChange}
                        required
                    />
                </div>
                <div>
                    <label className='create-recipe-name'>Изображение:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button className='btn-create-recipe' type="submit">Создать рецепт</button>
            </form>
        </div>
    );
}
