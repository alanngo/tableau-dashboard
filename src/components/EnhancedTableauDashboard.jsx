
import React from 'react';
import TableauReport from 'tableau-react';

const options = {
    height: 1000,
    width: 1500,
    hideTabs: false,
    // All other vizCreate options are supported here, too
    // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
};


const parameters = {
    Param1: 'Value',
    Param2: 'Other Value'
};
const EnhancedTableauDashboard = ({ url }) => {
    return (
        <div className='EnhancedTableauDashboard'>
            <TableauReport
                // filters={filters}
                parameters={parameters}
                options={options} // vizCreate options
                url={url}
            // Overwrite default query params
            // defaults to '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes'
            />
        </div>
    )
}

export default EnhancedTableauDashboard;
