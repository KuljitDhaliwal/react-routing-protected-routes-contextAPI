import { IoHomeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoFolderSharp } from "react-icons/io5";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";

export const Routes = [
    {
        name: 'Dashboard',
        route: '/user/dashboard',
        icon: IoHomeSharp
    },
    {
        name: 'Team',
        route: '/user/team',
        icon: FaUsers
    },
    {
        name: 'Projects',
        route: '/user/projects',
        icon: IoFolderSharp
    },
    {
        name: 'Report',
        route: '/user/report',
        icon: BsFileEarmarkSpreadsheetFill
    },
]