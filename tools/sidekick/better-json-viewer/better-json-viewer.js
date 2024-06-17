(async () => {
    try {
      // get the resource URL from the url query parameter
      const url = new URL(window.location.href).searchParams.get('url');
      if (url) {
        const res = await fetch(url);
        if (res.ok) {
          const text = await res.text();
          const data = JSON.parse(text);
          // do something with the data
        } else {
          throw new Error(`failed to load ${url}: ${res.status}`);
        }
      }
    } catch (e) {
      console.error('error rendering view', e);
    }
  })();