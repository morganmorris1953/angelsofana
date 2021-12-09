import styled from '@emotion/styled'





function Charities(props) {
    const Button = styled.button`
color: ${props =>
props.primary ? 'hotpink' : 'turquoise'};
`

const Container = styled.div(props => ({
display: 'flex',
flexDirection: props.column && 'column'
}))
    return (
        <div>
        <h1>Charities Page</h1>
  <Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
            </Container>
            </div>
)
    
}

export default Charities;