import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import MoveWindow from "./MoveWindow";

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color
}

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

const Item = ({ item, index, moveItem, status }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                
                return;
            }
            moveItem(dragIndex, hoverIndex);
            
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={"color-bar"} style={{ backgroundColor: status.color }}/>
                    </Grid>
                    <Grid item xs={8}>
                        <h2 className={"item-title"}>{item.title}</h2>
                    </Grid>
                    <Grid item xs={2} justifyContent="center">
                        <Avatar {...stringAvatar('A F')}>{item.assign}</Avatar>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <p className={"item-content"}>{item.content}</p>
                    </Grid>
                    

                </Grid>
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
            />
            <MoveWindow/>
        </Fragment>
    );
};

export default Item;