import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
    const categories = [
        {
            name: "Закуски",
            img: "img/category-img/img_1.jpg",
        },
        {
            name: "Основные блюда",
            img: "img/category-img/img_2.jpg",
        },
        {
            name: "Завтрак",
            img: "img/category-img/img_3.jpg",
        },
        {
            name: "Десерты",
            img: "img/category-img/img_4.jpg",
        },
        {
            name: "Салаты",
            img: "img/category-img/img_5.jpg",
        },
        {
            name: "Супы",
            img: "img/category-img/img_6.jpg",
        },
        {
            name: "Выпечка",
            img: "img/category-img/img_7.jpg",
        },
        {
            name: "Напитки",
            img: "img/category-img/img_8.jpg",
        },
    ];

    return (
        <div className="section category">
            <h1 className="title">Категории</h1>
            <div className="category-container">
                {categories.map(category => (
                    <Link to="/all-recipes" key={category.name}>
                        <CategoryCard category={category} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
