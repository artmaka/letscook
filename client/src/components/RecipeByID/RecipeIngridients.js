export default function RecipeIngredients() {
    const ingredientsData = [
        { id: 1889, title: 'тёмный шоколад', amount: 300.0, unit: 'г' },
        { id: 2141, title: 'сливочное масло', amount: 0.5, unit: 'шт.' },
        { id: 1768, title: 'коричневый сахар', amount: 1.0, unit: 'банка' },
        { id: 2357, title: 'куриное яйцо', amount: 2.0, unit: 'зубчик' },
        { id: 2841, title: 'пшеничная мука', amount: 5.0, unit: 'г' },
        { id: 13, title: 'грецкие орехи', amount: 1.0, unit: 'ч. л.' },
    ];
        
    return (
        <div class="content-box__content">
            <div id="recipe_ingredients_block">
                <div className="field-row recipe_ingredients">
                    <div className="section-title title title_sans-serif title_small">Основные ингредиенты</div>
                    {ingredientsData.map(ingredient => (
                        <Ingredient key={ingredient.id} ingredient={ingredient} />
                    ))}
                </div>
                <div className="plain-text"></div>
            </div>
        </div>
    );
}

function Ingredient({ ingredient }) {
    const { id, title, amount, unit } = ingredient;

    return (
        <table className="definition-list-table">
            <tbody>
                <tr className="definition-list-table__tr">
                    <td className="definition-list-table__td definition-list-table__td_name">
                        <div>
                            <label className="checkbox">
                                <input
                                    className="checkbox__input recipe_ingredient_checkbox"
                                    data-amount={amount}
                                    data-element="Основные"
                                    data-ingredient-id={id}
                                    data-intredient-title={title}
                                    data-unit-id={unit}
                                    data-unit-title={unit}
                                    name="name"
                                    type="checkbox"
                                    value="1"
                                />
                                <span>
                                    <span className="recipe_ingredient_title">{title}</span>
                                </span>
                            </label>
                        </div>
                    </td>
                    <td className="definition-list-table__td definition-list-table__td_value">{amount} {unit}</td>
                    <input type="hidden" name={`ingredient_${id}_amount`} id={`ingredient_${id}_amount`} value={amount} data-declensions={`["${unit}","${unit}","${unit}"]`} />
                </tr>
            </tbody>
        </table>
    );
}