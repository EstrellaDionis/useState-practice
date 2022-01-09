import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)


    //useEffect runs after every render of the component
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} time(s)</button>
        </div>
    )
}

export default HookCounterOne