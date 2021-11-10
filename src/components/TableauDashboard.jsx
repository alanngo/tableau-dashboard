
import React,{useRef, useEffect, useCallback} from 'react';
const {tableau} = window
const TableauDashboard = ({url}) => 
{
    const ref = useRef(null)
    console.log(ref)

    const initViz =useCallback(() =>
    {
        new tableau.Viz(ref.current, url)
    }, [url]) 
    useEffect(() =>{
        initViz()
    }, [initViz])

    return (
        <div className='TableauDashboard' ref={ref}
        style={{width:'70%', margin:'auto', height:'100%'}}/>
    )
}

export default TableauDashboard;
