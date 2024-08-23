import React from 'react'
import { categories } from '../data/categories'
import { useBudget } from '../Hooks/useBudget'

export const FilterByCategory = () => {
    const { dispatch } = useBudget()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'add-filter-category', payload: { id: e.target.value } })
    }


    return (
        <div className='bg-white shadow-lg rounded-lg p-10'>
            <form>
                <div className='flex flex-col md:flex-row md:items-center gap-5'>
                    <label htmlFor="category">Filtrar gastos</label>
                    <select name="" id="category"
                        onChange={handleChange}
                        className='bg-slate-100 p-3 flex-1 '>
                        <option value="">--Todas las Categorias--</option>
                        {categories.map(category => (
                            <option value={category.id}
                                key={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

            </form>

        </div>
    )
}
