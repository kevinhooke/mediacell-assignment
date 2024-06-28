import { useState } from 'react';

function Search(props) {
    const [codeword, setCodeword] = useState("");
    const [actionId, setActionId] = useState("");

    function handleCodewordOnChange(e){
        setCodeword(e.target.value)
    }
    
    function handleActionOnChange(e){
        setActionId(e.target.value)
    }
    
    let handleSearchButtonClick = async () => {
        console.log('handleSearchButtonClick clicked');
    
        if(actionId){
            props.performActionSearch(actionId);
        }
        else{
            props.performCodewordSearch(codeword);
        }
      }


    return (
        <div>
            <label>Codeword Id: </label><input name="codeword" type="text" value={codeword} onChange={handleCodewordOnChange}/>
            <label>Action Id: </label><input name="actionid" type="text" value={actionId} onChange={handleActionOnChange}/>
            <button name="search" onClick={handleSearchButtonClick}>Search</button>
        </div>
    )
}

export default Search;