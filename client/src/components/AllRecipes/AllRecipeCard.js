export default function AllRecipeCard({recipes}) {
    return (
        <div className="recipe-card">
            <img src={recipes.img} alt="" />
            <div className="recipe-card-info">
                <h3 className="recipe-card-name">{recipes.name}</h3>
                <p className="recipe-card-category">Категория: <b>{recipes.category}</b></p>
                <p className="recipe-card-calories">Калорийность: <b>{recipes.calories}</b> ккал</p>
            </div>
        </div>
    )
}