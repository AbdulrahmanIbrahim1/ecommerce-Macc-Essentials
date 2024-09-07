import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function Cart() {
  return (
    <Container>
      Cart
      <br />
      <Link to={'/checkout'} className="btn btn-danger">
      Go to checkout
      </Link>
      </Container>
  )
}

export default Cart