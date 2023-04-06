import { useState } from "react";
function TodoList() {
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  });
  const [job, setJob] = useState("");
  const handleAddJob = () => {
    setJobs((pre) => {
      const newJobs = [
        ...pre,
        {
          id: pre.length,
          jobName: job,
        },
      ];
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ pading: 20 }}>
      <label>Input Job: </label>
      <input value={job} onChange={(e) => setJob(e.target.value)}></input>
      <button onClick={handleAddJob}>Add Job</button>
      <div>
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.jobName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;
