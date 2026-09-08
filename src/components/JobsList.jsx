import { JobCard } from "./JobCard"

export function JobsList({ jobs, onApply }) {
    const haveJobs = jobs?.length > 0

    if (!haveJobs)
        return <p>There are not jobs to list</p>

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>
            <div className="jobs-listings">
                {
                    jobs.map(job => <JobCard key={job.id} {...job} onApply={onApply} />)
                }
            </div>
        </>
    )


}