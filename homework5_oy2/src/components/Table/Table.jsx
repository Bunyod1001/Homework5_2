import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import "./style.css"

export function Table({userData ,removeUser}) {
    console.log(userData);
    return (
    <table className="customers">
        <TableHead />
        <TableBody userData={userData} removeUser={removeUser}/>
    </table>
    );
}



