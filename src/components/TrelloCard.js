import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
`;

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card>
            <CardContent>
              <Typography>
                <div
                 style={{ 
                  display:'flex', 
                  alignItems: 'center'
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
                      <DropDownMenu />
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
