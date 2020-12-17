import React from 'react'

export default function Wallet(props) {

    let cash = React.createRef();

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        props.wallet(cash.current.value)
    }
    
      return (
        <form>
            <input type="text"
                   ref={cash}
            />
            <button onClick={handleClick}>Add Money</button>
        </form>
      );
}

//form to add money
        // <form ref={cash}>
        //     <input type="text"
        //            label={"wallet"} 
        //     />
        //     <button onSubmit={(event) => props.wallet(cash.current["wallet"].value)}>Add Monies</button>
        // </form>

        // <a href="#" onClick={handleClick}>
        //   Click me
        // </a>