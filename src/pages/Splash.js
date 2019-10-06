import React, { Component } from "react";
import Image from "../Components/Image";
import "./Splash.css";

function LoadingMessage() {
  return (
    <div className="splash-screen">
     <Image src="https://i.ibb.co/WtRGzd7/Greda-Splash-logo-1.png" alt="GREDA Logo"></Image>
     <div className="loading-dot">.</div>
    </div>
  );
}

function Splash(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 3000)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}

// class Splash extends Component {
//     render() {
//         return (
//             <div className="grad">
//                 <Image src="https://i.ibb.co/ySbtKYV/Greda-Splash-logo-2x.png" alt="GREDA Logo"></Image>
//             </div>
//         );
//     }
// }

export default Splash;