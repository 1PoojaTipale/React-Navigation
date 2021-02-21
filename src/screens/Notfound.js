import { Link} from "react-router-dom";


function Notfound() {
    return (
      <div>
          <h1> 404 Page Not Found</h1>
          <Link to="/"> Click Here To Home</Link>

         
      </div>
    
    );
  }
  
  export default Notfound;