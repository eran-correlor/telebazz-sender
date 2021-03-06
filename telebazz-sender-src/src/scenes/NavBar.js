import React, { Component } from 'react';

//mobx 
import { observer } from 'mobx-react';

const languages = require('./Languages.json');

@observer(['MessageSending', 'Settings'])
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.backClick = this.backClick.bind(this);
    // this.settingsClick = this.settingsClick.bind(this);
  }

  backClick() {
    if (this.props.history.location.pathname.includes("IconPage")) {
      this.props.history.goBack();
    } else if (this.props.history.location.pathname.includes("NewMessage")
      || this.props.history.location.pathname.includes("EditMessage")
      // || this.props.history.location.pageName.includes("LanguageSettings")
    ) {
      this.props.history.replace("/");
    } else {
      this.props.history.goBack();
    }
  }

  // settingsClick() {
  //   window.location = "/#/LanguageSettings";
  // }

  render() {
    //define the name of the page to show on the top navigation bar
    let pageName = this.props.pageName;
    let displayPageName = '';
    switch (pageName) {
      case "HomePage":
        displayPageName = "Telebuzz";
        break;
      case "NewMessage":
        displayPageName = languages[this.props.Settings.language].newMsgTitle;
        break;
      case "EditMessage":
        displayPageName = languages[this.props.Settings.language].editMsgTitle;
        break;
      case "IconPage":
        displayPageName = languages[this.props.Settings.language].chooseIconTitle;
        break;
      case "SendPage":
        displayPageName = languages[this.props.Settings.language].sendingMsgTitle;
        break;
      // case "LanguageSettings":
      //   displayPageName = "Language Settings";
      //   break;
      default:
        displayPageName = "";
    }

    if (this.props.history === undefined) {
      return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation">
            {/* data-sidebarClass="navbar-dark bg-dark"> */}
            <div className="navbar-brand" href="#">{displayPageName}</div>

            {/* <button
              className="navbar-toggler leftNavbarToggler"
              type="button">
              <div
                onClick={this.settingsClick}
                className="text-light">
                <i className="fas fa-cog" />
              </div>
            </button> */}

          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" >
            {/* data-sidebarClass="navbar-dark bg-dark"> */}
            <div className="navbar-brand" href="#">{displayPageName}</div>
            <button
              className="navbar-toggler leftNavbarToggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span>
                <div
                  onClick={this.backClick}
                  className="text-light">
                  <i className="fas fa-arrow-left" />
                </div>
              </span>
            </button>
          </nav>
        </div>
      );
    }
  }
}

export default NavBar;