import React, { Component } from 'react';
import Navigation from "./Navigation";


class Header extends Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }


  render() {
    return (

      <div>
         
        <Navigation/>
        <div class="table-responsive">
          <table class="table">
            <header>
              
              <div className="head" style={{backgroundColor:'white'}} >
                
                <div>
                </div>
              </div>
            </header>
          </table>
        </div>

      </div>
    );
  }
}

export default Header;
