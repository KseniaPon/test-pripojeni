import { useEffect, useState } from 'react';

export const Offline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  
  const handleOffline = () => {
    setIsOnline(false)
    console.log('handleOffline')
  }

  const handleOnline = () => {
    setIsOnline(true)
    console.log('handleOnline')
  }

  useEffect(
    () => {
    console.log('mounted')
    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)
    
    return () => {
      console.log('unmounted')
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, []);


  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  }



  return (
    <p>Jste offline!</p>
  );
};

export default Offline;