import React,{useContext} from 'react'
import UseContext3 from './UseContext3';
import { UserContext,ChannelContext } from '../../../App';

export default function UseContext2() {
   const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <>
       {user} - {channel}
    </>
  )
}
