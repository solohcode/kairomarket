import { Image } from 'antd'
import React from 'react'
import b1 from '../../../../resources/images/b1.png'
import b2 from '../../../../resources/images/b2.png'
import b3 from '../../../../resources/images/b3.png'

export default function Banner() {
    return (
        <div>
            <div className="w-75 mx-auto bg-light my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div>
                                <Image
                                 src={b1}
                                 width='100%'
                                 height='200px'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <Image
                                 src={b2}
                                 width='100%'
                                 height='200px'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <Image
                                 src={b3}
                                 width='100%'
                                 height='200px'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
