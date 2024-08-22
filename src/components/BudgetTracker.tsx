import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useBudget } from "../Hooks/useBudget"
import { AmountDisplay } from "./AmountDisplay"
import 'react-circular-progressbar/dist/styles.css'


export const BudgetTracker = () => {
    const { state, totalExpenses, expensesRemaining, dispatch } = useBudget()
    const pecentage = +((totalExpenses / state.budget) * 100).toFixed(2)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap:5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={pecentage}
                    styles={buildStyles({
                        pathColor: '#3b82f6',
                        trailColor: '#F5F5F5',
                        textSize: 8, textColor: '#3b82f6'
                    })}
                    text={`${pecentage}% Gastado`}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button type="button" className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                    onClick={() => dispatch({ type: 'reset-app' })}>
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
