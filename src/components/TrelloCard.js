import React,{useState} from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
`;
const progressColor = [
  '#5ba4cf',
  '#ffffff',
  '#ef7564',
];

const TrelloCard = ({ text, id, index, tag}) => {

  const [progress, setProgress] = React.useState(tag);
  const chooseMessage = (progresslevel) => {
    setProgress(progresslevel);
    tag=progress;
    // console.log(`progress:${progress} , tag:${tag}`);
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card>
            <CardContent
             style={{
              backgroundColor:`${progressColor[progress]}`
             }}
            >
              <Typography>
                <div
                 style={{ 
                  display:'flex', 
                  alignItems: 'center',
                 }}
                >
                    <span>
                      {text}
                    </span>
                    <span
                     style={{ 
                      marginLeft:'auto'
                     }}
                    >
                      <DropDownMenu chooseMessage={chooseMessage}/>
                    </span>
                </div>

              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;