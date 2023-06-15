import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!DOCTYPE html>
<html>
<title>hizzal storage main page</title>
<!--테스트-->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.button {
  width: 140px;
  height: 40px;
  gap: 10px;
  padding: 0px 15px;
  background-color: red;
  border-radius: 10px;
  border: none;
  color: white;
  position: relative;
  cursor: pointer;
  font-weight: 900;
  transition-duration: .2s;
  background: linear-gradient(0deg, #000, #272727);
}

.button:before, .button:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  border-radius: 10px;
  background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094, 
		#0000ff, #00ff00,#ffff00, #ff0000);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.button:after {
  filter: blur(50px);
}
  
  #h6 {
  display: flex;
  justify-content: center;
  align-items: center;
  }
  #bu1 {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 70px;
  }
  #font1{
  font-align: center;
  }
  #footer {
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .custom-btn {
  width: 55px;
  height: 55px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
}
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
.flex {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#DIV2 {
  height: 150px;
  background-color: lightgrey;
  aspect-ratio: 1;
  animation: mymove 5s infinite;
  }
  @keyframes mymove {
  1% {aspect-ratio: 1;}
  70% {aspect-ratio: 10;}
</style>
<body class="w3-light-grey w3-content" style="max-width:1600px">

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container">
    <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
      <i class="fa fa-remove"></i>
    </a>
    <img src="" style="width:45%;" class="w3-round"><br><br>
    <h2><b></b></h2>
  </div>
  <div class="w3-bar-block">
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px">

  <!-- Header -->
  <header id="짤저장소">
    <a href="#"><img src=""></a>
    <div class="w3-container">
    <h1><b>hizzal main page</b></h1>
    <p><b>ㅎㅇ방 짤 저장소</b></p>
    <div class="w3-section w3-bottombar w3-padding-16">
    </div>
  </header>
  <div class="w3-container">
  <div id="h6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <a href="secretpageno1.html"><div id="h6"><button class="button">storage1</button></div></a>
  </button>
  <div id="h6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  <div class="w3-section w3-bottombar w3-padding-16"></div>
  </body>
</html>
  )
}
