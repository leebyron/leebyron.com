let _isMobile: boolean | undefined;
export function isMobile() {
  if (typeof window !== 'object') {
    return false;
  }
  if (_isMobile === undefined) {
    const query = window.matchMedia('(max-width: 799px) or (max-height: 499px)')
    _isMobile = query.matches
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
    ;(query.addListener as any)((event: any) => {
      _isMobile = event.matches
    })
  }
  return _isMobile
}
