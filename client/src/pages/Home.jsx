import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import Paper from "@mui/material/Paper"
import { data, statuses } from "../data/data.json";
import Grid from '@mui/material/Grid';

const Home = () => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    return (
        <div className={"row"}>
            {statuses.map(s => {
                return (
                    <Grid contianer spacing={4}>
                        
                        <div key={s.status} className={"col-wrapper"}>
                            
                            <Grid item sx={8}>
                                <h2 className={"col-header"}>{s.icon}{s.status.toUpperCase()}</h2>
                            </Grid>
                            <DropWrapper onDrop={onDrop} status={s.status}>
                                <Col>
                                    {items
                                        .filter(i => i.status === s.status)
                                        .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                    }
                                    
                                </Col>
                                
                            </DropWrapper>
                        </div>
                        
                    </Grid>
                );
            })}
        </div>
    );
};

export default Home;