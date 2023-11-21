import { useState, useEffect } from 'react'

export const ContadorAntes = () => {

    const [count, setCount] = useState(0)
    
    const [double, setDouble] = useState(0)

    useEffect(() => {
        setDouble(count * 2)
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>Contador con Use Effect</h1>
            <h4>Contador x 2 = Doble</h4>
            <h6>Cada vez que hagas click el contador sumará uno</h6>
            <button className='btn btn-primary' onClick={increment}>
                {count} x 2 = {double}
            </button>
        </>
    )
}
