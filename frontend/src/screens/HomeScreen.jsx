import { useEffect,useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import axios from "axios"
import { Product } from '../components/Product'




const HomeScreen = () => {
const[products,setproducts]= useState([])

useEffect(()=>{
  const fetchproducts = async()=>{
    const {data} = await axios.get("/api/products/")
    setproducts(data.products)
  }
 fetchproducts() 
 

},[])
console.log(products)


  return (
    <>

    <h1>LATEST PRODUCTS</h1>
    <Row>
    {products.map((product)=>(
        <Col md={6} sm={12} lg={4} xl={3}>
            <Product product={product}/>
        </Col>


    ))}
    </Row>
    </>
  )
}

export default HomeScreen