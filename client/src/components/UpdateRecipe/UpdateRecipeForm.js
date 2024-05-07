import React, { useState, useEffect } from 'react';

export default function UpdateRecipeForm({ recipe }) {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [calories, setCalories] = useState('');
    const [process, setProcess] = useState('');
    const [recipeImage, setRecipeImage] = useState(null);

    useEffect(() => {
        if (recipe) {
            setRecipeName(recipe.recipeName);
            setDescription(recipe.description);
            setIngredients(recipe.ingredients);
            setCalories(recipe.calories);
            setProcess(recipe.process);
        }
    }, [recipe]);

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

        // eslint-disable-next-line
        const updatedRecipe = {
            recipeName: recipeName,
            description: description,
            ingredients: ingredients,
            calories: calories,
            process: process,
            recipeImage: recipeImage
        };
    };

    return (
        <div className='form'>
            <h1>Форма обновления рецепта</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='update-recipe-name'>Имя рецепта:</label>
                    <input
                        type="text"
                        value={recipeName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label className='update-recipe-name'>Описание:</label>
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                </div>
                <div>
                    <label className='update-recipe-name'>Ингредиенты:</label>
                    <textarea
                        value={ingredients}
                        onChange={handleIngredientsChange}
                        required
                    />
                </div>
                <div>
                    <label className='update-recipe-name'>Калории:</label>
                    <input
                        type="number"
                        value={calories}
                        onChange={handleCaloriesChange}
                        required
                    />
                </div>
                <div>
                    <label className='update-recipe-name'>Процесс приготовления:</label>
                    <textarea
                        value={process}
                        onChange={handleProcessChange}
                        required
                    />
                </div>
                <div>
                    <label className='update-recipe-name'>Изображение:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button className='btn-update-recipe' type="submit">Обновить рецепт</button>
            </form>
        </div>
    );
}
