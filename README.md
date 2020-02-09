# react-navigator-user-agent

คือการตรวจสอบอุปการณ์ ที่กำลังใช้อยู่ เช่น ใช้ Android หรือ iOS ในการเปิดหน้าเว็บไซต์


# Installation

    สามารถติดตั้ง จาก yarn หรือ npm ได้

``` javascript

yarn add react-navigator-user-agent

or

npm i -S  react-navigator-user-agent
```

# Usage

``` javascript

import getOS from 'react-navigator-user-agent';

function App () {

    return(
        <div>
        {getOS() !== "Windows" ? (
            <div>
            Mobile
            </div>
        ): (
            <div>
            Mobile
            </div>
        )}
        </div>
    )
}
```

## OS Support

 -Android <br>
 -iOS <br>
 -Windows <br>
 -OS X <br>
