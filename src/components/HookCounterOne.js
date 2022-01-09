import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    //useEffect runs after every render of the component
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
    //in the array we're saying we only want this to run when the count is changed
    //if the count is not changed, it does not run


    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} time(s)</button>
        </div>
    )
}

export default HookCounterOne
