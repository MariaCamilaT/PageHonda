import styled from 'styled-components';

export const NavS = styled.nav`
  top: 0;
  z-index: 1;
  width: 100%;
  height: 60px;
  position: sticky;
  margin-bottom: -20px;
  background-color: white;
  
  @media screen and (max-width: 320px) {
    height: 50px;
  }
  
  @media screen and (min-width: 700px) {
    height:90px ;
  }

  @media screen and (max-width: 1024px) {
    box-shadow: 0 2px 4px 0 #eaeaea;
  }
  
  @media screen and (min-width: 1024px) {
    margin-bottom: 30px;
    height: 90px;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.div`
  width: 200px;
  margin: 15px 50px;

    img{
      width: 250px;
    }

  @media screen and (max-width:1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

      img {
        margin-left: ${({clickSearch}) => !clickSearch? '0':'500px' };
      }
  }

  @media screen and (max-width:768px) {
    img {
      width: 150px;
      margin-left: ${({click}) => !click? '0':'100px' };
    }

    img {
      width: 120px;
      margin-left: ${({clickSearch}) => !clickSearch? '0':'360px' };
    }
  }

  @media screen and (max-width:320px) {
    margin: 0;
    width: 100%;
    display: flex;
    padding: 20px;
    margin-top: -30px;
    padding-top: 40px;
    align-items: center;
    justify-content: space-between;

    img {
      width: 110px;
      height: 30px;
      margin-left: ${({click}) => !click? '0':'0px' };
      margin-right: ${({clickSearch}) => clickSearch? '-120px': '0px'};
    }
  }
`
export const Menu = styled.ul`
  width: 60%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: white;
  justify-content: space-between;
  
  @media screen and (max-width:1024px) {
    top: 200px;
    width: 100%;
    height: 100vh;
    display: flex;
    padding-top: 30px;
    position: absolute;
    margin-top: -140px;
    flex-direction: column;
    left: ${({click}) => click? '0':'-100%'};
  }
    
  @media screen and (max-width:319px) {
    width: 100%;
    overflow: hidden;
    margin-top: -130px;
  }

  @media screen and (min-width:321px) and (max-width: 1025px) {
    height: 150vh;
    padding-left: 20px;
  }

  
  @media screen and (min-width:320px) and (max-width: 428px) {
    margin-top: -150px;
  }
  
  @media screen and (min-width: 1105px) {
    margin-top: 21px;
    margin-right: -20px;
  }



    > div:nth-child(2) {
      width: 100%;
      bottom: 100px;
      position: absolute;
      margin: 0px 10px 0px 10px;
      
      > div:first-child {
        > li {
          width: 100%;
          height: 40px;
          display: flex;
          color:#535353;
          font-size: 1.6rem;
          align-items: center;
          font-family: 'Open Sans';
          border-bottom: 1px solid #EAEAEA;
          }
        }

        > div:nth-child(2) {
          display: flex;

            > div {
              margin-top: 10px;
              margin-right: 20px;

              h2 {
                font-weight: bold;
                font-size: 1.4rem;
                margin-bottom: 15px;
                font-family: Helvetica, sans-serif;
              }

              img {
                width: 30px;
                height: 30px;
                margin-right: 10px;
              }
            }
        }
    }
`

export const MenuItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

    span{
      display: none;
    }

    a:nth-child(7){
      display: none;
    }

  @media screen and (min-width:1024px) {
    padding-right: 50px;
  }
  
  @media screen and (max-width:1024px) {
    width: 100%;
    display: flex;
    height: 400px;
    text-align: left;
    position: relative;
    flex-direction: column;
    
    span {
      display: flex;
      margin-right: 5px;
      font-size:1.8rem ;
      font-weight: normal;
      font-family: Helvetica;
    }

    a:nth-child(7){
      display: flex;
    }

    svg {
      width: 20px;
      height: 20px;
      right: 20px;
      font-size: 3rem;
      color: #D43131;
      margin-left: 10px; 
      position: absolute;
    }
  }

  @media screen and (max-width:320px) {
    width: 100%;
    height: 200px;
    margin-top: -19px;

    a:nth-child(7){
      display: flex;
    }

    span {
      margin-right: 5px;
      font-size:1.2rem ;
      font-weight: normal;
      font-family: Helvetica;
    }

    svg {
      color: #D43131;
      margin-left: 10px; 
    }
  }
`

export const ItemLink = styled.a`
  width: 121px;
  height: 20px;
  display: flex;
  color: #535353;
  font-weight: bold;
  font-size: 1.3rem;
  align-items: center;
  font-family: Helvetica;

    &:hover {
      color: #CC0000;
    }
    
    svg {
      font-size: 17px;
    }

  @media screen and (min-width:1026px) {
    justify-content: center;
  }

  @media screen and (max-width:1024px) {
    width: 1000px;
    display: flex;
    font-size: 3rem;
    align-items: center;
    font-family: Helvetica;

      img {
        width: 20px;
        right: 20px;
        height: 20px;
        position: absolute;
      }
  }

  @media screen and (max-width:320px) {
    width: 0;
    width: 300px;
    display: flex;
    font-size: 2rem;
    position: relative;
    align-items: center;
    margin-bottom: -30px;

      img {
        right: 4px;
        width: 20px;
        position: absolute;
      }

      svg {
        right: 4px;
        font-size: 30px;
        position: absolute;
      }
  }

  @media screen and (max-width:768px) and (min-width:768px) {
    width: 700px;
    display: flex;
    font-size: 2.5rem;
    position: relative;
    align-items: center;

      img {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
      }

      svg{
        right: 20px;
        position: absolute;
      }
  }
`

export const Shopping = styled.div`
  display: flex;
  align-items: center;

    a {
      color: black;
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      font-family: Helvetica, sans-serif;

      &:hover {
        text-decoration: underline;
      }
    }

    img{
      width: 21px;
      height: 21px;
      margin-left: 3px;
    }
    
    @media screen and (max-width:1024px) {
      display: none;
    }
    
    @media screen and (min-width: 1105px) {
      margin-top: 14px;
      margin-right: 35px;
    }
`

export const ContainerSearch = styled.div`
  display: none;

  svg{
    font-size: 20px;
    color: #535353;
  }
  
  @media screen and (max-width:1024px) {
    display: flex;
    cursor: pointer;
    display: ${({click}) => click? 'none':''};
  }
  
  @media screen and (max-width:320px) {
    display: ${({click}) => click? 'none':''};
  }
`

export const ContainerMenu = styled.div`
  display: none;
  align-items: center;
  
    h1 {
      margin-left: 3px;
      font-size: 1.5rem;
      font-family: Helvetica;
    }

    svg {
      font-size: 20px;
    }

  @media screen and (max-width:1024px) {
    display: flex;
    cursor: pointer;

      h1 {
        color: #535353;
        font-size: 1.4rem;
        font-weight: bold;
      }

      svg {
        color: #535353;
        font-weight: bold;
        font-size: 1.9rem;
      }

      div:first-child {
        align-items: center;
        display: ${({clickSearch}) => clickSearch? 'none': 'flex'};
      }

      div:nth-child(2) {
        display: flex;
        align-items: center;
      }
  }

  @media screen and (max-width:320px) {
    h1 {
      color: #535353;
      font-size: 1.2rem;
      font-weight: bold;
    }

    svg {
      color: #535353;
      font-weight: bold;
      font-size: 1.5rem;
    }

    div:first-child {
      align-items: center;
      display: ${({clickSearch}) => clickSearch? 'none': 'flex'};
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
    }
  }

  @media screen and (min-width:768px) {
    h1 {
      color: #535353;
      font-size: 1.4rem;
      font-weight: bold;
    }

    svg {
      font-size: 2rem;
      color: #535353;
      font-weight: bold;
    }

    div:first-child {
      align-items: center;
      display: ${({clickSearch}) => clickSearch? 'none': 'flex'};
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
    }
  }
`

export const Search = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  overflow: hidden;
  padding-top: 150px;
  padding-right: 20px;
  justify-content: center;
  background-color: white;

    @media screen and (max-width:320px) {
      margin-top: -10px;

      input {
        width: 250px;
        margin-top: -70px;
        margin-left: 20px;
      }
    }

    @media screen and (min-width:768px) {
      input {
        width: 650px;
        margin-top: -50px;
      }
    }

    @media screen and (min-width:1024px) {
      input {
        width: 700px;
        margin-top: -70px;
      }
    }
`
