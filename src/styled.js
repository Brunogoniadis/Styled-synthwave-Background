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



    :before {
        
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 90%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        z-index: 2;
        background-size: 100% 5px, 5px 100%;
        pointer-events: none;
    }

    .star{
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: white;
        box-shadow: -24vw -44vh 2px 2px #fff,38vw -4vh 0px 0px #fff,-20vw -48vh 1px 2px #fff,-39vw 38vh 3px 1px #fff,-42vw -11vh 0px 3px #fff,12vw 15vh 3px 3px #fff,42vw 6vh 3px 2px #fff,-8vw 9vh 0px 2px #fff,34vw -38vh 1px 0px #fff,-17vw 45vh 3px 1px #fff,22vw -36vh 3px 2px #fff,-42vw 1vh 1px 0px #fff;

        animation: zoom 0.8s alternate infinite;


        @keyframes zoom {
            0%{
                transform: rotateX(0);
            }
            100%{
                transform: rotateX(35deg);

            }
        }

    }
    .sun{
        position: absolute;
        top: 85px;
        img{
            width: 250px;
            height: 250px;
        }
        @keyframes sunMove {
                0% { margin-top: 0px }
                50% {margin-top: -15px;}
                100%{ margin-top: 0px;}
            }
        animation: sunMove 4s infinite;
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
        z-index: 1001;
    
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
.montainBackgroundImage{


        position: absolute;
        margin-top: 42vh;

        display: flex;
        flex-direction: row;

        gap: -15px;

        .sideRight{
            margin-left: -60px;
        }
        .sideLeft{
            margin-right: -110px;
        }
    }
    @keyframes flicker {
  0% {
  opacity: 0.27861;
  }
  5% {
  opacity: 0.34769;
  }
  10% {
  opacity: 0.23604;
  }
  15% {
  opacity: 0.90626;
  }
  20% {
  opacity: 0.18128;
  }
  25% {
  opacity: 0.83891;
  }
  30% {
  opacity: 0.65583;
  }
  35% {
  opacity: 0.67807;
  }
  40% {
  opacity: 0.26559;
  }
  45% {
  opacity: 0.84693;
  }
  50% {
  opacity: 0.96019;
  }
  55% {
  opacity: 0.08594;
  }
  60% {
  opacity: 0.20313;
  }
  65% {
  opacity: 0.71988;
  }
  70% {
  opacity: 0.53455;
  }
  75% {
  opacity: 0.37288;
  }
  80% {
  opacity: 0.71428;
  }
  85% {
  opacity: 0.70419;
  }
  90% {
  opacity: 0.7003;
  }
  95% {
  opacity: 0.36108;
  }
  100% {
  opacity: 0.24387;
  }
}
`    

