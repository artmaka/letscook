import RecipeCard from "./RecipeCard"

export default function ResipeSection(){
    const recipes = [
        {
            name: "Классические мясные фрикадельки",
            img: "img/recipe-img/img_1.jpg",
            category: "Основное",
            calories: "251",
        },
        {
            name: "Гуакамоле с орешками и томатами",
            img: "img/recipe-img/img_2.jpg",
            category: "Закуски",
            calories: "378",
        },
        {
            name: "Манная каша со свежими фруктами",
            img: "img/recipe-img/img_3.jpg",
            category: "Завтрак",
            calories: "274",
        },
        {
            name: "Овощной салат с томатами и сыром фета",
            img: "img/recipe-img/img_4.jpg",
            category: "Закуски",
            calories: "146",
        }
    ]
    

    return(
        <div className="section recipes">
            <h1 className="title">Свежие рецепты</h1>
            <div className="recipe-container">
            {recipes.map(recipes => <RecipeCard key={recipes.name} recipes={recipes}/>)}
            </div>
        </div>
    )
}