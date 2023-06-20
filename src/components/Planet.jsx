function Planet({id,name,diameter}){
    return(
        <div className="card">
            <h2>
                ({id}) {name}
            </h2>
            <div>Diameter : {diameter.toLocaleString("id-ID")}</div>
        </div>
    )
}
export default Planet;