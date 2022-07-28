import logo from './logo.svg';
import './main-css/main.css';
import './main-css/aemgrid.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Routing from './components/routing-components/Routing';


function App() {
  return (

    <div className="aem-Grid aem-Grid--12">
      <div className="aem-GridColumn aem-GridColumn--default--12">


        <div className="app">
          <div className="aem-Grid aem-Grid--12">

            {/* header section */}

            <div className="aem-GridColumn aem-GridColumn--default--12">


              <header className="app-header">
                <Header />

              </header>

            </div>


            <div className='center-box'>
              <div className="aem-Grid aem-Grid--12">

                {/* Container section */}

                <div className="aem-GridColumn aem-GridColumn--default--12">
                  <Routing />
                </div>
              </div>
            </div>



            {/* footer section */}

            <div className="aem-GridColumn aem-GridColumn--default--12">


              <div className='center-box'>

                <footer className="app-footer ">
                  <Footer />
                </footer>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
