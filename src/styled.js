import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    width: 100%;

    background: radial-gradient(circle, #4d0729, #30083d, #5f185c);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 1800px; 

    .sun{
        img{
            width: 250px;
            height: 250px;
            margin-bottom: 35vh;
        }
    }
        

    .grid {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0px, rgba(54, 226, 248, 0.5) 0%, rgba(54, 226, 248, 0.5) 3px, rgba(0, 0, 0, 0) 0px), linear-gradient(90deg, rgba(0, 0, 0, 0) 0px, rgba(54, 226, 248, 0.5) 0%, rgba(54, 226, 248, 0.5) 3px, rgba(0, 0, 0, 0) 0px); 
        background-size: 4em 4em, 4em 4em;
        background-color: transparent;
        border-top: 5px solid rgb(209,0,177);
        box-shadow: 0 -25px 45px rgb(209,0,177);
        height: 40em;
        transform: scale(1.26) rotateX(80deg);
        position: absolute;
        top:60vh;
        width: 100%;
    
        &:after {
            background: linear-gradient(to bottom, rgba(0,0,0,0) 50%,radial-gradient(circle, #4d0729, #30083d, #5f185c) 95%);
            content: '';
            height: 100%;
            position: absolute;
            width: 100%;
        }
    
        &:before {
            background: radial-gradient(ellipse at center, rgba(0,0,0,0) 30%,rgba(209,0,177,0.5) 90%);     
            content: '';
            height: 100%;
            position: absolute;
            width: 100%;
        }
}
   
`    

