import React from 'react';
import {UserContext,ChannelContext} from '../../../App'; 

export default function UseContext3() {
  return (
    <>
    <UserContext.Consumer>
        {
            user =>{
                return (
                    <ChannelContext.Consumer>
                        {
                            channel =>{
                                return <div>
                    User Context value {user},channel Context value
                </div>
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
    </UserContext.Consumer>
    </>

  )
}
