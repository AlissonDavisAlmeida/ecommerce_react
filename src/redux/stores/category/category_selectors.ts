export const selectCategoriesMap = (state: any) => {
    return state.category.categories.reduce((acc: any, doc: any) => {
    const { title, items } = doc
    acc[title.toLowerCase()] = items
    return acc
}, {}) }