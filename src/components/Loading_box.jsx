import React from 'react';


function back() {
}

class Box extends React.Component {
  state = {
    gifPlayed: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ gifPlayed: false });
    }, 1000);
  }

  render() {
    const { gifPlayed } = this.state;

    return (
      <div>
        {gifPlayed ? (
          <img src="anim.gif" style={{width:"150px",height:"300px"}} className="center" alt="Gif"  />
        ) : 
        <div>  
        <img src="box.png" className="center" style={{ width:"150px",height:"300px"}}/>
        <hr className="center" style={{width:"25%", height:"3px" , backgroundColor:"black"}}/>
        <p style={{color:"red"}}>¡TU CARRITO ESTA VACIO!</p>
        <hr className="center" style={{width:"25%", height:"3px" , backgroundColor:"black"}}/>
        <button onClick={back} style={{margin:"10px",height:"40px",borderRadius:"10px" , color:"white" ,backgroundColor:"blue"}} >Regresa al Inicio</button>
          </div>}
      </div>
    );
  }
}

export default Box;

