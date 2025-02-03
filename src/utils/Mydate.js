import React, { use } from 'react';
const MyDate = ()=>{
    console.log('MyDate component rendered');
    return new Date().toLocaleTimeString();
}

export default React.memo(MyDate);