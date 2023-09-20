import { useState } from 'react'
import { useInterval } from '../useInterval'

export function Right() {
    const [count, setCount] = useState(0)

    useInterval(() => console.log('count is ' + count), 2000)

    return (
        <div>
            <p>Click the button a few times and check console.log.</p>
            <p>Count is printed as expected.</p>
            <p>This is the RIGHT way.</p>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}
