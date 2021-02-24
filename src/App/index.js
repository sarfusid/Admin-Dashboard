import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import SignUp1 from '../Demo/Authentication/SignIn/SignIn1';
import '../../node_modules/font-awesome/scss/font-awesome.scss';
import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import fire,{db} from '../fire';

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          user : { }
        }
      }
      componentDidMount()
      {
        this.authListener();
        this.simpleAddData();
      }
      authListener(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            this.setState({user})
          }
          else{
            this.setState({user : null})
          }
        })
      }
// Add a new document with a generated id.
    simpleAddData = async() => {
      try {
        await db.collection("Suzuki").doc('pd004').set({
            id: 'pd004',
            Screen_size: 10.1,
            particulars: 'DIZIRE 2006-2011',
            storage1 : {
              mrp:14500,
              d_price:10500
            },
            storage2 : {
              mrp:15500,
              d_price: 11500
            }
            

          })
      } catch (error) {
        console.log("Error Aa gaya ", error.message)
      }
    }

    render() {
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        let {user} = this.state

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                             <Route path="/" component={user ? AdminLayout : SignUp1} />
                             {/* { user ? <Route path="/" component={AdminLayout} /> : <Route path="/akash" component={SignUp1} />} */}

                            
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    
    
    }
}

export default App;
