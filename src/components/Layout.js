import styled from "styled-components"

function Layout (props){
    const Div = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;`
    return(
        <Div>
            {
                props.children
            }
        </Div>
    )
}

export default Layout