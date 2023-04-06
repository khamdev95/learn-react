import {useReducer, useRef} from 'react'
import {addJob, deleteJob, setJob } from './actions'
import reducer, { initState } from './reducer'
// useReducer
    // 1. Init state
    // 2. Actions
    // 3. Reducer
    // 4. Dispatch
function LeanrnUseReducer() {
    const [stt, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = stt
    const inputRef = useRef()
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (
        <div style={{pading: 30}}>
            <label>Input Job: </label>
                <input 
                    ref={inputRef}
                    value={job} 
                    onChange={(e) => {
                        dispatch(setJob(e.target.value))
                    }}
                    ></input>
                <button
                    onClick={handleSubmit}
                    
                >Add Job</button>
                <div>
                    <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>{job}
                        <span
                            style={{paddingLeft: 10}}
                            onClick={() => dispatch(deleteJob(index))}>
                            &times;
                            </span>
                        </li>
                        
                    )) || ''}
                    </ul>
                </div>
        </div>
    )
}

export default LeanrnUseReducer 