import React from 'react'

function Demo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray' }}>
            <p>Hello</p>
            {false && <p>Hii</p>}
            <p>Good Morning</p>
            <select id="mySelect" aria-invalid="true">
                <option value="">Please select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </select>
        </div>
    )
}

export default Demo