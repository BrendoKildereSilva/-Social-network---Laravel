import axios from 'axios'


function ValidAuth(){  

  if(!sessionStorage.getItem('sesstionToken')){
     
    if(window.location.pathname  !== '/auth/login.html' && window.location.pathname !== '/auth/register.html'){
      window.location.href ='/auth/login.html'
    }
  }

}

ValidAuth();

