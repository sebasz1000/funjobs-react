
export function JobCard({ titulo, empresa, ubicacion, descripcion, data }) {

    const [isApplied, setIsapplied] = React.useState(false)
    const { technology, modalidad, nivel } = data
    let dataTechnology = technology

    if (Array.isArray(technology))
        dataTechnology = technology.join(" ")

    const handleApply = () => {
        setIsapplied(prevState => !prevState)
    }

    const ApplyBtnText = isApplied ? "Aplicado" : "Aplicar"
    const ApplyBtnClassName = isApplied ? "is-applied" : ""

    return (<article data-location={modalidad} data-experience={nivel} data-technology={dataTechnology} data-title={titulo.toLowerCase()} className="jobs-listing-card">
        <div>
            <h3 className="jobs-listing-card-title">{titulo}</h3>
            <small>{empresa} | {ubicacion}</small>
            <p>{descripcion}</p>
            <p>Tech Stack: {technology}</p>
            <small>Nivel de experiencia: {nivel}</small>
            <button style={{ display: "block", marginTop: "18px" }}
                onClick={handleApply}
                className={`btn-apply-job ${ApplyBtnClassName}`}>{ApplyBtnText}</button>
        </div>
    </article>)
}