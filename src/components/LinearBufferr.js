import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LinearBuffer() {
    const [completed, setCompleted] = React.useState(40);
    const [buffer,setBuffer] = React.useState(10);

    const progress = React.useRef(() => {});
    React.useEffect(() => {
        progress.current = () => {
            if (completed > 100) {
                setCompleted(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setCompleted(completed + diff);
                setBuffer(completed + diff + diff2);
            }
        };
    });


    React.useEffect(() => {
        function tick() {
            progress.current();
        }

        const  timer = setInterval(tick,500);

        return () => {
            clearInterval(timer);
        };
    },[]);



    return (
        <div>
            <CircularProgress variant="static" value={completed} />
            <LinearProgress variant={"buffer"} value={completed} valueBuffer={buffer} color={"secondary"}/><br/>
            {/*<LinearProgress variant={"query"} value={completed} valueBuffer={buffer} color={"primary"}/><br/>*/}
            {/*<LinearProgress variant={"indeterminate"} value={completed} valueBuffer={buffer} color={"secondary"}/><br/>*/}
            {/*<LinearProgress variant={"determinate"} value={completed} valueBuffer={buffer} color={"primary"}/><br/>*/}



        </div>
    );

}
