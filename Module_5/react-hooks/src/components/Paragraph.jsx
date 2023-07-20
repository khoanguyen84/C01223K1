import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
// import { ThemeContext } from "../App";
// function Paragraph(props) {
//     const { theme } = props
//     return (
//         <div>
//             <p className={theme}>Elit ipsum nostrud veniam deserunt aliquip aute commodo non. Deserunt labore ea eiusmod nostrud velit proident eu veniam aliqua incididunt do. Quis nisi aute irure ullamco sunt ipsum ea. Fugiat enim dolore amet esse. Mollit sunt sint aute nisi commodo culpa in do sint ex proident. Qui pariatur dolore eu cillum.</p>
//         </div>
//     )
// }
function Paragraph() {
    const consumer = useContext(ThemeContext)
    return (
        <div>
            <p className={consumer.theme}>Elit ipsum nostrud veniam deserunt aliquip aute commodo non. Deserunt labore ea eiusmod nostrud velit proident eu veniam aliqua incididunt do. Quis nisi aute irure ullamco sunt ipsum ea. Fugiat enim dolore amet esse. Mollit sunt sint aute nisi commodo culpa in do sint ex proident. Qui pariatur dolore eu cillum.</p>
        </div>
    )
}

export default Paragraph;