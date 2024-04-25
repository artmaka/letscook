export default function ImproveSkills() {
    const list = [
        "Выучи новые рецепты",
        "Экспериментируй с едой",
        "Создай свой уникальный рецепт",
        "Следи за рационом",
        "Делись мнением в комментариях",
    ]
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="img/img_10.jpg" alt=""/>
            </div>
            <div className="col typography">
                <h1 className="title">Прокачай свои кулинарные навыки</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Регистрация</button>
            </div>
        </div>
    )
}