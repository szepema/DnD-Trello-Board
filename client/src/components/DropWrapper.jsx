import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { statuses } from "../data/data.json"
import MoveWindow from "./MoveWindow"
import { Fragment, useState } from "react";

const DropWrapper = ({ onDrop, children, status}) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
            

        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    const [open, setOpen] = React.useState(false);
    const handleOpenWindow = () => setOpen(true);
    const handleCloseWindow = () => setOpen(false);

    return (
        <Fragment>
        <div
                ref={drop}
                handleDrop={handleOpenWindow}
                >
                {React.cloneElement(children, { isOver })}
                
            </div>
            <MoveWindow
                handleCloseWindow={handleCloseWindow}
                open={open}    
            />
            </Fragment>
    )
};

export default DropWrapper;