import React, { Component } from 'react';
import './MessagePage.css';
import { Link } from 'react-router-dom';
import { NavBar } from "./NavBar";
import { Colors } from "./Colors";
import { FavoriteButton } from "./FavoriteButton";

export class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            color: 'null',
            isFav: false,
            description: '',
            icon: 'ghost',
            favatfirst: false,
            itemID: Date.now(),
            key: "", //"NewMessage" || "EditMessage"
            messageExists: false,
        };
    }

    componentWillMount() {
        let key = "NewMessage";
        if (this.props.match.params.id) {
            key = "EditMessage";
        }

        let messageST = localStorage.getItem(key);
        if (messageST) {
            let messageOB = JSON.parse(messageST);
            this.setState({
                description: messageOB.description,
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

    //the storage will be updated also when reloading the page
    componentDidMount() {
        window.addEventListener("beforeunload", this.updateStorage);
    }

    componentWillUnmount() {
        this.updateStorage();
        window.removeEventListener('beforeunload', this.updateStorage);
    }

    updateStorage = () => {
        console.log("update storage");
        this.updateLocalStorage();
        //this.updateFileSystem();
        //this.updateNativeStorage();
    }

    /*
    errorHandler = (fileName, e) => {  
        let msg = '';
    
        switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
                msg = 'Storage quota exceeded';
                break;
            case FileError.NOT_FOUND_ERR:
                msg = 'File not found';
                break;
            case FileError.SECURITY_ERR:
                msg = 'Security error';
                break;
            case FileError.INVALID_MODIFICATION_ERR:
                msg = 'Invalid modification';
                break;
            case FileError.INVALID_STATE_ERR:
                msg = 'Invalid state';
                break;
            default:
                msg = 'Unknown error';
                break;
        };
    
        console.log('Error (' + fileName + '): ' + msg);
    }

    readFromFile = (fileName, cb) => {
        var pathToFile = cordova.file.dataDirectory + fileName;
        window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();

                reader.onloadend = function (e) {
                    cb(JSON.parse(this.result));
                };

                reader.readAsText(file);
            }, this.errorHandler.bind(null, fileName));
        }, this.errorHandler.bind(null, fileName));
    }

    onDeviceReady = () => {
        let fileData;
        this.readFromFile('data.json', (data) => {
            fileData = data;
        });
    }

    updateFileSystem = () => {
        document.addEventListener('deviceready', this.onDeviceReady(), false);

        if (localStorage.getItem("messages") != null) {
            console.log("messages", localStorage.getItem("messages"));
        }
    }
    */


    /*
    updateNativeStorage = () => {
        if (localStorage.getItem("messages") != null) {
            console.log("messages", localStorage.getItem("messages"));
            window.NativeStorage.setItem("messages",
                localStorage.getItem("messages"),
                () => { console.log("native storage success") },
                () => { console.log("native storage error") }
            );
        }
    }*/

    updateLocalStorage = () => {
        let messageOB = {
            description: this.state.description,
            header: this.state.header,
            color: this.state.color,
            isFav: this.state.isFav,
            icon: this.state.icon,
            itemID: this.state.itemID
        };

        localStorage.setItem(this.state.key, JSON.stringify(messageOB));
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

    saveMessageData = () => {
        let key = "messages";
        let msg = {
            header: this.state.header,
            description: this.state.description,
            isFav: this.state.isFav,
            itemID: this.state.itemID,
            icon: this.state.icon,
            color: this.state.color
        }
        let messagesArr = [];
        let tempmessage = [];
        let messageST = localStorage.getItem(key);

        if (messageST) {
            let messagesOB = JSON.parse(messageST);
            messagesArr = Object.keys(messagesOB).map(obj => messagesOB[obj]);
        }

        let messageExists = this.state.messageExists;
        //check if the message header already exists in the saved messages
        messagesArr.map(currmsg => {
            if (currmsg.header === this.state.header && this.state.key === "NewMessage") {
                messageExists = true;
                this.setState({ messageExists });
            }
        });

        //if the message exists - don't add it again
        if (messageExists) {
            alert("הודעה זו כבר קיימת במערכת");
            return;
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
                localStorage.setItem(key, JSON.stringify(tempmessage));
            } else { //new message
                messagesArr.push(msg);
                localStorage.setItem(key, JSON.stringify(messagesArr));
            }
        }
    }

    render() {
        return (

            <div>
                <NavBar history={this.props.history} />

                <div className="container">

                    <label for="message-title text-right">כותרת ההודעה:</label>
                    <input
                        type="text"
                        onChange={(event) => this.updateInfoEvent("header", event)}
                        className="form-control"
                        id="message-title"
                        placeholder="הכנס/י כותרת להודעה"
                        value={this.state.header}
                    />
                    <small className="form-text text-muted">על הכותרת להיות קצרה ותמציתית.</small>
                    <br />

                    <label for="message-description">תוכן ההודעה:</label>
                    <input
                        type="text"
                        onChange={(event) => this.updateInfoEvent("description", event)}
                        className="form-control"
                        id="message-description"
                        placeholder="תוכן ההודעה"
                        value={this.state.description}
                    />

                    <br />
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
                                    שנה/י אייקון
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* the color picker */}
                    <input
                        type="color"
                        className="btn-circle"
                        rgba
                        value={this.state.color}
                        onChange={(event) => this.updateInfoEvent("color", event)}
                    />
                    <br />

                    <Colors updatecolor={(color) => this.updateInfoValue("color", color)} />
                    <small className="form-text text-muted text-center ">ביכולתך לבחור בצבע מוכן מראש או לחילופין לבחור צבע מותאם אישית.</small>

                    <FavoriteButton favbutt={this.state.isFav} onChange={this.addtofavorite} />

                </div>

                {this.state.header && this.state.description ?
                    <Link to="/">
                        <button
                            type="submit"
                            className="btn btn-secondary btn-lg btn-block"
                            onClick={this.saveMessageData}>
                            {this.state.key === "NewMessage" ? "הוסף/י" : "עדכן/י"}
                        </button>
                    </Link>
                    : <button
                        disabled
                        type="submit"
                        className="btn btn-secondary btn-lg btn-block">
                        {this.state.key === "NewMessage" ? "הוסף/י" : "עדכן/י"}
                    </button>
                }
            </div>
        );
    }
}

export default MessagePage;