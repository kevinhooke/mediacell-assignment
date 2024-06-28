function SearchResults(props) {

    let results = []
    
    //TODO: on app load, props.results in [] and so displays the 'No results found' message, update this.

    if(props.results && props.results.length > 0){
        results = props.results.map(item =>
        <tr key={item.codeword}>
            <td className="col1">{item.codeword}</td>
            <td className="col2">{item.id}</td>
        </tr>
    )}
    else{
        results = <tr>
            <td className="col1">No results found</td><td className="col2">&nbsp;</td>
            </tr>
    }



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th >Codeword</th><th>Action Id</th>
                    </tr>
                </thead>
                <tbody>
                    { results }                
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults;