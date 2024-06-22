import React from "react";
import avatar from '../../../assets/default-avatar.svg'

export function Person({name, nickName, images}) {

  const img = images?.[0]?.small?.url || avatar
  return <>
    <img src={img} alt={name} style={{width: "50px"}}/>
    <h4>{name}</h4>
    <p>{(nickName) ? 'Nickname: ' + nickName : ''}</p>
  </>;
}
  