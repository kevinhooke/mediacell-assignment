function SearchResults(props) {

    let results = props.results.map(item =>
        <tr>
            <td>{item.codeword}</td>
            <td>{item.id}</td>
        </tr>
    );



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Codeword</th><th>Action Id</th>
                    </tr>
                </thead>
                { results }
            </table>
        </div>
    )
}

export default SearchResults;