export default function SearchBar() {

    return (
        <>
        <div className="col col-sm-10">
            <p>What courses are you loking for ?</p>
            <input type="text" placeholder="Programming ..."/>
            <button className="btn btn-info">Search</button>
        </div>
        </>
    )
}