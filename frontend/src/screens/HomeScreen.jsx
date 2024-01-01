
import { Row,Col } from 'react-bootstrap'

import { Product } from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApi'



const HomeScreen = () => {
const {data:products, isLoading, error} = useGetProductsQuery()

  return (
    <>

    {isLoading ? (<div> Loading...</div>) : error ? (<div>{error?.data?.message || error.error}</div>): ( <>
    <h1>LATEST PRODUCTS</h1>
    <Row>
      {products.products.map((product)=>(
        <Col md={6} sm={12} lg={4} xl={3}>
            <Product product={product}/>
        </Col>
    ))}
    </Row>
    </>) }
   
  </>
  )


}

export default HomeScreen