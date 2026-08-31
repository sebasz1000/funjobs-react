import { JobCard } from "./JobCard"

export function JobsList({ jobs, onApply }) {
    const haveJobs = jobs?.length > 0

    if (!haveJobs)
        return <p>There are not jobs to list</p>

    return (
        <div className="jobs-listings">
            {
                jobs.map(job => <JobCard key={job.id} {...job} onApply={onApply} />)
            }
        </div>
    )


}