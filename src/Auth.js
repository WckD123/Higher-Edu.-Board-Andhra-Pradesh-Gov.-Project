import auth0, {WebAuth} from 'auth0-js';
import history from './history';

class Auth{
    auth0 = new WebAuth({
        domain: 'react-secure.auth0.com',
        clientID: '5NgsctEOriTm20mPYe0f65JI5fr7kHjx',
        redirectUri: 'https://gettinn.com/callback',
        responseType: 'token'
        
    });

    loggedIn = false;

    login = () => {
        this.auth0.authorize();

    }
    handleAuthentication = () => {
        this.auth0.parseHash((err,authResult) =>{
          if(authResult){
              localStorage.setItem('access_token',authResult)
              localStorage.setItem(
                  'expires_at',
                  JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
                );
            this.loggedIn = true;
            history.replace('/');
          }
          else if(err)
          {
              console.log('err',err);
          }
        });

    }
    logout = () => {
        ['access_token','expires_at'].forEach(item =>localStorage.removeItem(item));
        this.loggedIn = false;
        history.replace('/');
    }
    isAuthenticated = () => {
        return true //this.loggedIn && 
        //new Date().getTime() < +localStorage.getItem('expires_at');
    }
}


export default Auth;