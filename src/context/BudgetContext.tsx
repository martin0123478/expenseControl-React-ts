import { useReducer, createContext, ReactNode } from "react"
import { BudgetAction, BudgetState, budgetReducer, initialState } from "../reducers/budget-recducer"

type BudgetContextProp = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetAction>
}

type BudgetProviderProp = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProp>({} as BudgetContextProp)

export const BudgetProvider = ({ children }: BudgetProviderProp) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}>
            {children}
        </BudgetContext.Provider>
    )
}