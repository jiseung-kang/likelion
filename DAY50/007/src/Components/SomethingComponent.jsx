// import React, { useState } from 'react';

// function SomethingComponent() {
//     const [value, setValue] = useState('initState')
//     function onChange(e) {
//         setValue(e.target.value)
//     }
//     return (
//         <>
//         <input type="text" onChange={onChange}/>
//         <div>
//         {value}가 강해졌다 돌격해!
//         </div>
//         </>
//     )
// }

// export default SomethingComponent

import React from 'react';
import useInput from '../Hook/useInput'
function SomethingComponent() {
    const [value, onChange] = useInput("")
    return (
        <>
        <input type="text" onChange={onChange}/>
        <div>
        {value}가 강해졌다 돌격해!
        </div>
        </>
    )
}
export default SomethingComponent