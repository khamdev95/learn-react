import {useState, useReducer, useRef} from 'react'

// useReducer
    // 1. Init state
    const initState = {
        job: '',
        jobs: []
    }
    // 2. Actions
    const SET_JOB = 'set_job'
    const ADD_JOB = 'add_job'
    const DELETE_JOB = 'delete_job'
    // 3. Reducer
    // 4. Dispatch

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB:
            newState =  {
                ...state,
                job: action.payload
            }
            break;
        
        case ADD_JOB:
            newState =  {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            console.log(action);
            const newJobs = [...state.jobs]
            console.log('sample', [...state.jobs]);
            newJobs.splice(action.payload, 1)
            console.log(newJobs);
            newState =  {
                ...state,
                jobs: newJobs
            }
            break;
    
        default:
            throw new Error('invalid action')
    }
    console.log('newState', newState);
    return newState
}

function LeanrnUseReducer() {
    const [stt, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = stt
    const inputRef = useRef()
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    console.log('da vao func');
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