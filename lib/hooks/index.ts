import { useCallback, useState, useEffect } from 'react';

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  
  const toggle = useCallback(() => {
    setState(state => !state);
  }, []);
  
  return [state, toggle] as const;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}