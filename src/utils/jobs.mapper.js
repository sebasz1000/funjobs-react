export const jobsMapper = (jobs) => {
    return jobs.map(job => ({
        ...job,
        isApplied: false
    }))
}