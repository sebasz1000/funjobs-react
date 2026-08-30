import { JobCard } from "./JobCard"

export function JobsList({ jobs }) {
    const haveJobs = jobs?.length > 0
    console.log(haveJobs)
    if (!haveJobs)
        return <p>There are not jobs to list</p>

    return jobs.map(job => <JobCard key={job.id} {...job} />)


}