import React, { Component } from 'react';
import './MessagePage.css';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";
import { Colors } from "./Colors";
import FavoriteButton from "./FavoriteButton";
import InternalStorage from "../InternalStorage.js";
import HomePage from "./../home_page/HomePage";

//mobx 
import { observer } from 'mobx-react';

const languages = require('./../Languages.json');

@observer(['Settings'])
class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            color: 'null',
            isFav: false,
            icon: 'ghost',
            favatfirst: false,
            itemID: Date.now(),
            key: "" //"NewMessage" || "EditMessage"
        };
    }

    // Gets the values from the Local Storage
    componentWillMount() {
        let key = "NewMessage";
        if (this.props.match.params.id) {
            key = "EditMessage";
        }

        let messageST = localStorage.getItem(key);
        if (messageST) {
            let messageOB = JSON.parse(messageST);
            this.setState({
                header: messageOB.header,
                color: messageOB.color,
                isFav: messageOB.isFav || this.state.isFav,
                icon: messageOB.icon || this.state.icon,
                favatfirst: messageOB.isFav,
                itemID: this.props.match.params.id ? this.props.match.params.id : Date.now(),
                key: key //"NewMessage" || "EditMessage"
            });
        }
    }

    // Adding Event Listener so the storage will be updated
    // if the component will unmount
    componentDidMount() {
        window.addEventListener("beforeunload", this.updateLocalStorage);
    }

    componentWillUnmount() {
        this.updateLocalStorage();
        window.removeEventListener('beforeunload', this.updateLocalStorage);
    }

    updateLocalStorage = () => {
        let messageOB = {
            header: this.state.header,
            color: this.state.color,
            isFav: this.state.isFav,
            icon: this.state.icon,
            itemID: this.state.itemID
        };

        localStorage.setItem(this.state.key, JSON.stringify(messageOB));
    }

    saveMessageData = () => {
        let msg = {
            header: this.state.header,
            isFav: this.state.isFav,
            itemID: this.state.itemID,
            icon: this.state.icon,
            color: this.state.color
        }
        let messagesArr = [];
        let tempmessage = [];

        InternalStorage.readFile(HomePage.MESSAGES_FILE, (userData) => {
            userData = JSON.parse(userData);
            messagesArr = userData.Messages;

            let messageExists = false;

            //check if the message header already exists in the saved messages
            messagesArr.map(currmsg => {
                if (currmsg.header === this.state.header && this.state.key === "NewMessage") {
                    messageExists = true;
                }
            });

            //if the message exists - don't add it again
            if (messageExists) {
                alert(languages[this.props.Settings.language].msgExistsAlert);
                this.props.history.push('/');
            } else {
                //if the message has an id then it is an "EditMessage" 
                if (this.props.match.params.id) {
                    messagesArr.map(currmsg => {
                        if (currmsg.itemID == this.props.match.params.id) {
                            tempmessage.push(msg);
                        } else {
                            tempmessage.push(currmsg);
                        }
                    });
                    messagesArr = tempmessage;
                } else { //new message
                    messagesArr.push(msg);
                }

                InternalStorage.saveFile({ Messages: messagesArr }, HomePage.MESSAGES_FILE, (_a) => {
                    this.props.history.push("/");
                });
            }
        })

    }

    updateInfoEvent = (key, event) => {
        this.setState({ [key]: event.target.value });
    }

    updateInfoValue = (key, value) => {
        this.setState({ [key]: value });
    }

    addtofavorite = () => {
        this.setState({ isFav: !this.state.isFav });
    }

    onChangeTextInput = (event) => {
        if (!this.allLetter(event.target.value)) {
            event.target.value = '';
        } else {
            this.updateInfoEvent("header", event);
            event.target.value = this.state.header;
        }
    }

    allLetter = (value) => {
        var letters = /^\s*[A-Za-z]+\s*$/;
        
        return letters.test(value)
            ? true
            : false;
    }


    render() {
        return (

            <div>
                <NavBar pageName={this.state.key} history={this.props.history} />

                <div className="container">

                    <label htmlFor="message-title text-right">
                        {languages[this.props.Settings.language].theMsgSubtitle}
                    </label>
                    <input
                        type="text"
                        onChange={(event) => {
                            // this.onChangeTextInput(event); //only letters in english - theres a problem with it
                            this.updateInfoEvent("header", event);
                        }}
                        className="form-control"
                        id="message-title"
                        placeholder={languages[this.props.Settings.language].enterMsgPlaceholder}
                        value={this.state.header}
                        maxLength="30"
                    />
                    <small className="form-text text-muted">
                        {languages[this.props.Settings.language].msgRequirements}
                    </small>
                    <br />

                    <div className="row">
                        <div className="col-11 text-center">
                            <i style={{ color: this.state.color }} className={"fas fa-" + this.state.icon + " fa-5x pull-left"} />
                            <br /><br />

                            <Link to={`/${this.state.key}/IconPage${this.state.key === "EditMessage" ? "/" + this.state.itemID : ""}`}>
                                <button
                                    type="button"
                                    className="btn btn-info ">
                                    <i className="fas fa-pencil-alt"></i>
                                    {languages[this.props.Settings.language].changeIcon}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* the color picker */}

                    <div className="colors-container">
                        <Colors updatecolor={(color) => this.updateInfoValue("color", color)} />

                        <div className="color-picker-container">
                            <img
                                id="color-picker-img"
                                src={require('../../images/color-picker.png')}
                            />
                            <input
                                id="color-picker"
                                className="btn-circle"
                                value="fff"
                                // value={this.state.color}
                                onChange={(event) => this.updateInfoEvent("color", event)}
                                type="color"
                            />
                        </div>
                    </div>
                    <small className="form-text text-muted text-center ">
                        {languages[this.props.Settings.language].colorSmallText}
                    </small>

                    <br />

                    <FavoriteButton favbutt={this.state.isFav} onChange={this.addtofavorite} />

                </div>

                {this.state.header ?
                    <button
                        type="submit"
                        className="submit-message-button btn btn-secondary btn-lg btn-block fixed-bottom"
                        onClick={this.saveMessageData}>
                        {this.state.key === "NewMessage" ?
                            languages[this.props.Settings.language].addMsg
                            :
                            languages[this.props.Settings.language].updateMsg
                        }
                    </button>
                    : <button
                        disabled
                        type="submit"
                        className="submit-message-button btn btn-secondary btn-lg btn-block fixed-bottom">
                        {this.state.key === "NewMessage" ?
                            languages[this.props.Settings.language].addMsg
                            :
                            languages[this.props.Settings.language].updateMsg
                        }
                    </button>
                }
            </div>
        );
    }
}

export default MessagePage;