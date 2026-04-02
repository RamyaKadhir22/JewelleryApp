import {useNavigate, useNavigation} from 'react-router'


export default function Products({addToCart}){
    const navigate = useNavigate();
return(
    <>
    <div>
        <button onClick={() => navigate("/")}> </button>
    </div>
    
)
}