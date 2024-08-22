import { useMemo } from "react"
import { useBudget } from "../Hooks/useBudget"
import { AmountDisplay } from "./AmountDisplay"


export const BudgetTracker = () => {
    const { state, totalExpenses, expensesRemaining } = useBudget()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap:5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="grafica" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button type="button" className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
                    Resetar App
                </button>
                <AmountDisplay
                    label="Presupuesto"
                    amount={state.budget} />

                <AmountDisplay
                    label="Disponible"
                    amount={expensesRemaining} />

                <AmountDisplay
                    label="Gastado"
                    amount={totalExpenses} />

            </div>

        </div>
    )
}
