import { useState } from 'react';

function Search() {
    const [codeword, setCodeword] = useState();
    const [actionId, setActionId] = useState();

    function handleCodewordOnChange(e){
        setCodeword(e.target.value)
    }
    
    function handleActionOnChange(e){
        setActionId(e.target.value)
    }
    
    let handleClick = async () => {
        let response = null;
        let result = null;

        console.log('button clicked');
    
        if(actionId){
            //TODO: externalize url to a properties file
            response = await fetch('http://127.0.0.1:3000/actions/action/' + actionId);
            result = await response.json();
        }
        else{
            //TODO: externalize url to a properties file
            response = await fetch('http://127.0.0.1:3000/actions/codeword/' + codeword);
            result = await response.json();
        }
        //TODO: update state results here
        console.log(result);
      }


    return (
        <div>
            <label>Codeword Id: </label><input name="codeword" type="text" value={codeword} onChange={handleCodewordOnChange}/>
            <label>Action Id: </label><input name="actionid" type="text" value={actionId} onChange={handleActionOnChange}/>
            <button name="search" onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search;