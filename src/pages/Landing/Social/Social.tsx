import React from 'react'
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'

interface Props {
    
}

const Social: React.FC<Props> = () => {
    return (
        <Row className="Social" justify='center'>
            <a href="https://drive.google.com/u/0/uc?id=16ecGejNwowiGLaqK44IoLwbfy0MAvARC&export=download" target="_blank"><Col span={2}><span>cv</span></Col></a>
            <a href="https://www.linkedin.com/in/duc-minh-pham/" target="_blank"><Col span={2}><span>in</span></Col></a>
            <a href="https://github.com/monmush" target="_blank"><Col span={2}><span>git</span></Col></a>
        </Row>
    )
}

export default Social
