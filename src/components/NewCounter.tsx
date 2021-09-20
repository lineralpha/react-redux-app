import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import counterReducer, {
    increment,
    decrement,
    increaseByAmount,
    incrementAsync,
} from "../features/newCounter/counterSlice";
import styles from "./Counter.module.css";

const NewCounter = () => {
    const [amountToAdd, setAmountToAdd] = useState(1);
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Dcrement"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    type="text"
                    aria-label="Amount to add"
                    value={amountToAdd}
                    onChange={(e) => setAmountToAdd(Number(e.target.value))}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(increaseByAmount(amountToAdd))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() =>
                        dispatch(incrementAsync(Number(amountToAdd)))
                    }
                >
                    Add Amount Async
                </button>
                <button className={styles.button}
                    disabled={true}
                    onClick={() => {}}>
                    Add If Odd
                </button>
            </div>
        </div>
    );
};

export default NewCounter;
