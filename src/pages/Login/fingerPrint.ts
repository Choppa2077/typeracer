import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

export const fetchFingerPrint = () => {
  const { data } = useVisitorData(
    { extendedResult: true },
    { immediate: true },
  );
  // console.log(data);
  

  return data?.visitorId;
};
