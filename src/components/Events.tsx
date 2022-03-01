import React from "react";
import { Alert, AlertItem, AlertLevel, AlertSize, AlertType } from "@dellstorage/clarity-react/emphasis/alert";



const Events = () => {
    return (
        <Alert type={AlertType.INFO} level={AlertLevel.APP} >
            <AlertItem>Informational Standard</AlertItem>
        </Alert>
    )
}

export default Events