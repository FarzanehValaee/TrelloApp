import React, { Component } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {connect} from "react-redux";
import { addList,addCard } from '../actions';

class TrelloActionButton extends Component {
          state={
                    formOpen: false,
                    text:"",
          };

          openForm=()=>{
                    this.setState({
                              formOpen: true
                    })
          }
          closeForm=()=>{
                    this.setState({
                              formOpen: false
                    })         
          }
          handleInputChange=(e)=>{
                    this.setState({
                              text: e.target.value
                    })
          }
          handleAddList = ()=>{
            const {dispatch}= this.props;
            const {text}= this.state;
            if(text){
              dispatch(addList(text));
            }
            return ;
          }
          handleAddCard = ()=>{
            const {dispatch , listID}= this.props;
            const {text}= this.state;
            // console.log(listID);
            if(text){
              // console.log(text);
              // console.log(listID);
              dispatch(addCard(listID,text));
            }
            return ;
          }
          

          renderAddButton=()=> {
                    const {list}=this.props;

                    const buttonText= list? "Add another list":"Add a card";
                    const buttonTextOpacity= list? 1:0.5;
                    const buttonTextColor= list? "white":"inherit";
                    const buttonTextBackground= list? "rgba(0,0,0,.15)":"inherit";
                    return(
                          <div
                            style={{
                              ...aditionalStyles.buttonStyle,
                              opacity:buttonTextOpacity, 
                              backgroundColor:buttonTextBackground,
                              color:buttonTextColor
                             }}
                             onClick={this.openForm}
                          >
                              <span>
                                        <AddIcon />
                              </span>
                              <p>
                                        {buttonText}
                              </p>
                          </div>
                    )
          }
          renderForm=()=>{
                    const {list} = this.props;
                    const placeholder = 
                    list?
                    "Enter list title..."
                    :"Enter a title for this card...";
                    const buttonTitle=
                    list? 
                    "Add list"
                    :"Add Card";

                    return (
                              <div
                               style={{
                                        backgroundColor:'rgb(223, 227, 230)',
                                        padding:5,
                                        borderRadius:3,
                                        height:'100%'
                               }}
                              >
                                <Card
                                  style={{
                                        overflow:'visible',
                                        minHeight:80,
                                        minWidth:272,
                                        padding:3
                                  }}
                                >
                                        <TextareaAutosize 
                                         placeholder={placeholder}
                                         autoFocus
                                         onBlur={this.closeForm}
                                         value={this.state.text}
                                         onChange={this.handleInputChange}
                                         style={{
                                                  resize:"none",
                                                  width:"98%",
                                                  outline:"none",
                                                  border:"none"
                                         }}
                                        />

                                </Card>
                                <div className="buttons"
                                 style={{
                                        display:'flex',
                                        alignItems:'center',
                                        margin:5
                                 }}
                                >
                                        <Button 
                                         variant="contained"
                                         size='small'
                                         fontSize="xx-small"
                                         padding="1"
                                         style={{
                                           textTransform: 'none'
                                         }}
                                         //it runs before onBlur
                                         onMouseDown={list ? 
                                          this.handleAddList
                                          :this.handleAddCard
                                        }
                                         >
                                          {buttonTitle}

                                        </Button>
                                        <CloseIcon 
                                         style={{
                                                  marginLeft:'5',
                                                  color:"#6b778c"
                                         }}
                                         onClick={this.closeForm}
                                        />
                                        <div
                                                  style={{
                                                            marginLeft: 'auto'
                                                  }}
                                        >
                                        <MoreHorizIcon 
                                                  style={{
                                                            color:"#6b778c"
                                                  }}
                                        />

                                        </div>
                                </div>
                              </div>
                    )

          }
  render() {
    return this.state.formOpen? this.renderForm():this.renderAddButton();
  }
}
const aditionalStyles={
          buttonStyle:{
                    display: "flex",
                    alignItems: "center",
                    cursor:"pointer",
                    borderRadius:3,
                    height:36,
                    width:272,
                    paddingLeft:10
          }
          
}

export default connect ()(TrelloActionButton)
