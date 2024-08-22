import { useReducer, createContext, ReactNode, useMemo } from "react"
import { BudgetAction, BudgetState, budgetReducer, initialState } from "../reducers/budget-recducer"

type BudgetContextProp = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetAction>,
    totalExpenses: number,
    expensesRemaining: number
}

type BudgetProviderProp = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProp>({} as BudgetContextProp)

export const BudgetProvider = ({ children }: BudgetProviderProp) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const expensesRemaining = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                expensesRemaining
            }}>
            {children}
        </BudgetContext.Provider>
    )
}