import { IoHomeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";

export const Routes = [
    {
        name: 'Dashboard',
        route: '/dashboard',
        icon: IoHomeSharp
    },
    {
        name: 'Team',
        route: '/team',
        icon: FaUsers
    },
    {
        name: 'Projects',
        route: '/projects',
        icon: IoFolderSharp
    },
    {
        name: 'Report',
        route: '/report',
        icon: BsFileEarmarkSpreadsheetFill
    },
]