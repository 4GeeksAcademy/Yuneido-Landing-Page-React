import React from "react"


function Footer(props){

    return(<div className=" container-fluid bg-dark text-center pt-4" style={{height: "10%"}}>
        <p className="text-white">
        © Copyright {props.website} - {props.year}
        </p>
    </div>)
}

export default Footer