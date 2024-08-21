import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../data/categories"
import {
    LeadingActions,
    SwipeableListItem,
    SwipeableList,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

type ExpenseDetailProp = {
    expense: Expense
}
export default function ExpenseDetail({ expense }: ExpenseDetailProp) {
    const expenseInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => { }}>
                Actalizar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => { }}>
                Eliminar
            </SwipeAction>
        </LeadingActions>
    )
    return (
        <SwipeableList>
            <SwipeableListItem maxSwipe={30}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}>
                <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
                    <div>
                        <img src={`/icono_${expenseInfo.icon}.svg`}
                            alt="icono_gasto"
                            className="w-20"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-sm font-bold uppercase text-slate-500">{expenseInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600">{formatDate(expense.date!.toString())}</p>
                    </div>
                    <AmountDisplay
                        amount={expense.amount}
                    />
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
