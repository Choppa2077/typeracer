import React, { useEffect, useMemo } from 'react';
import useWebSocket from 'react-use-websocket';
import { useCreateLinkMutation } from '../../services/startSingleApiSlice';

const FriendsRace = () => {
  const [createLink, { data }] = useCreateLinkMutation();
  const tokenFull = localStorage.getItem('token');
  const arrToken = tokenFull?.split(" ");
  const token = arrToken ? arrToken[1] : '';

  useEffect(() => {
    createLink();
  }, [createLink]);
  
  const WS_URL =`ws://localhost:1001/track/race/${data?.link}`

  // const WS_URL = useMemo(() => {
  //   if (data?.link && token) {
  //     return `ws://localhost:1001/track/race/${data.link}?token=${token}`;
  //   }
  //   return ''; // Return an empty string if either data.link or token is not available
  // }, [data, token]);

  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    queryParams: {token}
    // shouldReconnect: () => false // Disable auto-reconnect
  });

  useEffect(() => {
    if (WS_URL && readyState === WebSocket.CLOSED) {
      console.error('WebSocket connection closed.');
    } else if (WS_URL && readyState === WebSocket.CONNECTING) {
      console.log('WebSocket connecting...');
    } else if (WS_URL && readyState === WebSocket.OPEN) {
      console.log('WebSocket connected.');
    }

    return () => {
      if (WS_URL) {
        console.log('Cleaning up WebSocket connection...');
        sendJsonMessage('disconnect');
      }
    };
  }, [WS_URL, readyState, sendJsonMessage]);

  return <div>FriendsRace</div>;
};

export default FriendsRace;
