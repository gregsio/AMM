import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

  const Tabs = () => {
      return(
<Nav variant="pills" defaultActiveKey="/" className='justify-content-center my-4'>
        <LinkContainer to="/">
            <Nav.Link>Swap</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Deposit">
            <Nav.Link>Deposit</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/withdraw">
            <Nav.Link>Withdraw</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Charts">
            <Nav.Link>Charts</Nav.Link>
        </LinkContainer>
</Nav>
      )
  }
  
  export default Tabs;
  