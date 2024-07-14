export const categorizeIngredients = (ingredients) => {
    if (!ingredients) {
        return {};
    }
    return ingredients.reduce((accumulator, ingredient) => {
        const { categoryName } = ingredient;
        if (!accumulator[categoryName]) {
            accumulator[categoryName] = [];
        }
        accumulator[categoryName].push(ingredient);
        return accumulator;
    }, {});
}