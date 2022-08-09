import { createSelector } from "reselect"

const selectCategoryReducer = (state: any) => state.category

export const selectCategories = createSelector([selectCategoryReducer], (categorySlice) => categorySlice.categories)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc: any, doc: any) => {
        const { title, items } = doc
        acc[title.toLowerCase()] = items
        return acc
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.isLoading
)