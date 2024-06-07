export default function CategoryCard({category}){
    return(
        <div className="category-card">
            <img src={category.img} loading="lazy" alt="" />
            <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
            </div>
        </div>
    )
}