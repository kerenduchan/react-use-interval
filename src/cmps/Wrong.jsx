import { useEffect, useRef, useState } from 'react'

export function Wrong() {
    const [count, setCount] = useState(0)
    const intervalId = useRef(null)

    useEffect(() => {
        console.log('mounted')
        intervalId.current = setInterval(
            () => console.log('count is ' + count),
            2000
        )

        return () => {
            console.log('unmounted')
            if (intervalId.current) {
                clearInterval(intervalId.current)
            }
        }
    }, [])

    return (
        <div>
            <p>Click the button a few times and check console.log.</p>
            <p>Count is always printed as 0.</p>
            <p>This is the WRONG way.</p>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}
